from flask import Flask, request, jsonify, redirect, render_template,make_response
from flask_restful import Resource, Api
from transformers import pipeline
from flask_cors import CORS  # Import the CORS module
import whisper
import os
import re
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.layers import LSTM
from tensorflow.keras.preprocessing.sequence import pad_sequences
import json
import random
import sqlite3
import pickle
from ChatBotApp import get_bot_response

# Initialize Flask app and API
app = Flask(__name__)
# Enable CORS for specific origins
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000", "http://localhost:3001"]}})
api = Api(app)

# Custom function to handle the LSTM layer if needed
def custom_lstm(*args, **kwargs):
    kwargs.pop('time_major', None)  # Remove the time_major argument
    return LSTM(*args, **kwargs)

# Load the sentiment-analysis model
classifier = pipeline('sentiment-analysis', model="distilbert-base-uncased-finetuned-sst-2-english")

DIRNAME = os.path.dirname(os.path.realpath(__file__))
DB = sqlite3.connect(DIRNAME + r'/data/meta.db', check_same_thread=False)
MODEL = load_model(DIRNAME + r'/data/Glove_embedding_CNN_LSTM_model.h5',custom_objects={'LSTM': custom_lstm})
NUM_OF_TRACKS = 5
MAXLEN = 41
MAX_FEATURES = 5000

with open(DIRNAME + r'/data/tokenizer.pkl', 'rb') as p:
    TOKENIZER = pickle.load(p)
with open(DIRNAME + r'/data/tags-trackid.json', 'r') as f:
    DATA = json.load(f)
with open(DIRNAME + r'/data/tags-trackid.json', 'r') as f:
    LABELS = json.load(f)

# HELPER FUNCTIONS 
def _remove_username(inp):
    pat = r'@[^\s]+'
    return re.sub(pat, '', inp)

def _remove_punctuation(inp):
    pat = '[!#?,.:";]'
    return re.sub(pat, '', inp)

def _remove_emojis(inp):
    pat = re.compile(pattern = "["
      u"\U0001F600-\U0001F64F"  # emoticons
        u"\U0001F300-\U0001F5FF"  # symbols & pictographs
        u"\U0001F680-\U0001F6FF"  # transport & map symbols
        u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
                           "]+", flags = re.UNICODE)
    return pat.sub(r'', inp)

def _remove_misc(inp):
    inp = inp.replace("\\", "")
    inp = inp.replace("&amp", "")
    return inp

def _get_sequences_and_pad(inp):
    sequences = TOKENIZER.texts_to_sequences([inp])
    padded = pad_sequences(sequences=sequences, maxlen=MAXLEN, padding='post')
    return padded


# FUNCTION TO PREPARE DATA FOR MODEL INPUT
def prepare_input(inp):
    inp = inp.lower()
    inp = _remove_username(inp)
    inp = _remove_punctuation(inp)
    inp = _remove_emojis(inp)
    inp = _remove_misc(inp)
    padded = _get_sequences_and_pad(inp)
    return padded


def _get_calm_songs():
    try:
        song_pool = DATA["calm"]
        query = 'SELECT * FROM songs_mini WHERE track_id IN {0}'.format(tuple(random.choices(song_pool, k=NUM_OF_TRACKS)))
        return DB.execute(query).fetchall()
    except Exception as e:
        print(f"An error occurred: {e}")
        return []


def _get_religious_songs():
    try:
        song_pool = DATA["religious"] + DATA['religion']
        query = 'SELECT * FROM songs_mini WHERE track_id IN {0}'.format(tuple(random.choices(song_pool, k=NUM_OF_TRACKS)))
        return DB.execute(query).fetchall()
    except Exception as e:
        print(f"An error occurred: {e}")
        return []


def _get_joyful_songs():
    try:
        song_pool = DATA["dance"] + DATA['happy'] + DATA['joy'] + DATA['joyful'] + DATA['joyfull']
        query = 'SELECT * FROM songs_mini WHERE track_id IN {0}'.format(tuple(random.choices(song_pool, k=NUM_OF_TRACKS)))
        return DB.execute(query).fetchall()
    except Exception as e:
        print(f"An error occurred: {e}")
        return []


