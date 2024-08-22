import React, { useState, useEffect, useRef } from "react";
import "./css/Perakende_Video.css";

const Perakende_Video = ({ matchedItemDetails }) => {
  const [videoKey, setVideoKey] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    // Increment key to force remount of video element
    setVideoKey(prevKey => prevKey + 1);
  }, [matchedItemDetails]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, [videoKey]); // Ensure this runs every time the videoKey changes

  return (
    <div className="baslik p-md-5 p-3 pb-md-5 pb-4 pt-3 pt-md-5 pb-0">
      <div id="video-container">
        <video
          autoPlay
          loop
          muted
          controls={false} // This will hide the video controls
          playsInline
          key={videoKey} // Refresh the video when key changes
          ref={videoRef}
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
          <h1 className="perakende_header pt-5">{matchedItemDetails[1]}</h1>
          <label className="video_text p-5">{matchedItemDetails[2]}</label>
        </div>
      </div>
    </div>
  );
};

export default Perakende_Video;
