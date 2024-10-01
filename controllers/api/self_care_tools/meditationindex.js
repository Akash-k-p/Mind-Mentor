const React = require("react");
const { useState, useEffect } = React;
const { Button, Typography } = require("@mui/material");
require("../../../public/assets/css/GuidedMeditation.css"); // Corrected path
const audioFiles = require("../../../public/data/audioFiles.js");
const {
    CircularProgressbar,
    CircularProgressbarWithChildren,
} = require("react-circular-progressbar");
const Sound = require("react-sound").default;
const PlayIcon = require("@mui/icons-material/PlayArrow").default;
const PauseIcon = require("@mui/icons-material/Pause").default;
const { getDisplayName: formatDisplayName } = require("../../utils/helper");
const { motion, AnimatePresence } = require("framer-motion");
const Menu = require("@mui/material/Menu").default;
const MenuItem = require("@mui/material/MenuItem").default;
const Select = require("@mui/material/Select").default;

const GuidedMeditation = () => {
    const [currentAudio, setCurrentAudio] = useState(audioFiles[0]);
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(Sound.status.STOPPED);
    const [position, setPosition] = useState(0);
    const [duration, setDuration] = useState(0);
    const [key, setKey] = useState(0);
    const [selectedOption, setSelectedOption] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handlePlayPause = () => {
        setIsPlaying(
            isPlaying === Sound.status.PLAYING
                ? Sound.status.PAUSED
                : Sound.status.PLAYING
        );
    };

    const handleAudioEnd = () => {
        setProgress(0);
        handlePlayPause();
    };

    const handleProgress = (value) => {
        setPosition(value.position);
        setDuration(value.duration);
        let currentProgress = (value.position / value.duration) * 100;
        setProgress(currentProgress);
    };

    return (
      <AnimatePresence mode="wait">
        <div className="guided-meditation-page">
          <motion.div
            className="guidedMeditation"
            style={{
              backgroundImage: `url(${currentAudio.backgroundImage})`,
            }}
            key={key}
            animate={{
              backgroundPosition: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"],
            }}
            transition={{
              duration: 1000,
              loop: Infinity,
              ease: "ease-in-out",
            }}
          >
            <div className="guidedMeditation__header">
              <Typography variant="h4" fontWeight="bold" align="center" color="black">
                Guided Meditation
              </Typography>
              <Select
                value={selectedOption}
                onChange={(e) => {
                  setCurrentAudio(audioFiles[e.target.value]);
                  setSelectedOption(e.target.value);
                }}
                sx={{ width: 300, mt: 2, color: "black" }}
              >
                {audioFiles.map((audio, index) => (
                  <MenuItem key={audio.url} value={index}>
                    {formatDisplayName(audio.url)}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="guidedMeditation_audio">
              <Sound
                url={currentAudio.url}
                playStatus={isPlaying}
                onFinishedPlaying={handleAudioEnd}
                onPlaying={handleProgress}
                listenInterval={1000}
                volume={100}
                loop={false}
                autoLoad={true}
                muted={false}
              />
              <div className="guidedMeditation_audio__progress">
                <CircularProgressbarWithChildren
                  value={position}
                  maxValue={duration || 100}
                  styles={{
                    path: { stroke: "#009083" },
                    trail: { stroke: "#ddd" },
                  }}
                >
                  <Button onClick={handlePlayPause}>
                    {isPlaying === Sound.status.PLAYING ? (
                      <PauseIcon style={{ fontSize: "5rem" }} />
                    ) : (
                      <PlayIcon style={{ fontSize: "5rem" }} />
                    )}
                  </Button>
                </CircularProgressbarWithChildren>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
};

module.exports = GuidedMeditation;
