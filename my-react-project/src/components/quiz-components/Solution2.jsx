
import React from 'react';
import '../../assets/css/questionnaire_css/solution2.css';
import { useNavigate } from 'react-router-dom';
const Solution2 = () => {
  const navigate = useNavigate();
  return (
    <div className="solution1 video-container">
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

export default Solution2;

