import React from "react";
import "./css/Perakende_Video.css";
import Apples from "../assets/apples.mp4";

const Perakende_Video = () => {
  return (
    <div className="baslik p-md-5 p-3 pb-md-5 pb-4 pt-0 pt-md-0">
      <div id="video-container">
        <video
          autoPlay
          loop
          muted
          controls={false} // This will hide the video controls
          playsInline
          style={{
            pointerEvents: "none",
            opacity: 1,
          }}
        >
          <source src={Apples} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <div className="d-flex align-items-center flex-column">
          <h1 className="perakende_header">Header</h1>
          <label className="video_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            enim sem, tincidunt sed aliquam quis, cursus quis tortor. Vestibulum
            nec lacinia massa. Vivamus pulvinar vel ante ac facilisis. Fusce
            vitae dignissim odio, eget fermentum metus. Pellentesque semper
            posuere molestie. Proin ultricies rutrum tortor ut tristique. Proin
            placerat risus et erat cursus consequat.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Perakende_Video;
