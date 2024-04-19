import React, { useRef, useState, useEffect } from "react";
import "./css/Timeline.css";

function isPhoneScreen() {
  return window.matchMedia("(max-width: 768px)").matches; // Adjust the max-width as needed
}

const Timeline = () => {
  const events = [
    {
      year1: "19",
      year2: "82",
      title: "Event 1",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod.",
    },
    {
      year1: "19",
      year2: "88",
      title: "Event 2",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod.",
    },
    {
      year1: "20",
      year2: "00",
      title: "Event 3",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod.",
    },
    {
      year1: "20",
      year2: "01",
      title: "Event 4",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod.",
    },
    {
      year1: "20",
      year2: "02",
      title: "Event 5",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod.",
    },
    {
      year1: "20",
      year2: "10",
      title: "Event 6",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod.",
    },
    {
      year1: "20",
      year2: "12",
      title: "Event 7",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod.",
    },
    {
      year1: "20",
      year2: "15",
      title: "Event 8",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod.",
    },
    {
      year1: "20",
      year2: "18",
      title: "Event 9",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod.",
    },
    {
      year1: "20",
      year2: "23",
      title: "Event 10",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet odio. Fusce vehicula euismod.",
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const containerRef = useRef(null);

  const updateLabelWithAnimation = () => {
    const label = document.querySelector(".timeline_year0");
    label.style.transform = "translateX(50%)";
    setTimeout(() => {
      label.style.transform = "translateX(0)";
    }, 400);
  };

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key_year = parseInt(entry.target.getAttribute("data-index"));
            const year2 = entry.target.getAttribute("data-year2");
            const year3 = entry.target.getAttribute("data-year3");
            const rect = entry.boundingClientRect;
            const containerRect = containerRef.current.getBoundingClientRect();
            const containerCenterX =
              containerRect.left + containerRect.width / 2;
            const rectCenterX = rect.left + rect.width / 2;

            if (rectCenterX <= containerCenterX) {
              const yearLabel = document.querySelector(".timeline_year0");
              const labe_id = "year_" + (key_year+1);
              const little_year = document.getElementById(labe_id);
              const final_year = year3 + year2;
              if (yearLabel) {
                yearLabel.textContent = final_year;
                updateLabelWithAnimation();
              }
            }
          } else {
            const key_year = parseInt(entry.target.getAttribute("data-index"));
            const year4 = entry.target.getAttribute("data-year4");
            const year5 = entry.target.getAttribute("data-year5");
            const rect = entry.target.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();
            const left = rect.left < containerRect.left;

            if (left) {
              const yearLabel = document.querySelector(".timeline_year0");
              const labe_id = "year_" + (key_year+1);
              const little_year = document.getElementById(labe_id);
              const final_year = year5 + year4;
              if (yearLabel) {
                yearLabel.textContent = final_year;
                updateLabelWithAnimation();
              }
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0%",
        threshold: 1,
      }
    );

    const elements = document.querySelectorAll(".times");
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="baslik p-md-5 p-3 pt-5 pb-5">
      <div style={{ height: "180px" }}>
        <label className="timeline_year0"></label>
      </div>
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
            <div
              className="times"
              data-index={index}
              data-year2={item.year2}
              data-year3={item.year1}
              data-year4={events[index + 1]?.year2}
              data-year5={events[index + 1]?.year1}
              style={{
                marginLeft: isPhoneScreen()
                  ? index === 0
                    ? "28%"
                    : "65%"
                  : index === 0
                  ? "10%"
                  : "30%",
              }}
            >
              <div className="year">
                <label
                  key={index}
                  id={`year_${index}`}
                  className="timeline_year"
                >
                  {item.year2}
                </label>
              </div>
              <button id={`card_${index}`} className="timer_button d-flex justify-content-start m-1 m-md-4">
                <div className="flex-column ">
                  <div className="timeline_label p-2 order-md-2 order-1 m-2">
                    <div className="timer_headers d-flex flex-column align-items-start">
                      <label className="timeline_header pt-4">
                        {item.title}
                      </label>
                      <label className="timeline_text pt-4">{item.text}</label>
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