def _get_cheerfull_songs():
    try:
        song_pool = DATA["cheer"] + DATA['cheerful'] + DATA['happy']
        query = 'SELECT * FROM songs_mini WHERE track_id IN {0}'.format(tuple(random.choices(song_pool, k=NUM_OF_TRACKS)))
        return DB.execute(query).fetchall()
    except Exception as e:
        print(f"An error occurred: {e}")
        return []


def recommend_song(mood):
    if mood == 0:
        return _get_calm_songs()
    elif mood == 1:
        return _get_religious_songs()
    elif mood == 2:
        return _get_joyful_songs()
    else:
        return _get_cheerfull_songs()

# CUSTOM MESSAGES FOR USER
def beautify_output_msg(mood):
    msg = ''
    if mood == 0:
        msg = "You seem pissed. Here are some songs to help you calm down"
    elif mood == 1:
        msg = "Don't be afraid. Here are some religious tunes for you"
    elif mood == 2:
        msg = "Wow, you sound joyful. Enjoy these beats"
    else:
        msg = "Aww don't be sad. These will surely cheer you up!"
    return msg     

class Test(Resource) :
    def get(self):
        return jsonify({"message":"Hello World"})

# Define the Sentiment Resource
class SentimentAnalysis(Resource):
    def post(self):
        # Get the input text from the request
        data = request.get_json()
        text = data.get('text', '')

      

        # Perform sentiment analysis
        result = classifier(text)
        
        # Extract label and score
        label = result[0]['label']
        score = result[0]['score']

        # Return the results as JSON
        return jsonify({
            'label': label,
            'polarity': score
        })
    
    def get(self):
        return jsonify({
            'message': 'Send a POST request to this endpoint with a JSON payload containing the text to analyze.'
        })

class SpeechToText(Resource):
    def post(self):
            # Check if the request has a file part
        print("Here control")
        if 'audio' not in request.files:
            # return jsonify({"error": "No audio file provided"}), 400
            
            return jsonify({"transcription":"Looks like no audio file is present!!"})
        
        audio_file = request.files['audio']
        
        # Save the audio file temporarily
        audio_path = "./temp_audio.wav"
        audio_file.save(audio_path)

        # Load Whisper model
        
        model = whisper.load_model("tiny")
        # print("working here1 \n");
        # Transcribe the audio
        print("audio path :",audio_path)
        result = model.transcribe(audio_path)
        # print("working here2 \n");
        # Clean up the temporary audio file
        os.remove(audio_path)
        
        # Return the transcribed text
        return jsonify({"transcription": result["text"]})
    
class ChatBot(Resource):

    def get(self) :
    
        return get_bot_response(request.args.get('msg'))
        # print("keys are")
        # for key in request.args.keys():
        #     print(key)
        # return jsonify({"message":request.args.get("msg")})

class Predict(Resource) :

    def post(self) :
        data = request.json.get('thought')

        if not data or len(data.split()) < 3:
            return jsonify({"error": "Please enter at least 3 words."}), 400

        # Validations
        error = None  
        if data.strip() == '':
            error = 'Textbox is empty!'
        elif len(re.split(',| ', data)) < 3:
            error = 'Please enter at least 3 words!'
        elif min(set([len(word) for word in re.split(',| ', data)])) == 1:
            error = "Please don't enter single characters"
            
        if error:
            print("error :",error)
            print("type of error: ",type(error))
            return make_response(jsonify({"error":error}),400)

        # Prepare input and get prediction
        data = prepare_input(data)
        pred = int(np.argmax(MODEL.predict(data), axis=-1)[0])  # cast to int

        # Process and return response
        display_msg = beautify_output_msg(pred)
        songs = recommend_song(pred)

        # Check types before returning
        print("Type of pred:", type(pred))
        print("Type of songs:", type(songs))
        print("Type of display_msg:", type(display_msg))

        return jsonify({
            "pred": pred,
            "songs": songs,
            "display_msg": display_msg
        })
    
    def get(self) :
        return jsonify({"message":"Hello World"})


# Add the resource to the API
api.add_resource(SentimentAnalysis, '/analyze')
api.add_resource(SpeechToText, '/transcribe')
api.add_resource(ChatBot,'/chat')
api.add_resource(Test,'/test')
api.add_resource(Predict,'/predict')

if __name__ == '__main__':
    app.run(debug=True)
