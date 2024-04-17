import React, { useRef, useState } from "react";
import "./Timeline.css";

const Timeline = () => {
  const events = [
    {
      year: 1980,
      title: "Event 1",
      text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod lectus vel fringilla. Duis suscipit mi et justo efficitur, nec bibendum urna condimentum. Donec id justo sapien. Nulla facilisi. Nullam consequat urna eget magna feugiat, a suscipit orci convallis.",
    },
    {
      year: 1990,
      title: "Event 2",
      text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod lectus vel fringilla. Duis suscipit mi et justo efficitur, nec bibendum urna condimentum. Donec id justo sapien. Nulla facilisi. Nullam consequat urna eget magna feugiat, a suscipit orci convallis.",
    },
    {
      year: 2000,
      title: "Event 3",
      text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod lectus vel fringilla. Duis suscipit mi et justo efficitur, nec bibendum urna condimentum. Donec id justo sapien. Nulla facilisi. Nullam consequat urna eget magna feugiat, a suscipit orci convallis.",
    },
    {
      year: 2010,
      title: "Event 4",
      text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod lectus vel fringilla. Duis suscipit mi et justo efficitur, nec bibendum urna condimentum. Donec id justo sapien. Nulla facilisi. Nullam consequat urna eget magna feugiat, a suscipit orci convallis.",
    },
    {
      year: 2020,
      title: "Event 5",
      text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod lectus vel fringilla. Duis suscipit mi et justo efficitur, nec bibendum urna condimentum. Donec id justo sapien. Nulla facilisi. Nullam consequat urna eget magna feugiat, a suscipit orci convallis.",
    },
    {
      year: 2030,
      title: "Event 6",
      text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod lectus vel fringilla. Duis suscipit mi et justo efficitur, nec bibendum urna condimentum. Donec id justo sapien. Nulla facilisi. Nullam consequat urna eget magna feugiat, a suscipit orci convallis.",
    },
    {
      year: 2040,
      title: "Event 7",
      text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod lectus vel fringilla. Duis suscipit mi et justo efficitur, nec bibendum urna condimentum. Donec id justo sapien. Nulla facilisi. Nullam consequat urna eget magna feugiat, a suscipit orci convallis.",
    },
    {
      year: 2050,
      title: "Event 8",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod lectus vel fringilla. Duis suscipit mi et justo efficitur, nec bibendum urna condimentum. Donec id justo sapien. Nulla facilisi. Nullam consequat urna eget magna feugiat, a suscipit orci convallis.",
    },
    {
      year: 2060,
      title: "Event 9",
      text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod lectus vel fringilla. Duis suscipit mi et justo efficitur, nec bibendum urna condimentum. Donec id justo sapien. Nulla facilisi. Nullam consequat urna eget magna feugiat, a suscipit orci convallis.",
    },
    {
      year: 2070,
      title: "Event 10",
      text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod lectus vel fringilla. Duis suscipit mi et justo efficitur, nec bibendum urna condimentum. Donec id justo sapien. Nulla facilisi. Nullam consequat urna eget magna feugiat, a suscipit orci convallis.",
    },
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
    <div className="baslik p-md-5 p-3 pt-5 pb-5">
      <div
        className="timeline"
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
        <div className="container_timer">
          {events.map((item, index) => (
            <div className="times" key={index}>
              <button className="timer_button d-flex justify-content-start m-1 m-md-4">
                <div className="flex-column ">
                  <div className="timeline_label p-2 order-md-2 order-1 m-2">
                    <div className=" timer_headers d-flex flex-column align-items-start">
                      <label className="timeline_year">{item.year}</label>
                      <label className="timeline_header">{item.title}</label>
                      <label className="timeline_text">{item.text}</label>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
