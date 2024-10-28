
import React, { useState } from 'react';
import '../../assets/css/questionnaire_css/quiz2.css';
import { useNavigate } from 'react-router-dom';

const questionnaire = [
    {

        question:"1. I felt fearful",
        options: ["0", "1", "2", "3"]
    },
    {
        question:"2. I felt anxious",
        options: ["0", "1", "2", "3"]
    },
    {

        question:"3. I felt worried",
        options: ["0", "1", "2", "3"]
    },
    {

        question:"4. I felt that it is hard to focus on anything than my anxiety.",
        options: ["0", "1", "2", "3"]
    },
    {

        question:"5. I felt nervous",
        options: ["0", "1", "2", "3"]
    },
    {

        question:"6. I felt uneasy",
        options: ["0", "1", "2", "3"]
    },
    {

        question:"7. I felt tense",
        options: ["0", "1", "2", "3"]
    }
];

const Questionnaire = () => {
  const [quesCount, setQuesCount] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission
  const navigate = useNavigate();
  const handleAnswerSelection = (event) => {
    setSelectedAnswer(Number(event.target.value));
  };

  const nextQuestion = () => {
    if (selectedAnswer !== null) {
      setScore(score + selectedAnswer);
      setSelectedAnswer(null);
      setQuesCount(quesCount + 1);
    } else {
      alert('Please select an answer!');
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setScore(score + selectedAnswer);
      setIsSubmitted(true);  // Set to true after submission
    } else {
      alert('Please select an answer!');
    }
  };

  const getSeverity = () => {
    if (score <= 4) {
      return 'No Depression';
    } else if (score <= 9) {
      return 'Mild Depression';
    } else if (score <= 14) {
      return 'Moderate Depression';
    } else if (score <= 19) {
      return 'Moderate to Severe Depression';
    } else {
      return 'Severe Depression';
    }
  };

  const question = questionnaire[quesCount];

  return (
    <div className="quiz2 outerdiv">
      <div className="maindiv">
      {!isSubmitted ? (
        <>
          <h4>Over the last two weeks, how often have you been bothered by any of the following problems?</h4>
          <h5>0-being the lowest; 3-being the highest</h5>
          <br></br>
          {/* {question && (
            <>
              <h2>{question.question}</h2>
              <ul>
                {question.options.map((option, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      name="answer"
                      value={index}
                      onChange={handleAnswerSelection}
                      checked={selectedAnswer === index}
                    />
                    <label>{option}</label>
                  </li>
                ))}
              </ul>
              {quesCount < questionnaire.length - 1 ? (
                <button className="finalbtn" onClick={nextQuestion}>Next</button>
              ) : (
                <button className="finalbtn" onClick={handleSubmit}>Submit</button>
              )}
            </>
          )} */}
          {question && (
  <>
    <h2>{question.question}</h2>
    <div className="valuebtn">
    <div className="radio-input">
      {question.options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name="answer"
            value={index}
            onChange={handleAnswerSelection}
            checked={selectedAnswer === index}
          />
          <span>{option}</span>
        </label>
      ))}
      <span className="selection"></span>
    </div>
    </div>
    <div className="nxtsbmt">
    {quesCount < questionnaire.length - 1 ? (
      <button className="finalbtn" onClick={nextQuestion}>Next</button>
    ) : (
      <button className="finalbtn" onClick={handleSubmit}>Submit</button>
    )}
    </div>
  </>
)}

        </>
      ) : (
        <div>
          <h5>
              Great Response!! See Results and Solutions below:
          </h5>          
          <h2>Score: {score}/27.</h2><br></br>
          <h2> Severity level: {getSeverity()}</h2>
          <br></br>
          <div className="btnblock">
              <button className="finalbtn" onClick={() => window.location.href = '/questionnaire'}>Give Test Again</button>
              <button className="finalbtn" onClick={() => window.location.href = '/solution2'}>See Solutions</button> <br></br> 
          </div>
        </div>
      )}
      </div>

      <footer className="foot">
      Created by:&nbsp;&nbsp;
      <a href="https://www.linkedin.com/in/akash-k-p" className="custom-link">Akash K P</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https://www.linkedin.com/in/sppratham108" className="custom-link">S P Pratham</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https://www.linkedin.com/in/ggurusainath" className="custom-link">G Gurusainath</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="lgBtn" onClick={() => navigate('/logout')}>
        <div className="sign">
          <svg viewBox="0 0 512 512">
            <path
              d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
            />
          </svg>
        </div>
        <div className="text">Logout</div>
      </button>
    </footer>
    </div>
  );
};

export default Questionnaire;