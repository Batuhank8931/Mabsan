// App.js

import React from "react";
import Video_1 from "./components/video_1";
import Left_Header from "./components/Left_Header";
import Right_Header from "./components/Right_Header";
import Carousel from "./components/Carousel";



import backgroundSVG from "./assets/HeaderBackground.svg";
import "./App.css"; // Import the CSS file

const App = () => {

  const sectorLabel = "Sektörler"; // Define the label text here
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
        <Left_Header sectorLabel={sectorLabel} /> {/* Pass the label text as prop */}
        <Carousel />
        <Right_Header sectorLabel={"Sektörler"} /> {/* Pass the label text as prop */}
        


      </div>
    </div>
  );
};

export default App;
