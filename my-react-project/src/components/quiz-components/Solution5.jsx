

import React from 'react';
import '../../assets/css/questionnaire_css/solution5.css';
import { useNavigate } from 'react-router-dom';
const Solution5 = () => {
  const navigate = useNavigate();
  return (
    <div className="solution5 video-container">
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
          <h1 className="lol">Somatic Symptoms</h1>
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

export default Solution5;

