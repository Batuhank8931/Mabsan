import React, { useRef, useEffect, useState } from "react";
import backgroundSVG from "../assets/HeaderBackground.svg";
import Mabsan from "../assets/mabsan.svg";
import MenuButton from "../assets/MenuButton.svg";
import bayrak from "../assets/bayrak.svg";
import Navbar from "./NavBar.js"; // Importing the NavBar component
import "./video_1.css"; // Importing the CSS file
import Carousel from "./Carousel";

const Video_1 = () => {
  const videoId = "l1cBhOqSV4M"; // YouTube video ID
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [showButtons, setShowButtons] = useState(true); // State to control the visibility of buttons
  const [showNavbar, setShowNavbar] = useState(null); // State to control the visibility of the navbar
  const [initialRender, setInitialRender] = useState(true); // State to track initial render
  const containerRef = useRef(null);

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

  const toggleButtons = () => {
    setShowButtons(!showButtons);
    if (!showNavbar) {
      setShowNavbar(true); // Show navbar only if it's not visible
    }
  };

  const showButtonsAgain = () => {
    setShowNavbar(false);
    setShowButtons(true);
  };

  return (
    <div
      className={`bg-cover video-1-container ${
        initialRender
          ? ""
          : showNavbar === true
          ? "slideDown"
          : showNavbar === false
          ? "slideUp"
          : ""
      }`}
      style={{
        position: "relative",
        backgroundColor: "black",
        width: "100%",
      }}
    >
      {window.innerWidth <= 600 && ( 
        <div  // 1. BLANK AREA BİLGİSAYARDA YOK TELEFONDA VAR
        >
          {showNavbar && <Navbar showButtonsAgain={showButtonsAgain} />}
          <div
            className="bg-cover bg-fixed d-flex justify-content-center"
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <div
              id="second"
              ref={containerRef}
              className="d-flex justify-content-center"
              style={{
                position: "relative",
                width: "100%",
                height: `${containerHeight}px`,
                backgroundColor: "transparent",
              }}
            >
              {/* Conditionally render the buttons based on showButtons state */}

              <div
                className="label d-flex flex-row justify-content-center align-content-between pt-5 pl-3 pr-3 col-10"
                style={{ position: "absolute", width: "100%", height: "100%" }}
              >
                <div className="d-flex flex-column" style={{ width: "100%" }}>
                  {showButtons && (
                    <div style={{ width: "100%" }}>
                      <div className="d-flex justify-content-between">
                        <div>
                          <img
                            src={Mabsan}
                            alt="Mabsan"
                            className="mabsan h-10"
                          />
                        </div>
                        <div className="d-flex align-items-top">
                          <div className="d-none d-sm-flex d-none d-sm-flex">
                            <img src={bayrak} alt="bayrak" className="bayrak" />
                            <button className="text-white button">TR</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {showButtons && (
                  <div className="menu d-flex align-items-start justify-content-end col-2">
                    <button
                      className="btn p-0 position-relative"
                      onClick={toggleButtons} // Add onClick handler to toggle the visibility of buttons
                    >
                      <div>
                        <img
                          src={MenuButton}
                          alt="Menu Button"
                          className="menu-button"
                        />
                      </div>
                      <div className="overlay"></div>
                      {/* Semi-transparent overlay */}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
      )}
      
      <div // 2. MIDDLE AREA

      >
        
        {showButtons == false && window.innerWidth > 600 && (
          <Navbar showButtonsAgain={showButtonsAgain} />
        )}
        <div
          className="bg-cover bg-fixed d-flex justify-content-center"
          style={{
            position: "relative",
            backgroundColor: "black",
            width: "100%",
          }}
        >
          <div
            id="second"
            ref={containerRef}
            className="d-flex justify-content-center"
            style={{
              position: "relative",
              width: "100%",
              height: `${containerHeight}px`,
              backgroundColor: "transparent",
            }}
          >
            <iframe
              title="YouTube video player"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&modestbranding=1&showinfo=0&mute=1&disablekb=1&iv_load_policy=3&fs=0&controls=0&disableControls=1&cc_load_policy=1&color=white&enablejsapi=1&end=0&hl=en&listType=playlist&rel=0&start=0&playsinline=1`}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                opacity: 1,
              }}
            ></iframe>
            {/* Conditionally render the buttons based on showButtons state */}

            <div
              className="label d-flex flex-row justify-content-center align-content-between p-md-5 p-3 col-10"
              style={{ position: "absolute", width: "100%", height: "100%" }}
            >
              <div className="d-flex flex-column" style={{ width: "100%" }}>
                {showButtons && window.innerWidth > 600 && (
                  <div style={{ width: "100%" }}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <img
                          src={Mabsan}
                          alt="Mabsan"
                          className="mabsan h-10"
                        />
                      </div>
                      <div className="d-flex align-items-top">
                        <div className="d-none d-sm-flex d-none d-sm-flex">
                          <img src={bayrak} alt="bayrak" className="bayrak" />
                          <button className="text-white mx-2 button">TR</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div
                  className="d-flex align-items-left flex-column justify-content-center"
                  style={{ width: "100%", minHeight: "0", flex: 1 }}
                >
                  <label>
                    Kutuda <span style={{ color: "#FF0000" }}>Kalite</span>
                  </label>
                  <label>Bizde bir okyanus var</label>
                </div>
                <div></div>
              </div>

              <div className="d-flex flex-column align-items-end col-2">
                {showButtons && window.innerWidth > 600 && (
                  <button
                    className="btn p-0 position-relative"
                    onClick={toggleButtons} // Add onClick handler to toggle the visibility of buttons
                  >
                    <div>
                      <img
                        src={MenuButton}
                        alt="Menu Button"
                        className="menu-button"
                      />
                    </div>
                    <div className="overlay"></div>

                    {/* Semi-transparent overlay */}
                  </button>
                )}
                {window.innerWidth > 600 && (
                  <div
                    className="d-flex align-items-end"
                    style={{ height: "100%" }}
                  >
                    <div
                      className="d-flex justify-content-end"
                      style={{ width: "100%" }}
                    >
                      <label style={{ fontSize: "50px" }}>36</label>
                      <div className="d-flex flex-column justify-content-end">
                        <label style={{ fontSize: "25px" }}>YILLIK</label>
                        <label style={{ fontSize: "25px" }}>TECRÜBE</label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {window.innerWidth <= 600 && ( // Check if window width is less than or equal to 600px (adjust as needed)
        <div // 3. BLANK AREA BİLGİSAYARDA YOK TELEFONDA VAR
        
        > 
          <div
            className="bg-cover bg-fixed d-flex justify-content-center"
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <div
              id="second"
              ref={containerRef}
              className="d-flex justify-content-center"
              style={{
                position: "relative",
                width: "100%",
                height: `${containerHeight}px`,
                backgroundColor: "transparent",
              }}
            >
              {/* Conditionally render the buttons based on showButtons state */}

              <div
                className="label d-flex flex-row justify-content-center align-content-between pt-5 pl-3 pr-3 col-10"
                style={{ position: "absolute", width: "100%", height: "100%" }}
              >
                <div className="d-flex flex-column" style={{ width: "100%" }}>
                  {showButtons && (
                    <div style={{ width: "100%" }}>
                      <div
                        className="d-flex align-items-end"
                        style={{ height: "100%" }}
                      >
                        <div
                          className="d-flex justify-content-end"
                          style={{ width: "100%" }}
                        >
                          <label style={{ fontSize: "50px" }}>36</label>
                          <div className="d-flex flex-column justify-content-end">
                            <label style={{ fontSize: "25px" }}>YILLIK</label>
                            <label style={{ fontSize: "25px" }}>TECRÜBE</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Video_1;
