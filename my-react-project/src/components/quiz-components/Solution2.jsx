import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/questionnaire_css/solution2.css';

const Solution2 = () => {
    return (
        <div>
            <div className="jumbotron text-center"></div>
            <div className="container">
                <h1 className="display-4">
                    Mental Health Tracker <span role="img" aria-label="Memo">💚</span>
                    <div className="logout-btn"><Link to="/logout">Logout</Link></div>
                </h1>
                <p className="lead">Your journey to a better mental state</p>
                <hr />
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

            <div className="solution_page">
                <div className="solution_box">
                    <h1 className="lol">Anxiety</h1>
                    <p>
                        Hey there! Are you feeling a little on edge lately? Are your thoughts racing and your heart beating fast?
                        Well, you're not alone. Anxiety affects millions of people every day. But don't worry, I'm here to help you
                        understand what it is and what you can do about it.
                    </p>
                    <br />
                    <p>
                        Anxiety is like having a constant worry bubble following you around. It can make you feel nervous, stressed,
                        and just not yourself. But the good news is, there's a way to pop that worry bubble. Just like depression,
                        there are different levels of anxiety, and it's important to know where you stand so you can take the right
                        steps to feel better. Let's take a look at the different levels:
                    </p>
                    <br />
                    <ul>
                        <li>
                            <b>No Anxiety:</b> <br />
                            If you don't have any symptoms of anxiety, then you're in the clear!
                        </li>
                        <br />
                        <li>
                            <b>Mild Anxiety:</b> <br />
                            Mild anxiety is like a light breeze. You might feel a little nervous and worried, but you're still able to
                            get things done. To feel better, try to exercise regularly, get plenty of sleep, eat well, and reduce stress.
                            Your doctor may also recommend therapy or medication.
                        </li>
                        <br />
                        <li>
                            <b>Moderate Anxiety:</b> <br />
                            Moderate anxiety is like a gust of wind. You might have a harder time getting things done, and you might feel
                            really nervous and stressed. But don't worry, help is available. A mental health professional can help you
                            with therapy, medication, or a combination of both.
                        </li>
                        <br />
                        <li>
                            <b>Severe Anxiety:</b> <br />
                            Severe anxiety is like a full-blown storm. It can be really tough to get through the day and you might even
                            have panic attacks. If this is the case, it's important to reach out for help immediately. A mental health
                            professional can help you get back on track with therapy, medication, or a combination of both.
                        </li>
                    </ul>
                    <br />
                    <p>
                        It's important to remember that online assessments and tests are just tools to help you understand where you
                        stand. They're not a substitute for professional evaluation and treatment. If you're feeling really anxious,
                        it's important to talk to a mental health professional. They can give you a full evaluation and help you figure
                        out the best way to feel better.
                    </p>
                    <br />
                    <p>
                        So there you have it, a quick rundown on anxiety and the different levels of severity. Remember, you're not alone
                        and there's help available. Don't hesitate to reach out if you need it. Take care!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Solution2;
