import React, { useState, useEffect } from "react";
import { Grid, Typography, Container, Box, MenuItem, Select } from "@mui/material";
import ScoreModal from "./ScoreModal";
import flipcard from "../../assets/audio/background/flipcard.mp3";
import cardflip from "../../assets/audio/background/cardflip.mp3";
import gameWin from "../../assets/audio/background/game-win.wav";
import shufflingCards from "../../assets/audio/background/shuffling-cards.mp3";
import cardMatch from "../../assets/audio/background/cardMatch.mp3";
import { VolumeUp, VolumeOff } from "@mui/icons-material";
import { motion } from "framer-motion";
import Switch from "@mui/material/Switch";
import { StyledGridItem, ResetGameButton, MovesDisplay, TimeDisplay, MemoryMatchCard } from "./StyledComponents";
import emoji from "./emoji.json";
import { useNavigate } from 'react-router-dom';
import './StyledComponents/memorymatch.css';
// import { Card, CardContent } from '@mui/material';

const MemoryMatch = () => {
  // Declare state variables
  const emojiList = emoji;
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([0]);
  const [moves, setMoves] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [openScoreModal, setOpenScoreModal] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedEmojiList, setSelectedEmojiList] = useState(emojiList[0].emoji);

  // Shuffle the cards on component mount
  useEffect(() => {
    shuffleCards();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEmojiList]);

  // Open score modal when all cards are matched
  useEffect(() => {
    if (matched.length === cards.length) {
      //if(isMuted) new Audio(gameWin).play();
      setOpenScoreModal(true);
    }
  }, [matched, cards, moves]);
  // Close the score modal
  const closeModal = () => {
    setOpenScoreModal(false);
  };

  const navigate = useNavigate();

  // Increment the time elapsed every second while there are unmatched cards
  useEffect(() => {
    if (matched.length < cards.length) {
      const timer = setTimeout(() => setTimeElapsed(timeElapsed + 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeElapsed, matched, cards]);

  // Shuffle the cards and reset the game
  const shuffleCards = () => {
    if (isMuted) new Audio(shufflingCards).play();
    const shuffled = selectedEmojiList.concat(selectedEmojiList).sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setSelected([]);
    setMatched([]);
    setMoves(0);
    setTimeElapsed(0);
  };

  // Select a card and check for matches
  const selectCard = (index) => {
    // Don't allow selection of more than two cards or the same card twice
    if (selected.length === 2 || selected.includes(index) || matched.includes(index)) {
      return;
    }
    if (isMuted) new Audio(flipcard).play();
    setSelected([...selected, index]);
    if (selected.length === 1) {
      setMoves(moves + 1);
      if (cards[selected[0]] === cards[index]) {
        setMatched([...matched, selected[0], index]);
        setSelected([]);
        // play audio with 0.5 seconds delay
        setTimeout(() => {
          if (matched.length === cards.length - 2) {
            if (isMuted) new Audio(gameWin).play();
          } else {
            if (isMuted) new Audio(cardMatch).play();
          }
        }, 600);
        //if(isMuted) new Audio(cardMatch).play();
      } else {
        // Unflip the cards after 1 second if they don't match
        setTimeout(() => {
          setSelected([]);
          if (isMuted) new Audio(cardflip).play();
        }, 1000);
      }
    }
  };

  const handleChangeEmoji = (event) => {
    console.log(event.target.value);
    setSelectedEmojiList(event.target.value);
  };

  return (
    <div className="viewdiary video-container">
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
    <Container style={{color:'white', height:'100vh'}}maxWidth="md">
      <ScoreModal open={openScoreModal} handleClose={closeModal} moves={moves} timeElapsed={timeElapsed} />
      <Box textAlign="center" my={2}>
        <Typography id='gameheading' variant="h4" gutterBottom fontWeight="bold">
          Memory Match Game
        </Typography>
        <Typography variant="body1">
          Click on the cards to reveal them, and find matching pairs. <br /> Try to complete the game in the shortest time and with the fewest moves!
        </Typography>
      </Box>
      <Grid id="controls" container justifyContent="center" alignItems="center" spacing={2} style={{ marginTop: "0" }}>
        <Grid item id='set1'>
          <ResetGameButton shuffleCards={shuffleCards} />
        </Grid>

        <Grid item id='set'>
          <Select id='selecttiletype'
            value={selectedEmojiList}
            onChange={handleChangeEmoji}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            style={{ width: "16rem",
              color:'white'
             }}
          >
            {emojiList.map((emoji, index) => (
              <MenuItem key={index} value={emoji.emoji}>
                {emoji.title}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <StyledGridItem item id='set'>
          <VolumeOff />
          <Switch checked={isMuted} onChange={() => setIsMuted(!isMuted)} />
          <VolumeUp />
        </StyledGridItem>

        <Grid item id='set'>
          <MovesDisplay moves={moves} />
        </Grid>
        <Grid item id='set'>
          <TimeDisplay timeElapsed={timeElapsed} />
        </Grid>
      </Grid>

      <Grid id='tilecontainer' container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: "1rem" }}>
        {/* Map over the cards and create a MemoryMatchCard for each one */}
        {cards.map((card, index) => (
          <Grid id='tiles'item xs={4} sm={3} md={2} key={index}>
            <motion.div
              style={{
                transformStyle: "preserve-3d",
                // padding: "0.5rem",
            //     height:'125px',
            // width:'125px'
              }}
              animate={{
                rotateY: matched.includes(index) || selected.includes(index) ? -180 : 0,
              }}
              transition={{ duration: 0.7 }}
              key={index}
            >
               {/* <Card
          onClick={() => selectCard(index)}
          style={{
            background: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Gradient background
            color: "#fff", // White text color for contrast
            height:'125px',
            width:'125px',
            display:'grid',
            justifyContent:'center',
            alignItems:'center',
            margin:'10px',
            position:'fixed'
          }}
          className="memory-card"
        >
          <CardContent>
            {selected.includes(index) || matched.includes(index) ? card : "❓"}
          </CardContent>
        </Card> */}

              <MemoryMatchCard key={index} card={card} index={index} selected={selected} matched={matched} selectCard={selectCard} sx={{background: "linear-gradient(135deg, #ff7e5f, red)",color: "#fff",}}/>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
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

export default MemoryMatch;
