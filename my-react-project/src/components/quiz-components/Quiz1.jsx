// import React, { useState } from 'react';
// import '../../assets/css/questionnaire_css/quiz1.css'


// const questionnaire = [
//   {
//     question: "1. Feeling nervous, anxious, or on edge",
//     options: ["0", "1", "2", "3"]
//   },
//   {
//     question: "2. Not being able to stop or control anything",
//     options: ["0", "1", "2", "3"]
//   },
//   {
//     question: "3. Worrying too much about different things",
//     options: ["0", "1", "2", "3"]
//   },
//   {
//     question: "4. Trouble relaxing",
//     options: ["0", "1", "2", "3"]
//   },
//   {
//     question: "5. Being so restless that it is too hard to sit still",
//     options: ["0", "1", "2", "3"]
//   },
//   {
//     question: "6. Becoming easily annoyed or irritable",
//     options: ["0", "1", "2", "3"]
//   },
//   {
//     question: "7. Feeling afraid, as if something awful might happen",
//     options: ["0", "1", "2", "3"]
//   },
//   {
//     question: "8. Little interest or pleasure in doing things",
//     options: ["0", "1", "2", "3"]
//   },
//   {
//     question: "9. Feeling down, depressed, or hopeless",
//     options: ["0", "1", "2", "3"]
//   }
// ];

// const Questionnaire = () => {
//   const [quesCount, setQuesCount] = useState(0);
//   const [score, setScore] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);

//   const handleAnswerSelection = (event) => {
//     setSelectedAnswer(Number(event.target.value));
//   };

//   const nextQuestion = () => {
//     if (selectedAnswer !== null) {
//       setScore(score + selectedAnswer);
//       setSelectedAnswer(null);
//       setQuesCount(quesCount + 1);
//     } else {
//       alert('Please select an answer!');
//     }
//   };

//   const handleSubmit = () => {
//     let severity = '';
//     if (score <= 4) {
//       severity = 'No Depression';
//     } else if (score <= 9) {
//       severity = 'Mild Depression';
//     } else if (score <= 14) {
//       severity = 'Moderate Depression';
//     } else if (score <= 19) {
//       severity = 'Moderate to Severe Depression';
//     } else {
//       severity = 'Severe Depression';
//     }

//     alert(`You scored ${score}/27. Severity level: ${severity}`);
//   };

//   const question = questionnaire[quesCount];

//   return (
//     <div className="container mt-5 quiz1">
//       <h2>Over the last two weeks, how often have you been bothered by any of the following problems?</h2>
//       <p>0-being the lowest; 3-being the highest</p>
//       {question && (
//         <>
//           <h3>{question.question}</h3>
//           <ul>
//             {question.options.map((option, index) => (
//               <li key={index}>
//                 <input
//                   type="radio"
//                   name="answer"
//                   value={index}
//                   onChange={handleAnswerSelection}
//                   checked={selectedAnswer === index}
//                 />
//                 <label>{option}</label>
//               </li>
//             ))}
//           </ul>
//           {quesCount < questionnaire.length - 1 ? (
//             <button className="btn btn-primary" onClick={nextQuestion}>Next</button>
//           ) : (
//             <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Questionnaire;


import React, { useState } from 'react';
import '../../assets/css/questionnaire_css/quiz1.css';

const questionnaire = [
  {
    question: "1. Feeling nervous, anxious, or on edge",
    options: ["0", "1", "2", "3"]
  },
  {
    question: "2. Not being able to stop or control anything",
    options: ["0", "1", "2", "3"]
  },
  {
    question: "3. Worrying too much about different things",
    options: ["0", "1", "2", "3"]
  },
  {
    question: "4. Trouble relaxing",
    options: ["0", "1", "2", "3"]
  },
  {
    question: "5. Being so restless that it is too hard to sit still",
    options: ["0", "1", "2", "3"]
  },
  {
    question: "6. Becoming easily annoyed or irritable",
    options: ["0", "1", "2", "3"]
  },
  {
    question: "7. Feeling afraid, as if something awful might happen",
    options: ["0", "1", "2", "3"]
  },
  {
    question: "8. Little interest or pleasure in doing things",
    options: ["0", "1", "2", "3"]
  },
  {
    question: "9. Feeling down, depressed, or hopeless",
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
    <div className="container mt-5 quiz1">
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
          <button className="btn" onClick={() => window.location.href = '/solution1'}>See Solutions</button> <br></br> 
        </div>
      )}
    </div>
  );
};

export default Questionnaire;


