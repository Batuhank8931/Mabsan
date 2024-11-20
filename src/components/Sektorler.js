import React, { useRef, useState, useEffect } from "react";
import "./css/Sektorler.css";
import polygon from "../assets/red-dot-ploygon.svg";
import rectangle from "../assets/Rectangle.svg";
import rectangleYatik from "../assets/Rectangle_yatik.svg";
import SektorApples from "../assets/SektorApples.mp4";

import { Link } from "react-router-dom";

const Sektorler = ({ SektorItems }) => {
  function preloadVideo(url) {
    var video = document.createElement("video");
    video.src = url;
    video.style.display = "none";
    document.body.appendChild(video);
  }

  const [scrollPosition, setScrollPosition] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const containerRef = useRef(null);

  const handleMouseDown = (event) => {
    setDragStartX(event.clientX);
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (event) => {
    if (dragStartX !== null) {
      const dragDistance = event.clientX - dragStartX;
      containerRef.current.scrollLeft = scrollPosition - dragDistance;
    }
  };

  const handleMouseUp = () => {
    setDragStartX(null);
    setScrollPosition(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = "grab";
  };

  const handleTouchStart = (event) => {
    setDragStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (dragStartX !== null) {
      const dragDistance = event.touches[0].clientX - dragStartX;
      containerRef.current.scrollLeft = scrollPosition - dragDistance;
    }
  };

  const handleTouchEnd = () => {
    setDragStartX(null);
    setScrollPosition(containerRef.current.scrollLeft);
  };

  return (
    <div className="baslik p-md-5 p-3 pt-5 pb-5 ">
      <div className="redline">
        <div
          className="carousel bar "
          //onMouseDown={handleMouseDown}
          //onMouseMove={handleMouseMove}
          //onMouseUp={handleMouseUp}
          //onMouseLeave={handleMouseUp}
          //onTouchStart={handleTouchStart}
          //onTouchMove={handleTouchMove}
          //onTouchEnd={handleTouchEnd}
          //onTouchCancel={handleTouchEnd}
          //ref={containerRef}
        >
          <div className="container">
            {SektorItems.map((item, index) => (
              <div className="blocks" key={index}>
                <Link to={`/${item.way}`}>
                  <button
                    className="sektor_button"
                    id={
                      index === SektorItems.length - 1
                        ? "last_sektor_button"
                        : index === SektorItems.length - 2
                        ? "before_last_one"
                        : ""
                    }
                    style={{
                      backgroundImage: `url(${
                        window.innerWidth <= 600 ? rectangleYatik : rectangle
                      })`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="button_header d-flex align-items-start flex-md-column justify-content-center">
                      <div
                        className="order-md-1 order-2 mt-2"
                        style={{
                          width: "100%",
                        }}
                      >
                        <div className="d-flex number_label p-md-0 pl-5">
                          <img className="w-6" src={polygon} />
                          <label className="sektor_label right_symbol pl-2">
                            0{index + 1}
                          </label>
                        </div>
                        <div
                          className="sector_card_2"
                          // BİLGİSAYARDA GÖZÜKEN HOVER CARDI
                        >
                          {" "}
                          <div
                            className="d-flex align-items-center justify-content-center"
                            id="video-container"
                            style={{
                              height: "250px",
                            }}
                          >
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
                              <source
                                src={require(`../assets/sektorler/${item.way}.mp4`)}
                                type="video/mp4"
                              />{" "}
                            </video>
                          </div>
                        </div>{" "}
                      </div>
                      <div
                        className="mb-auto order-md-1 order-2 d-flex row "
                        style={{
                          width: "100%",
                        }}
                      >
                        {" "}
                        <div className="d-flex column align-items-center justify-content-center m-0 p-0"></div>
                      </div>
                      <div
                        className="sektor_label order-md-2 order-1 ml-2"
                        style={{
                          width: "100%",
                        }}
                      >
                        <div className=" card_headers vertical-text d-flex align-items-start">
                          <div className="">
                            <div className="sektor_label mr-3">
                              <img
                                className="h-9 image  float-left"
                                src={item.image}
                                alt="Logo"
                                style={{ marginLeft: "-5px" }}
                              />
                              <img
                                className="h-9 image_b"
                                src={item.image_b}
                                alt="Logo"
                              />
                            </div>
                          </div>
                          <div className="label_frame">
                            <h1 className="sektor_label ">{item.name}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="sector_card_1" // TELEFONDA GÖZÜKEN HOVER CARDI
                    >
                      <div className="flex-row align-items-center justify-content-center card_video">
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
                            <source
                              src={require(`../assets/sektorler/${item.way}.mp4`)}
                              type="video/mp4"
                            />{" "}
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </div>{" "}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sektorler;
