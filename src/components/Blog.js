import React, { useRef, useState } from "react";
import "./css/Blog.css";

const Blog = () => {
  const carouselItems = [
    "E-Ticaret",
    "Endüstriyel",
    "Elektrik- Elektronik",
    "Perakende",
    "Kozmetik",
    "İlaç",
    "Otomotiv",
  ];

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
      <div
        className="carousel_blog"
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
        <div className="container_blog">
          {carouselItems.map((item, index) => (
            <div className="blocks_blog" key={index}>
              <div className="blog_sektor">
                <label
                  className="blog_label ml-2"
                  style={{
                    alignSelf: "flex-start",
                    textAlign: "left",
                    width: "35%",
                  }}
                >
                  {index + 1}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
