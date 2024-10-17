import React from 'react';
import '../../assets/css/questionnaire_css/solution5.css';
import { Link } from 'react-router-dom';

const Solution5 = () => {
    return (
        <div className="solution5">
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
            <Link className="nav-link navbar-elements" to="/dashboard">Home</Link>
            <Link className="nav-link navbar-elements" to="/newdiary">New Diary</Link>
            <Link className="nav-link navbar-elements" to="/viewdiary">View Diaries</Link>
          </div>
        </div>
      </nav>

            <div className="solution_page">
                <div className="solution_box">
                    <h1 className="lol">Somatic Symptom</h1>

                    <p>Hey there! Are you feeling overwhelmed by physical symptoms that seem to have no explanation? Are you constantly visiting the doctor but getting no answers? If so, you might be struggling with somatic symptoms. But don't worry, you're not alone and there's help available.</p>
                    <br />
                    <p>Somatic symptoms refer to physical symptoms that can't be explained by a medical condition. They can be overwhelming and interfere with your daily life. But the good news is, there's a way to manage them and feel better. Just like anger, anxiety, depression, and sleep disorders, there are different levels of somatic symptoms, and it's important to know where you stand so you can take the right steps to feel better. Let's take a look at the different levels:</p>
                    <br />
                    <ul>
                        <li>
                            <b>No Somatic Symptoms:</b>
                            <br />If you don't struggle with somatic symptoms, then you're in the clear!
                        </li>
                        <br />
                        <li>
                            <b>Mild Somatic Symptoms:</b>
                            <br />Mild somatic symptoms are like a light breeze. You might experience some physical symptoms from time to time, but you're able to manage them and keep them from affecting your daily life. To feel better, try to identify and address the sources of stress in your life, practice relaxation techniques, and engage in physical activity. Your doctor may also recommend therapy or medication.
                        </li>
                        <br />
                        <li>
                            <b>Moderate Somatic Symptoms:</b>
                            <br />Moderate somatic symptoms are like a gust of wind. You might experience physical symptoms more frequently, and they might start to affect your daily life. But don't worry, help is available. A mental health professional can help you with therapy, medication, or a combination of both.
                        </li>
                        <br />
                        <li>
                            <b>Severe Somatic Symptoms:</b>
                            <br />Severe somatic symptoms are like a full-blown storm. You might experience physical symptoms all the time, and they might interfere with your relationships and daily life. If this is the case, it's important to reach out for help immediately. A mental health professional can help you get back on track with therapy, medication, or a combination of both.
                        </li>
                    </ul>

                    <br />
                    <p>It's important to remember that online assessments and tests are just tools to help you understand where you stand. They're not a substitute for professional evaluation and treatment. If you're struggling with somatic symptoms, it's important to talk to a mental health professional. They can give you a full evaluation and help you figure out the best way to feel better.</p>
                    <br />
                    <p>So there you have it, a quick rundown on somatic symptoms and the different levels of severity. Remember, you're not alone and there's help available. Don't hesitate to reach out if you need it. Stay strong and take care of yourself!</p>
                </div>
            </div>
        </div>
    );
}

export default Solution5;
