import React from 'react';
import '../../assets/css/questionnaire_css/solution3.css';

const Solution3 = () => {
    return (
        <div className="solution3">
            <div className="jumbotron text-center"></div>
            <div className="container">
                <h1 className="display-4">
                    Mental Health Tracker <span role="img" aria-label="Memo">💚</span>
                    <div className="logout-btn"><a href="/logout">Logout</a></div>
                </h1>
                <p className="lead">Your journey to a better mental state</p>
                <hr />
            </div>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-nav mx-auto navbar-container">
                        <a className="nav-link navbar-elements" href="/dashboard">Home</a>
                        <a className="nav-link navbar-elements" href="/newdiary">New Diary</a>
                        <a className="nav-link navbar-elements" href="/viewdiary">View Diaries</a>
                    </div>
                </div>
            </nav>
            {/* Solution Content */}
            <div className="solution_page">
                <div className="solution_box">
                    <h1 className="lol">Anger Issues</h1>
                    <p>Hey there! Are you feeling frustrated and on edge lately? Are you quick to lash out or get into arguments? If so, you might be struggling with anger. But don't worry, you're not alone and there's help available.</p>
                    <br />
                    <p>
                        Anger is a normal emotion, but when it becomes intense and frequent, it can interfere with your relationships and daily life.
                        Just like anxiety, depression, and sleep disorders, there are different levels of anger, and it's important to know where you stand so you can take the right steps to feel better. Let's take a look at the different levels:
                    </p>

                    <br />
                    <ul>
                        <li>
                            <b>No Anger Issues:</b>
                            <br />If you don't struggle with anger, then you're in the clear!
                        </li>
                        <br />
                        <li>
                            <b>Mild Anger Issues:</b>
                            <br />Mild anger is like a light breeze. You might get irritated from time to time, but you're able to manage it and keep it from affecting your daily life. To feel better, try to identify and address the sources of stress in your life, practice relaxation techniques, and communicate in a calm and assertive manner. Your doctor may also recommend therapy or medication.
                        </li>
                        <br />
                        <li>
                            <b>Moderate Anger Issues:</b>
                            <br />Moderate anger is like a gust of wind. You might struggle with anger more frequently, and it might start to affect your daily life. But don't worry, help is available. A mental health professional can help you with therapy, medication, or a combination of both.
                        </li>
                        <br />
                        <li>
                            <b>Severe Anger Issues:</b>
                            <br />Severe anger is like a full-blown storm. You might struggle with anger all the time, and it might interfere with your relationships and daily life. If this is the case, it's important to reach out for help immediately. A mental health professional can help you get back on track with therapy, medication, or a combination of both.
                        </li>
                    </ul>
                    <br />
                    <p>
                        It's important to remember that online assessments and tests are just tools to help you understand where you stand. They're not a substitute for professional evaluation and treatment. If you're struggling with anger, it's important to talk to a mental health professional. They can give you a full evaluation and help you figure out the best way to feel better.
                    </p>
                    <br />
                    <p>
                        So there you have it, a quick rundown on anger and the different levels of severity. Remember, you're not alone and there's help available. Don't hesitate to reach out if you need it. Stay calm and carry on!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Solution3;
