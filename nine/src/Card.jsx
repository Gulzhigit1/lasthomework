
import React from 'react';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="card">
            {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Card;
