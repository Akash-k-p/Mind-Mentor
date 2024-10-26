import Card from './Cards.jsx'
import meditate from '../../assets/images/recommendations/meditate.gif';
import '../../assets/css/recommendations/recommendations.css';
import games from '../../assets/images/recommendations/maths.gif';
import songs from '../../assets/images/recommendations/music.gif';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';


const Recommendations = () => {
    // let sess = ReactSession.get("user_id")
    const navigate = useNavigate();


// function Recommendations() {
    return (
        
        <div className="recommendations video-container">
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

      <div className="cards" >
                <Card
                    title="Guided Meditation"
                    description="Relax and meditate."
                    image={meditate}
                    link="meditation"
                >
                </Card>

                <Card
                    title="Memory Match"
                    description="Play a mind game."
                    image={games}
                    link="memorymatch"
                >
                </Card> 
                
                <Card
                    title="Custom Songs"
                    description="Listen to Music"
                    image={songs}
                    link="songs"
                >
                </Card> 
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





        // <div className="recommendations">
        //     <Jumbotron />
        //     <NavBar />
            
        //     </div>
        // </div>
    );
}
export default Recommendations