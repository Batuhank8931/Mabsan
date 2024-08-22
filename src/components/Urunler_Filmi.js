import React, { useEffect, useRef } from "react";
import "./css/Urunler_Filmi.css";
import tanitim_filmi from "../assets/karton_videolar.mp4";

const Tanitim_Filmi = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3;
    }
  }, []);

  return (
    <div className="d-flex justify-content-center pb-0">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        controls={false} // This will hide the video controls
        playsInline
        className="urunler-element"
      >
        <source src={tanitim_filmi} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Tanitim_Filmi;
