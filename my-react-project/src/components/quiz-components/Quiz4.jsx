
import React, { useState } from 'react';
import '../../assets/css/questionnaire_css/quiz4.css';

const questionnaire = [
    {

        question:"1. My sleep was restless",
        options: ["1", "2", "3", "4"]
    },
    {

        question:"2. I was satisfies with my sleep",
        options: ["1", "2", "3", "4"]
    },
    {

        question:"3. My sleep was refreshing",
        options: ["1", "2", "3", "4"]
    },
    {

        question:"4. I had difficulty falling asleep.",
        options: ["1", "2", "3", "4"]
    },
    {

        question:"5. I had trouble staying asleep",
        options: ["1", "2", "3", "4"]
    },
    {

        question:"6. I had trouble sleeping",
        options: ["1", "2", "3", "4"]
    },
    {

        question:"7. I got enough sleep",
        options: ["1", "2", "3", "4"]
    },
    {
        
        question:"8. My sleep quality was poor",
        options: ["1", "2", "3", "4"]
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
    } else if (score <= 25) {
      return 'Mild';
    } else if (score <= 29) {
      return 'Moderate';
    } else if (score <= 37) {
      return 'Moderate to Severe';
    } else {
      return 'Severe';
    }
  };

  const question = questionnaire[quesCount];

  return (
    <div className="container mt-5 quiz4">
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
          <button className="btn" onClick={() => window.location.href = '/solution4'}>See Solutions</button> <br></br> 
        </div>
      )}
    </div>
  );
};

export default Questionnaire;