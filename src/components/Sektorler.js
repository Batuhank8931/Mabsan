import React, { useRef, useState, useEffect } from "react";
import "./css/Sektorler.css";
import polygon from "../assets/red-dot-ploygon.svg";
import rectangle from "../assets/Rectangle.svg";
import rectangleYatik from "../assets/Rectangle_yatik.svg";
import card_item from "../assets/card_item.svg";
import Apples from "../assets/apples.mp4";

const Sektorler = () => {
  const carouselItems = [
    "E-Ticaret",
    "Endüstriyel",
    "Elektrik- Elektronik",
    "Perakende",
    "Kozmetik",
    "İlaç",
    "Otomotiv",
  ];

  useEffect(() => {
    // Preload the video
    preloadVideo('../assets/apples.mp4');
  }, []);

  function preloadVideo(url) {
    var video = document.createElement('video');
    video.src = url;
    video.style.display = 'none';
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
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          ref={containerRef}
        >
          <div className="container">
            {carouselItems.map((item, index) => (
              <div className="blocks" key={index}>
                <button
                  className="sektor_button"
                  style={{
                    backgroundImage: `url(${
                      window.innerWidth <= 600 ? rectangleYatik : rectangle
                    })`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="button_header d-flex align-items-start flex-md-column">
                    <div
                      className="order-md-1 order-2 mt-2"
                      style={{
                        width: "100%",
                      }}
                    >
                      <div className="d-flex number_label">
                        <img className="w-6" src={polygon} />
                        <label
                          className="sektor_label ml-2"
                          style={{
                            alignSelf: "flex-start",
                            textAlign: "left",
                            width: "35%",
                          }}
                        >
                          {index + 1}
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
                            height:"250px"
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
                            <source src={Apples} type="video/mp4" />
                            Your browser does not support the video tag.
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

                    <div className="sektor_label p-2 order-md-2 order-1 m-2">
                      <div className=" card_headers vertical-text d-flex align-items-start ">
                        <div className="">
                          <h1 className="sektor_label mr-3">AA</h1>
                        </div>
                        <div>
                          <h1 className="sektor_label ">{item}</h1>
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
                          <source src={Apples} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>{" "}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sektorler;
