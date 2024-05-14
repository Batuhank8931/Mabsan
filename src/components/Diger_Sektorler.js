import React, { useRef, useState, useEffect } from "react";
import "./css/Diger_Sektorler.css";

const Diger_Sektorler = ({ Diger_Sektorler_Data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateXValue, setTranslateXValue] = useState(0);
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

  const handleNext = () => {
    if (currentIndex < Diger_Sektorler_Data.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="baslik_diger p-md-5 p-3 red_background">
      <div className="d-flex align-items-center flex-column">
        <label className="pt-5" style={{fontSize:"30px"}}>Diğer Sektörler</label>
      </div>
      <div className="d-flex row m-0 full_scale">
        <div className=" col-6 col-md-1 d-flex align-items-center order-md-1 order-2 justify-content-end">
          <button
            className="Diger_Sektor_previous_button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          ></button>
        </div>
        <div className=" col-12 col-md-10 order-md-2 order-1 deneme">
          <div className="Diger_Sektor_card_wrapper">
            <div
              className="Diger_Sektor_container"
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
              <div
                className="Diger_Sektor_card"
                style={
                  window.innerWidth >= 600
                    ? {
                        transform: `translateX(${-450 * currentIndex}px)`,
                      }
                    : { transform: `translateX(${-351 * currentIndex}px)` }
                }
              >
                {Diger_Sektorler_Data.map((pagerItem, index) => (
                  <div
                    className="Diger_Sektor_front d-flex align-items-center flex-column"
                    key={index}
                  >
                    <div className="Diger_Sektor_image_container">
                      {" "}
                      <img
                        src={pagerItem.photoLink}
                        alt="kişiler"
                        className="Diger_Sektor_image"
                      />
                    </div>

                    <div className="d-flex p-2">
                      <label className="diger_urun_title">{pagerItem.Title}</label>
                    </div>
                    <div className="d-flex white_line p-1 align-items-center"></div>
                    <div className="d-flex p-2">
                      <label className="diger_urun_text">{pagerItem.Text}</label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" col-6 col-md-1 d-flex align-items-center order-3 justify-content-start">
          <button
            className="Diger_Sektor_next_button"
            onClick={handleNext}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Diger_Sektorler;
