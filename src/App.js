import React, { useState } from "react";
import Left_Header from "./components/Left_Header";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Video_1 from "./components/video_1";
import Right_Header from "./components/Right_Header";
import Carousel from "./components/Carousel";
import Pager from "./components/Pager";
import SubNavbar from "./components/SubNavbar";
import Timeline_new from "./components/Timeline_new";

import backgroundSVG from "./assets/HeaderBackground.svg";
import "./App.css"; // Import the CSS file

const App = () => {
  const [Subheader, setSubheader] = useState(true); // State to control the visibility of elements
  const [BigHeader, setBigHeader] = useState("");

  // Function to toggle the visibility of elements
  // Function to toggle the visibility of elements
  const change_page = (label) => {
    if (!Subheader) {
      // If Subheader is true, update only BigHeader
      setBigHeader(label);
    } else {
      // If Subheader is false, toggle both Subheader and BigHeader
      setSubheader((prevSubheader) => !prevSubheader);
      setBigHeader(label);
    }
  };

  return (
    <div
      className="App-container"
      style={{
        position: "relative",
        backgroundImage: `url(${backgroundSVG})`,
      }}
    >
      {/* Wrap everything with the container */}
      <div className="App">
        {Subheader ? (
          <>
            <Video_1 change_page={change_page} />
            <Left_Header sectorLabel={"Sektörler"} />
            <Carousel />
            <Right_Header sectorLabel={"Üretim"} />
            <Pager />
          </>
        ) : (
          <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
        )}
        <Left_Header sectorLabel={"Yolculuğumuz"} />
        <Timeline_new />
        <Footer />
      </div>
    </div>
  );
};

export default App;
