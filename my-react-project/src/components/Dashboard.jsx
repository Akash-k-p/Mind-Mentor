
import React, { useEffect,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Area, ResponsiveContainer,ReferenceLine } from 'recharts';
import chatBotImg from '../assets/images/mhcicon.png';
import SERVER_URL from '../express_url';
import initializeChatbot from '../assets/js/bot.js';
import { ReactSession } from 'react-client-session';
import '../assets/css/dashboard.css';

function DashBoard() {
  const navigate = useNavigate();
  const [chartData, setChartData] = useState([]);
  const [averagePv, setAveragePv] = useState(null);

  useEffect(() => {
    console.log("user_id at dashboard: ", ReactSession.get("user_id"));
    const cleanupChatbot = initializeChatbot();
  
    function updateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
      const clockElement = document.getElementById('clock');
      if (clockElement) {
        clockElement.textContent = timeString;
      }
    }
  
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
  
    async function fetchChartData() {
      const response = await fetch(SERVER_URL + "/api/entries");
      const diaryEntries = await response.json();
  
      const formattedData = diaryEntries.map(entry => {
        const entryDate = new Date(entry.time_stamp).toLocaleTimeString();
        let polarityValue = entry.mood_id * 0.1;
        
        if (entry.label && entry.label.toLowerCase() === 'positive') {
          polarityValue += 1;
        }
        return { name: entryDate, pv: polarityValue, title:entry.title};
      });
  
      const cumulativeAverages = formattedData.map((entry, index) => {
        const sum = formattedData.slice(0, index + 1).reduce((total, current) => total + current.pv, 0);
        return { name: entry.name, avgPv: sum / (index + 1) };
      });
    
      console.log("Cumulative Averages:", cumulativeAverages);
      
      const combinedData = formattedData.map((entry, index) => ({
        ...entry,
        avgPv: cumulativeAverages[index].avgPv,
      }));
    
      console.log("Combined Data:", combinedData);
      
      setChartData(combinedData);
    }
  
    fetchChartData();
  
    return () => {
      clearInterval(intervalId);
      if (cleanupChatbot) cleanupChatbot();
    };
  }, []);
  

  return (

    <div className='video-container dashboard'>
      <video autoPlay muted loop id="background-video">
        <source src="./videp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="heading">
           <center>
        <h1>
          Mind Mentor <span role="img" aria-label="Memo">💚</span>
        </h1>
        <p>Your journey to a better mental state</p>
      </center>
      </div>
       <nav className="ui">
      <center>
      <button onClick={() => navigate('/dashboard')}>Home</button>
      <button onClick={() => navigate('/newdiary')}>New Diary</button>
      <button onClick={() => navigate('/viewdiary')}>View Diary</button>
      </center>
    </nav>

    <div className="chart-container">
        <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" contentStyle={{ backgroundColor: '#ffffff', color: '#ffffff' }}/>
        <XAxis
          dataKey="name"
          tick={{ fill: '#ffffff', fontSize: 14 }}
        />
        <YAxis
          tick={{ fill: '#ffffff', fontSize: 14 }}
        />
        <Tooltip
          content={({ payload }) => {
            if (payload && payload.length) {
              const { name, pv, title, avgPv } = payload[0].payload;
              return (
                <div style={{ backgroundColor: "#333", padding:"15px", color:"#ffffff", borderRadius:"3px", lineHeight:"6px"}}>
                  <p>{`Time: ${name}`}</p>
                  <p>{`Polarity: ${pv}`}</p>
                  <p>{`Title: ${title}`}</p>
                  <p>{`Average Polarity: ${avgPv.toFixed(2)}`}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Legend wrapperStyle={{ color: '#555' }} />
        <Line type="monotone" dataKey="pv" stroke="#f55bd1" strokeWidth={2.5} activeDot={{ r: 7 }} />
        <Line type="monotone" dataKey="avgPv" stroke="#ffcc00" strokeWidth={2} />
        <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="url(#colorPv)" />
        {/* {averagePv !== null && (
          <ReferenceLine y={averagePv} label="Avg" stroke="white" strokeDasharray="3 3" />
        )} */}
      </LineChart>
    </ResponsiveContainer>

      </div>
     

      {/* Chatbot Component */}
      <div id="chatbot" className="main-card collapsed">
        <button id="chatbot_toggle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ display: "none" }}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </button>
        <div className="main-title">
          <div>
            <svg viewBox="0 0 640 512" title="robot">
              <path fill="currentColor"
                d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z" />
            </svg>
          </div>
          <span>
            <i className="fas fa-bug"></i> Psychiatrist Bot <i className="fas fa-bug"></i>
          </span>
        </div>

        <main className="msger-chat">
          <div className="msg left-msg">
            {/* <div className="msg-img" style={{ backgroundImage: "url(../assets/images/mhcicon.png)" }}></div> */}
            <div className="msg-img" style={{ backgroundImage: `url(${chatBotImg})` }}></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name"> Psychiatrist Bot</div>
                <div className="msg-info-time"><time id="clock"></time></div>
              </div>
              <div className="msg-text">
                Welcome to Psychiatrist, a safe and supportive space where you can share your thoughts and feelings
                without fear of judgement.
              </div>
            </div>
          </div>
        </main>
        <form className="msger-inputarea">
          <input type="text" className="msger-input" id="textInput" placeholder="Enter your message..." />
          <button type="submit" className="msger-send-btn">Send</button>
        </form>
      </div>
      
      <div className="features">

      </div>
      <div className='col'>
        <Link id="questionnaire_btn" to="/questionnaire"
          className="btn">Take a Questionnaire</Link>
        <Link id="questionnaire_btn" to="/recommendations"
          className="btn">Recommended Activities</Link>
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
}

export default DashBoard; 
