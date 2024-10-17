import React from 'react';
import '../../assets/css/questionnaire_css/solution4.css';
import { Link } from 'react-router-dom';

const Solution4 = () => {
  return (
    <div className='solution4'>
      {/* <h1>solution for depression</h1> */}

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

      {/* Solution Page Content */}
      <div className="solution_page">
        <div className="solution_box">
          <h1 className="lol">Sleep Disorder</h1>
          <p>Hey there! Are you having trouble sleeping lately? Are you tossing and turning all night long? Well, you're not alone. Sleep disorders affect millions of people every day. But don't worry, I'm here to help you understand what they are and what you can do about it.</p>
          <br />
          <p>Sleep disorders can make it hard for you to get the rest you need. They can leave you feeling tired, grumpy, and just not yourself. But the good news is, there's a way to get back on track. Just like anxiety and depression, there are different levels of sleep disorders, and it's important to know where you stand so you can take the right steps to feel better. Let's take a look at the different levels:</p>
          <br />
          <ul>
            <li>
              <b>No Sleep Disorder:</b> 
              <br />If you don't have any symptoms of a sleep disorder, then you're in the clear!
            </li>
            <br />
            <li>
              <b>Mild Sleep Disorder:</b> 
              <br />Mild sleep disorders are like a light breeze. You might have trouble sleeping some nights, but you're still able to function during the day. To feel better, try to establish a regular sleep routine, avoid caffeine and alcohol before bed, and reduce stress. Your doctor may also recommend therapy or medication.
            </li>
            <br />
            <li>
              <b>Moderate Sleep Disorder:</b> 
              <br />Moderate sleep disorders are like a gust of wind. You might have a harder time sleeping, and you might feel really tired during the day. But don't worry, help is available. A mental health professional can help you with therapy, medication, or a combination of both.
            </li>
            <br />
            <li>
              <b>Severe Sleep Disorder:</b> 
              <br />Severe sleep disorders are like a full-blown storm. It can be really tough to get through the day and you might have trouble sleeping every night. If this is the case, it's important to reach out for help immediately. A mental health professional can help you get back on track with therapy, medication, or a combination of both.
            </li>
          </ul>
          <br />
          <p>It's important to remember that online assessments and tests are just tools to help you understand where you stand. They're not a substitute for professional evaluation and treatment. If you're having trouble sleeping, it's important to talk to a mental health professional. They can give you a full evaluation and help you figure out the best way to feel better.</p>
          <br />
          <p>So there you have it, a quick rundown on sleep disorders and the different levels of severity. Remember, you're not alone and there's help available. Don't hesitate to reach out if you need it. Sweet dreams!</p>
        </div>
      </div>
    </div>
  );
};

export default Solution4;
