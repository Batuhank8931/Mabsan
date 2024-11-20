import React, { useRef, useEffect, useState } from "react";
import Mabsan from "../assets/MERS LOGO PNG.png";
import MenuButton from "../assets/MenuButton_blue.svg";
import backgroundSVG from "../assets/HeaderBackground.svg";
import polygon from "../assets/poligon_mavi.svg";

import Navbar from "./NavBar.js"; // Importing the NavBar component
import "./css/SubNavbar.css"; // Importing the CSS file

import { Link } from "react-router-dom";

const SubNavbar = ({ change_page, sectorLabel, SektorItems }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [showButtons, setShowButtons] = useState(true); // State to control the visibility of buttons
  const [showNavbar, setShowNavbar] = useState(null); // State to control the visibility of the navbar
  const [initialRender, setInitialRender] = useState(true); // State to track initial render
  const containerRef = useRef(null);

  const lineRef = useRef(null);



  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = width * (9 / 16); // Aspect ratio: 16:9
        setContainerWidth(width);
        setContainerHeight(height);
      }
    };

    // Call handleResize when the window is resized
    window.addEventListener("resize", handleResize);
    // Initial call to set container width and height
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // After the component is initially rendered, set initialRender to false
    setInitialRender(false);
  }, []);

  const show_Navbar = () => {
    setShowButtons(!showButtons);
    if (!showNavbar) {
      setShowNavbar(true); // Show navbar only if it's not visible
    }
  };

  const showButtonsAgain = () => {
    setShowNavbar(false);
    setShowButtons(true);
  };

  useEffect(() => {
    const labelElement = document.querySelector(".left-div label");
    if (labelElement) {
      labelElement.classList.add("label-animation");
      setTimeout(() => {
        labelElement.classList.remove("label-animation");
      }, 500);
    }
  }, [sectorLabel]);

  return (
    <div
      className={`bg-cover ${
        initialRender
          ? ""
          : showNavbar === true
          ? "slideDown"
          : showNavbar === false
          ? "slideUp"
          : ""
      }`}
      style={{
        width: "100%",
      }}
    >
      {showNavbar && (
        <Navbar change_page={change_page} showButtonsAgain={showButtonsAgain} SektorItems={SektorItems}  />
      )}

      <div>
        <div
          ref={containerRef}
          className="d-flex justify-content-center"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        >
          {/* Conditionally render the buttons based on showButtons state */}
          {showButtons && (
            <div
              className="label d-flex flex-row justify-content-center align-content-between p-md-5 p-3 pb-md-0 pt-5 col-md-11 col-10"
              style={{ width: "100%", height: "100%" }}
            >
              <div className="d-flex flex-column" style={{ width: "100%" }}>
                <div style={{ width: "100%" }}>
                  <div className="d-flex justify-content-between">
                    {showButtons && (
                      <div className="col-10">
                        <button
                          className="mabsan-logo"
                          onClick={() => {
                            change_page("Main");
                          }}
                          style={{ width: "auto" }}
                        >
                          {" "}
                          <Link to={"/"}>
                            {" "}
                            <img
                              src={Mabsan}
                              alt="Mabsan"
                              className="mabsan h-10"
                            />
                          </Link>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className="d-flex align-items-left flex-column justify-content-center"
                  style={{ width: "100%", minHeight: "0", flex: 1 }}
                ></div>
              </div>

              <div className="d-flex flex-column align-items-end col-md-1 col-2">
                <button
                  className="btn p-0 position-relative"
                  onClick={show_Navbar} // Add onClick handler to toggle the visibility of buttons
                >
                  <div className="menu_button">
                    <img src={MenuButton} alt="Menu Button" />
                  </div>

                  {/* Semi-transparent overlay */}
                </button>

                <div
                  className="d-flex align-items-end"
                  style={{ height: "100%" }}
                ></div>
              </div>
            </div>
          )}
        </div>
        <div className="baslik_subnavbar p-md-5 p-3 pt-md-0">
          <div className="d-flex justify-content-between">
            <div className="left-div d-flex align-items-center mr-5">
              <label className="subheader">{sectorLabel}</label>{" "}
              {/* Use the prop value here */}
            </div>
            <div className="middle-div d-flex align-items-center">
              <div ref={lineRef} className="line animate-line-left"></div>
            </div>
            <div className="right-div d-flex align-items-center w-8">
              <img src={polygon} alt="Polygon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
