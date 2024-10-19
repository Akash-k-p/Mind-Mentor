import Card from './Cards.jsx'
import Jumbotron from '../parts/Jumbotron.jsx';
import NavBar from '../parts/NavBar.jsx';
import meditationImg from '../../assets/images/recommendations/meditation.webp';
import '../../assets/css/recommendations/recommendations.css';
import memoryMatchImg from '../../assets/images/recommendations/memorymatch.webp';

function Recommendations() {
    return (

        <div className="recommendations">
            <Jumbotron />
            <NavBar />
            <div className="cards" >
                <Card
                    title="Guided Meditation"
                    description="Relax and take a moment to meditate with a guided meditation session."
                    image={meditationImg}
                    link="meditation"
                >
                </Card>

                <Card
                    title="Memory Match"
                    description="Play this game to boost your memory."
                    image={memoryMatchImg}
                    link="memorymatch"
                >
                </Card>
            </div>
        </div>
    );
}
export default Recommendations