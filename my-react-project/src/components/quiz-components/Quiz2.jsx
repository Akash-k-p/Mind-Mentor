
import React, { useState } from 'react';
import '../../assets/css/questionnaire_css/quiz2.css';

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
      return 'No Anxiety';
    } else if (score <= 9) {
      return 'Mild Depression';
    } else if (score <= 14) {
      return 'Moderately Anxiety';
    } else if (score <= 19) {
      return 'Moderate to Severe Anxiety';
    } else {
      return 'Severe Anxiety';
    }
  };

  const question = questionnaire[quesCount];

  return (
    <div className="container mt-5 quiz2">
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
          <button className="btn" onClick={() => window.location.href = '/solution2'}>See Solutions</button> <br></br> 
        </div>
      )}
    </div>
  );
};

export default Questionnaire;