

import React from 'react';
import '../../assets/css/questionnaire_css/solution4.css';
import { useNavigate } from 'react-router-dom';
const Solution4 = () => {
  const navigate = useNavigate();
  return (
    <div className="solution4 video-container">
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

      <div className="solution_box">
          <h1 className="lol">Sleep Disorder</h1>
          <p>Hey there! Are you having trouble sleeping lately? Are you tossing and turning all night long? Well, you're not alone. Sleep disorders affect millions of people every day. But don't worry, I'm here to help you understand what they are and what you can do about it.</p>
          <br />
          <p>Sleep disorders can make it hard for you to get the rest you need. They can leave you feeling tired, grumpy, and just not yourself. But the good news is, there's a way to get back on track. Just like anxiety and depression, there are different levels of sleep disorders, and it's important to know where you stand so you can take the right steps to feel better. Let's take a look at the different levels:</p>
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

      <footer className="foot">
        Created by:&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/akash-k-p" className="custom-link">Akash K P</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/sppratham108" className="custom-link">S P Pratham</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/ggurusainath" className="custom-link">G Gurusainath</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="lgBtn" onClick={() => navigate('/logout')}>
          <div className="sign">
            <svg viewBox="0 0 512 512">
              <path
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              />
            </svg>
          </div>
          <div className="text">Logout</div>
        </button>
      </footer>
    </div>
  );
};

export default Solution4;

