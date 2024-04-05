// App.js

import React from "react";
import Video_1 from "./components/video_1";
import Carousel from './components/Carousel';


import backgroundSVG from "./assets/HeaderBackground.svg";
import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <div
      className="App-container"
      style={{
        position: "relative",
        backgroundImage: `url(${backgroundSVG})`,
        width: "100%",
      }}
    >
      {" "}
      {/* Wrap everything with the container */}
      <div className="App">

        <Video_1 />
        <Carousel/>


      </div>
    </div>
  );
};

export default App;
