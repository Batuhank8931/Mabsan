import React, { useState, useRef } from "react";
import "./css/Tanitim_Filmi.css";
import tanitim_filmi from "../assets/araba.mp4";
import PlayButtonIcon from "../assets/play_button.svg";

const Tanitim_Filmi = () => {
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef(null);

  const handlePlayButtonClick = (e) => {
    videoRef.current.play();
    setShowPlayButton(false); // Hide the play button container
  };

  const handleVideoClick = () => {
    if (videoRef.current && !videoRef.current.paused) {
      setShowPlayButton(true); // Show the play button container if video is playing
    } else {
      setShowPlayButton(false); // Hide the play button container if video is paused
    }
  };
  

  return (
    <div className="video-container-main">
      <video
        controls
        className="video-element"
        onClick={handleVideoClick}
        ref={videoRef}
      >
        <source src={tanitim_filmi} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {showPlayButton && (
        <div className="play-button-container">
          <img
            src={PlayButtonIcon}
            alt="Play Button"
            className="play-button"
            onClick={handlePlayButtonClick}
          />
          <label className="play-button-label">Mabsan Tanıtım Filmi</label>
        </div>
      )}
    </div>
  );
};

export default Tanitim_Filmi;
