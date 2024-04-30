import React from "react";
import YouTube from "react-youtube";
import "./css/Tanitim_Filmi.css";



const Tanitim_Filmi = () => {
  const videoId = "mb1P5WsRlMo"; // YouTube video ID

  // Options for the YouTube component
  const opts = {
    width: "100%", 
    height: "auto", // Set height to "auto" to allow dynamic resizing
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 1,
      modestbranding: 1,
      fs: 0,
      iv_load_policy: 3,
      playsinline: 1,
      mute: 1,
    },
  };

  // Function to handle when the video ends
  const handleVideoEnd = (event) => {
    event.target.playVideo(); // Restart the video
  };

  return (
    <div className="video-iframe">
      <YouTube videoId={videoId} opts={opts} onEnd={handleVideoEnd} />
    </div>
  );
};

export default Tanitim_Filmi;
