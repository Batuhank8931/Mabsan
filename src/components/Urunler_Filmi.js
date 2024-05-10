import React from "react";
import "./css/Urunler_Filmi.css";
import tanitim_filmi from "../assets/scene.mp4";

const Tanitim_Filmi = () => {
  return (
    <div className="d-flex justify-content-center p-md-5 pt-4 pb-0">
      <video
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
