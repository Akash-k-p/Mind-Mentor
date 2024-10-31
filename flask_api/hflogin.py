# this file is only required if you use Llama 2 model for chatbot else ignore.
# you have to get access from hugging face before using this model. 
# execute this file in  this order: cd flask_api>python hflogin.py>python app.py


from huggingface_hub import login

# Authenticate with Hugging Face (consider using environment variables for sensitive information)
HUGGINGFACE_TOKEN = "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"
login(HUGGINGFACE_TOKEN)