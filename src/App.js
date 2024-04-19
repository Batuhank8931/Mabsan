// App.js

import React from "react";

import Main_page from "./components/main_page/Main_page";

import backgroundSVG from "./assets/HeaderBackground.svg";
import "./App.css"; // Import the CSS file

const App = () => {

  return (
    <div
      className="App-container"
      style={{
        position: "relative",
        backgroundImage: `url(${backgroundSVG})`,
      }}
    >
      {" "}
      {/* Wrap everything with the container */}
      <div className="App">
        <Main_page />

      </div>
    </div>
  );
};

export default App;
