import React, { useState } from 'react';
import '../assets/css/questionnaire_css/quizDashboard.css'; // Assuming you have your CSS styles in this file
import Quiz1 from './quiz-components/Quiz1';  // Import your quiz components
import Quiz2 from './quiz-components/Quiz2';
import Quiz3 from './quiz-components/Quiz3';
import Quiz4 from './quiz-components/Quiz4';
import Quiz5 from './quiz-components/Quiz5';
import { useNavigate } from 'react-router-dom';


const Questionnaire = () => {
    const [currentQuiz, setCurrentQuiz] = useState(null);
    const navigate = useNavigate();
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
                    {/* <div className="lc-block">
          <span editable="inline" className="small mt-4 d-block"></span>
          <h2 editable="inline" className="display-2 mb-0"><b>Questionnaire</b></h2>
          <p editable="inline">Clinically approved Questionnaires for 5 different mental health issues
            <br />Find out the severity level of your illness with this test</p>
          </div> */}
                    {/* /lc-block */}
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="video-container">
                        <video autoPlay muted loop className="video-bg">
                            <source src=".\col_vid.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="babydiv">
                        <img alt="" className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/2913/2913034.png" style={{ height: '10vh' }} />
                        <h4 className="my-3" editable="inline"></h4>
                        <p editable="inline">Depression&nbsp;</p>
                        <button className="btn btn-outline-primary" onClick={() => setCurrentQuiz('quiz1')}>Take Test</button>
                    </div>
                </div>

                <div className="col">
                    <div className="video-container">
                        <video autoPlay muted loop className="video-bg">
                            <source src=".\col_vid.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="babydiv">
                        <img alt="" className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/3997/3997770.png" style={{ height: '10vh' }} />
                        <h4 className="my-3" editable="inline"></h4>
                        <p editable="inline">Anxiety&nbsp;</p>
                        <button className="btn btn-outline-primary" onClick={() => setCurrentQuiz('quiz2')}>Take Test</button>
                    </div>
                </div>

                <div className="col">
                    <div className="video-container">
                        <video autoPlay muted loop className="video-bg">
                            <source src=".\col_vid.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="babydiv">
                        <img alt="" className="img-fluid" src="https://static.thenounproject.com/png/1350173-200.png" style={{ height: '10vh' }} />
                        <h4 className="my-3" editable="inline"></h4>
                        <p editable="inline">Anger&nbsp;</p>
                        <button className="btn btn-outline-primary" onClick={() => setCurrentQuiz('quiz3')}>Take Test</button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="video-container">
                        <video autoPlay muted loop className="video-bg">
                            <source src=".\col_vid.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="babydiv">
                        <img alt="" className="img-fluid" src="https://static.thenounproject.com/png/2852814-200.png" style={{ height: '10vh' }} />
                        <h4 className="my-3" editable="inline"></h4>
                        <p editable="inline">Sleep Disorder&nbsp;</p>
                        <button className="btn btn-outline-primary" onClick={() => setCurrentQuiz('quiz4')}>Take Test</button>
                    </div>
                </div>

                <div className="col">
                    <div className="video-container">
                        <video autoPlay muted loop className="video-bg">
                            <source src=".\col_vid.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="babydiv">
                        <img alt="" className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/1491/1491313.png" style={{ height: '10vh' }} />
                        <h4 className="my-3" editable="inline"></h4>
                        <p editable="inline">Somatic Symptom&nbsp;</p>
                        <button className="btn btn-outline-primary" onClick={() => setCurrentQuiz('quiz5')}>Take Test</button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className='questionnaire video-container'>
                <video autoPlay muted loop id="background-video">
                    <source src="./videp.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="heading">
                    <center><h1>
                        Mind Mentor <span role="img" aria-label="Memo">💚</span>
                    </h1>
                        <p >Your journey to a better mental state</p>
                    </center>
                </div>

                <nav className="ui">
                    <center>
                        <button onClick={() => navigate('/dashboard')}>Home</button>
                        <button onClick={() => navigate('/newdiary')}>New Diary</button>
                        <button onClick={() => navigate('/viewdiary')}>View Diary</button>
                    </center>
                </nav>

                {renderQuiz()}
            </div>
    );
};

export default Questionnaire;
