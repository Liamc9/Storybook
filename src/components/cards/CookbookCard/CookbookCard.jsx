import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CookbookCard.css';

export default function CookbookCard({ cookbook }) {
  const { chef, cuisine, title, imageUrl, numberOfRecipes } = cookbook;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/recipes/${title.replace(/\s+/g, '-').toLowerCase()}`);
  };

  return (
    <div className="modern-card-container-horizontal" onClick={handleCardClick}>
      <div className="modern-image-container-horizontal">
        <img
          src={imageUrl}
          alt={title}
          className="modern-recipe-image-horizontal"
        />
      </div>
      <div className="modern-card-content-horizontal">
        <h3 className="modern-card-title-horizontal">{title}</h3>
        <p className="modern-card-subtitle-horizontal">By {chef}</p>
        <div className="modern-card-details-horizontal">
          <span className="modern-card-detail">Cuisine: {cuisine}</span>
          <span className="modern-card-detail">Recipes: {numberOfRecipes}</span>
        </div>
      </div>
    </div>
  );
}
