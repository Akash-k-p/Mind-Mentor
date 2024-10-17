import React from 'react';
import '../../assets/css/recommendations/Cards.css';

function Card({ title, description, image,link }) {
return (
    <div className="card" onClick={() => window.location.href = link}>
        {image && <img className="card-image" src={image} alt={`${title} picture`} />}
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
    </div>
);
}

export default Card;
