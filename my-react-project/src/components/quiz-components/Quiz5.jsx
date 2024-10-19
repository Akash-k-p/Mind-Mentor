
import React, { useState } from 'react';
import '../../assets/css/questionnaire_css/quiz5-1.css';

const questionnaire = [
    {

        question:"1. Stomach Pain",
        options: ["0", "1", "2"]
    },
    {
        question:"2. Back Pain",
        options: ["0", "1", "2"]
       
    },
    {

        question:"3. Pain in your arms, legs, or joints(knees,hips,etc)",
        options: ["0", "1", "2"]
       
    },
    {

        question:"4. Menstrual Cramps or any other problems with your periods (Women Only)",
        options: ["0", "1", "2"]
       
    },
    {

        question:"5. Headaches",
        options: ["0", "1", "2"]
        
    },
    {

        question:"6. Chest Pain",
        options: ["0", "1", "2"]
    },
    {

        question:"7. Dizziness",
        options: ["0", "1", "2"]
       
    },
    {

        question:"8. Fainting sleeps",
        options: ["0", "1", "2"]
       
    },
    {

        question:"9. Feeling your heart pound or race",
        options: ["0", "1", "2"]
    },
    {

        question:"10. Shortness of Breath",
        options: ["0", "1", "2"]
    },
    // {

    //     question:"11. Pain or problems during sexual intercourse",
    //     a:"0",
    //     b:"1",
    //     c:"2"
    // },
    {

        question:"11. Constipation; loose bowels, or diarrhea",
        options: ["0", "1", "2"]
    },
    {

        question:"12. Nausea, gas or indigestion",
        options: ["0", "1", "2"]
    },
    {

        question:"13. Feeling tired or having low energy",
        options: ["0", "1", "2"]
    },
    {

        question:"14. Trouble Sleeping",
        options: ["0", "1", "2"]
    }
];

const Questionnaire = () => {
  const [quesCount, setQuesCount] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission

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
    if (score <= 6) {
      return 'None to slight';
    } else if (score <= 4) {
      return 'Mild';
    } else if (score <= 9) {
      return 'Moderate';
    } else if (score <= 14) {
      return 'Moderate to Severe';
    } else {
      return 'Severe';
    }
  };

  const question = questionnaire[quesCount];

  return (
    <div className="container mt-5 quiz5">
      {!isSubmitted ? (
        <>
          <h2>Over the last two weeks, how often have you been bothered by any of the following problems?</h2>
          <p>0-being the lowest; 3-being the highest</p>
          {question && (
            <>
              <h3>{question.question}</h3>
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
                <button className="btn btn-primary" onClick={nextQuestion}>Next</button>
              ) : (
                <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
              )}
            </>
          )}
        </>
      ) : (
        <div>
          <h3>
            Wohoo!, you did it! Congrats on completing the quiz and taking a big step towards improving your mental health. By clicking the "Solution" button, you'll be taken to a treasure trove of solutions tailored to your specific needs. Get ready to embark on a journey towards better mental wellness - good luck! 🚀.
          </h3>          
          <h2>Results : </h2>
          <p>You scored {score}/27. Severity level: {getSeverity()}</p>
          <button className="btn" onClick={() => window.location.href = '/questionnaire'}>Give Test Again</button>
          <button className="btn" onClick={() => window.location.href = '/solution5'}>See Solutions</button> <br></br> 
        </div>
      )}
    </div>
  );
};

export default Questionnaire;