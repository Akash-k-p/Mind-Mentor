// GuidedMeditation.js
import audioFiles from "../../data/audioFiles";
import Sound from "react-sound";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import PlayIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { getDisplayName as formatDisplayName } from "../../utils/helper";

class GuidedMeditation {
    constructor(container) {
        this.container = container;
        this.currentAudio = audioFiles[0];
        this.isPlaying = Sound.status.STOPPED;
        this.position = 0;
        this.duration = 0;

        this.render();
    }

    render() {
        this.container.innerHTML = this.getHTML();
        this.bindEvents();
        this.updateProgress();
    }

    getHTML() {
        return `
            <div class="guidedMeditation" style="background-image: url(${this.currentAudio.backgroundImage})">
                <div class="guidedMeditation__header">
                    <h4>Guided Meditation</h4>
                    <select id="audio-select">
                        ${audioFiles.map((audio, index) => `
                            <option value="${index}">${formatDisplayName(audio.url)}</option>
                        `).join('')}
                    </select>
                </div>
                <div class="guidedMeditation_audio">
                    <div id="progress-container">
                        <CircularProgressbarWithChildren
                            value="${this.position}"
                            maxValue="${this.duration || 100}"
                        >
                            <button id="play-pause-btn">
                                ${this.isPlaying === Sound.status.PLAYING ? 
                                    `<PauseIcon />` : 
                                    `<PlayIcon />`}
                            </button>
                        </CircularProgressbarWithChildren>
                    </div>
                </div>
            </div>
        `;
    }

    bindEvents() {
        const selectElement = this.container.querySelector('#audio-select');
        selectElement.addEventListener('change', (e) => {
            this.currentAudio = audioFiles[e.target.value];
            this.render();
        });

        const playPauseButton = this.container.querySelector('#play-pause-btn');
        playPauseButton.addEventListener('click', () => {
            this.isPlaying = this.isPlaying === Sound.status.PLAYING ? 
                Sound.status.PAUSED : 
                Sound.status.PLAYING;
            this.render();
        });
    }

    updateProgress() {
        // Logic to update the progress of audio playback
        // Call this method periodically (e.g., with setInterval)
    }
}

export default GuidedMeditation;
