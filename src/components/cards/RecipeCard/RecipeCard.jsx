import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { ClockIcon, HeartIcon, ForkAndKnifeIcon } from '../../../assets/Icons';
import './RecipeCard.css';

export default function RecipeCard({ recipe }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const {
    title,
    imageUrl,
    videoUrl,
    chef,
    time,
    cuisine,
    likes,
    profilePic,
  } = recipe;

  const handleImageClick = () => {
    setIsVideoPlaying(true); const videoElement = document.querySelector('.video-player'); if (videoElement) { videoElement.play(); }
  };

  const handleVideoClick = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="card-container" onClick={isVideoPlaying ? handleVideoClick : handleImageClick}>
      <div className="image-container">
        <div className="media-wrapper">
          {isVideoPlaying ? (
            <ReactPlayer url={videoUrl} playing={isVideoPlaying} muted
              width="100%"
              height="100%"
              className="video-player"
            />
          ) : (
            <img
              src={imageUrl}
              alt={title}
              className="recipe-image"
            />
          )}
        </div>
        <div className="overlay">
          <div className="chef-info">
            <img src={profilePic} alt={chef} className="profile-pic" />
            <span className="chef-name">{chef}</span>
          </div>
          <div className="likes">
            <HeartIcon className="icon-large" />
            <p>{likes}</p>
          </div>
        </div>
      </div>
      <div className="card-content">
        <p className="card-title">{title}</p>
        <div className="grid-container">
          <div className="grid-item">
            <ClockIcon className="icon-small" />
            <p className="text">{time}</p>
          </div>
          <div className="grid-item">
            <ForkAndKnifeIcon className="icon-small" />
            <p className="text">{cuisine}</p>
          </div>
        </div>
      </div>
    </div>
  );
}