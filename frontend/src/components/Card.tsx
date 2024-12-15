import React from 'react';

interface CardProps {
    photo: string;
    name: string;
    description: string;
    tags: string[];
}

const Card: React.FC<CardProps> = ({ photo, name, description, tags }) => {
    return (
        <div className="card">
            <img src={photo} alt={name} className="card-photo" />
            <h2 className="card-name">{name}</h2>
            <p className="card-description">{description.length > 100 ? `${description.substring(0, 100)}...` : description}</p>
            <div className="card-tags">
                {tags.map(tag => (
                    <span key={tag} className="card-tag">#{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default Card;