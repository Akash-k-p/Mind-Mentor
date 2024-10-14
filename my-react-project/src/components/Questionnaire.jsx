import React, { useState } from 'react';
import '../assets/css/questionnaire_css/quizDashboard.css'; // Assuming you have your CSS styles in this file
import Quiz1 from './quiz-components/Quiz1';  // Import your quiz components
import Quiz2 from './quiz-components/Quiz2';
import Quiz3 from './quiz-components/Quiz3';
import Quiz4 from './quiz-components/Quiz4';
import Quiz5 from './quiz-components/Quiz5';

const Questionnaire = () => {
    const [currentQuiz, setCurrentQuiz] = useState(null);

    const renderQuiz = () => {
        switch (currentQuiz) {
            case 'quiz1':
                return <Quiz1 />;
            case 'quiz2':
                return <Quiz2 />;
            case 'quiz3':
                return <Quiz3 />;
            case 'quiz4':
                return <Quiz4 />;
            case 'quiz5':
                return <Quiz5 />;
            default:
                return renderQuizDashboard();
        }
    };

    const renderQuizDashboard = () => (


        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="lc-block">
                        <h2 className="display-2 mb-0"><b>Questionnaire</b></h2>
                        <p>Clinically approved Questionnaires for 5 different mental health issues.
                            <br />Find out the severity level of your illness with this test</p>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="p-lg-5 p-4 shadow" style={{ boxShadow: '1rem 1rem -0.7rem rgb(0, 0, 0)', borderRadius: '1rem' }}>
                        <div className="lc-block mb-4">
                            <img alt="Depression" className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/2913/2913034.png" />
                            <p>Depression</p>
                            <button className="btn btn-outline-primary" onClick={() => setCurrentQuiz('quiz1')}>Take Test</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-lg-5 p-4 shadow" style={{ boxShadow: '1rem 1rem -0.7rem rgb(0, 0, 0)', borderRadius: '1rem' }}>
                        <div className="lc-block mb-4">
                            <img alt="Anxiety" className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/3997/3997770.png" />
                            <p>Anxiety</p>
                            <button className="btn btn-outline-primary" onClick={() => setCurrentQuiz('quiz2')}>Take Test</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-lg-5 p-4 shadow" style={{ boxShadow: '1rem 1rem -0.7rem rgb(0, 0, 0)', borderRadius: '1rem' }}>
                        <div className="lc-block mb-4">
                            <img alt="Anger" className="img-fluid" src="https://static.thenounproject.com/png/1350173-200.png" />
                            <p>Anger</p>
                            <button className="btn btn-outline-primary" onClick={() => setCurrentQuiz('quiz3')}>Take Test</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="p-lg-5 p-4 shadow" style={{ boxShadow: '1rem 1rem -0.7rem rgb(0, 0, 0)', borderRadius: '1rem' }}>
                        <div className="lc-block mb-4">
                            <img alt="Sleep Disorder" className="img-fluid" src="https://static.thenounproject.com/png/2852814-200.png" />
                            <p>Sleep Disorder</p>
                            <button className="btn btn-outline-primary" onClick={() => setCurrentQuiz('quiz4')}>Take Test</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-lg-5 p-4 shadow" style={{ boxShadow: '1rem 1rem -0.7rem rgb(0, 0, 0)', borderRadius: '1rem' }}>
                        <div className="lc-block mb-4">
                            <img alt="Somatic Symptom" className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/1491/1491313.png" />
                            <p>Somatic Symptom</p>
                            <button className="btn btn-outline-primary" onClick={() => setCurrentQuiz('quiz5')}>Take Test</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  );

return (
    <>
        <div className="container" style={{ backgroundImage: `url(${require('../assets/images/quiz/quizDash.jpeg')})`, marginBottom: '6rem' }}>
            <div className="jumbotron text-center">
                <div className="container">
                    <h1 className="display-4">
                        Mental Health Tracker <span role="img" aria-label="Memo">💚</span>
                        <div className="logout-btn"><a href="/logout">Logout</a></div>
                    </h1>
                    <p className="lead">Your journey to a better mental state</p>
                    <hr />
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-nav mx-auto navbar-container">
                        <a className="nav-link navbar-elements" href="/dashboard">Home</a>
                        <a className="nav-link navbar-elements" href="/newdiary">New Diary</a>
                        <a className="nav-link navbar-elements" href="/viewdiary">View Diaries</a>
                    </div>
                </div>
            </nav>
            {renderQuiz()}
        </div>
    </>
);
};

export default Questionnaire;
