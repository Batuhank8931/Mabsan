import React, { useRef, useState, useEffect } from "react";
import "./Carousel.css";
import polygon from "../assets/polygon.svg";
import rectangle from "../assets/Rectangle.svg";
import rectangleYatik from "../assets/Rectangle_yatik.svg";

const Carousel = () => {
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
    <div className="baslik p-md-5 p-3 pt-5 pb-5">
      <div className="d-flex align-items-left pb-5 ">
        <div className="col-4 col-md-2 d-flex align-items-center justify-content-start p-2">
          <label> Sektörler </label>
        </div>
        <div className="line-container col-7 col-md-9">
          <div className="line"></div>
        </div>
        <div className="line-container col-1 align-items-left">
          <div>
            <img src={polygon} />
          </div>
        </div>
      </div>
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
            {[...Array(14)].map((_, index) => (
              <div className="blocks" key={index}>
                <div
                  className="deneme"
                  style={{
                    backgroundImage: `url(${
                      window.innerWidth <= 600 ? rectangleYatik : rectangle
                    })`,
                    backgroundSize: "cover",
                  }}
                >
                  {index + 1} e ticaret
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
