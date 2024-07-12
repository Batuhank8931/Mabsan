import React, { useState, useEffect } from "react";
import "./css/Perakende_Video.css";

const Perakende_Video = ({ matchedItemDetails }) => {
  const [videoKey, setVideoKey] = useState(0);

  useEffect(() => {
    // Increment key to force remount of video element
    setVideoKey(prevKey => prevKey + 1);
  }, [matchedItemDetails]);

  return (
    <div className="baslik p-md-5 p-3 pb-md-5 pb-4 pt-0 pt-md-0 pb-0">
      <div id="video-container">
        <video
          autoPlay
          loop
          muted
          controls={false} // This will hide the video controls
          playsInline
          key={videoKey} // Refresh the video when key changes
          style={{
            pointerEvents: "none",
            opacity: 1,
          }}
        >
          <source src={require(`../assets/sektorler/${matchedItemDetails[0]}`)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <div className="d-flex align-items-center flex-column">
          <h1 className="perakende_header">{matchedItemDetails[1]}</h1>
          <label className="video_text p-5">{matchedItemDetails[2]}</label>
        </div>
      </div>
    </div>
  );
};

export default Perakende_Video;
