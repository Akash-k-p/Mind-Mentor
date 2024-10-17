import React from 'react';
import '../../assets/css/questionnaire_css/solution1.css';

const Solution1 = () => {
  return (
    <div className="solution1">
      {/* Jumbotron */}
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
          <h1 className="lol">Depression</h1>
          <p>Hey there, seems like you are experiencing Depression or want to learn more about it. But there's nothing to worry about, we've got you!</p>
          <br />
          <p>Depression is a real thing and it affects millions of people every day. But don't worry, I'm here to help you understand what it is and what you can do about it.
            Depression is like a storm cloud that follows you around, making everything seem a little bit grey. It can make you feel sad, hopeless, and just not interested in things you used to love. But the good news is, there's a way out of the storm.
            There are different levels of depression, and it's important to know where you stand so you can take the right steps to feel better. Let's take a look at the different levels:
          </p>

          <br />
          <ul>
            <li>
              <b>No Depression:</b>
              <br />If you don't have any symptoms of depression, then you're in the clear!
            </li>
            <br />
            <li>
              <b>Mild Depression:</b>
              <br />Mild depression is like a light rain shower. You might feel a little down, have trouble sleeping, and be a bit more tired than usual, but you're still able to get things done. To feel better, try to exercise regularly, get plenty of sleep, eat well, and reduce stress. Your doctor may also recommend therapy or medication.
            </li>
            <br />
            <li>
              <b>Moderate Depression:</b>
              <br />Moderate depression is like a thunderstorm. You might have a harder time getting things done, and you might feel really down and hopeless. But don't worry, help is available. A mental health professional can help you with therapy, medication, or a combination of both.
            </li>
            <br />
            <li>
              <b>Severe Depression:</b>
              <br />Severe depression is like a full-blown hurricane. It can be really tough to get through the day and you might even have thoughts of hurting yourself or others. If this is the case, it's important to reach out for help immediately. A mental health professional can help you get back on track with therapy, medication, or a combination of both.
            </li>
          </ul>

          <br />
          <p>
            It's important to remember that online assessments and tests are just tools to help you understand where you stand. They're not a substitute for professional evaluation and treatment. If you're feeling really down, it's important to talk to a mental health professional. They can give you a full evaluation and help you figure out the best way to feel better.
          </p>
          <br />
          <p>
            If you've taken a mental health test and have come across this article, it's important to remember that these tests are clinically approved and can be found on the website <a href="https://www.psychiatry.org/psychiatrists/practice/dsm/educational-resources/assessment-measures" target="_blank" rel="noreferrer">https://www.psychiatry.org/psychiatrists/practice/dsm/educational-resources/assessment-measures.</a> However, it's important not to rely solely on these tests and to always consult a doctor if you're experiencing symptoms of depression.
          </p>
          <br />
          <p>
            So there you have it, a quick rundown on depression and the different levels of severity. Remember, you're not alone and there's help available. Don't hesitate to reach out if you need it. Take care!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solution1;
