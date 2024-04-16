import React, { useState, useEffect } from "react";
import "./Timeline.css";

const events = [
  { year: 1980, title: "Event 1" },
  { year: 1990, title: "Event 2" },
  { year: 2000, title: "Event 3" },
  { year: 2010, title: "Event 4" },
  { year: 2020, title: "Event 5" },
  { year: 2030, title: "Event 6" },
  { year: 2040, title: "Event 7" },
  { year: 2050, title: "Event 8" },
  { year: 2060, title: "Event 9" },
  { year: 2070, title: "Event 10" },
];

const time_line = (events, maxSlice) => {
  const numRows = Math.ceil(events.length / maxSlice); // Calculate number of rows
  const slicedEvents = Array.from({ length: numRows }, (_, index) =>
    events.slice(index * maxSlice, (index + 1) * maxSlice)
  );

  return (
    <div className="baslik p-md-5 p-3 pt-5 pb-5">
      <div className="zigzag-container">
        {slicedEvents.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            <div style={{ display: "flex" }}>
              {" "}
              {/* Flex container */}
              {rowIndex % 2 === 0 ? (
                <>
                  <div className="empty-item-2"></div>
                  {row.map((event, index) => (
                    <div className="item" key={index}>
                      <div>{event.year}</div>
                      <div>{event.title}</div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {row.reverse().map((event, index) => (
                    <div className="item_reverse" key={index}>
                      <div>{event.year}</div>
                      <div>{event.title}</div>
                    </div>
                  ))}
                  <div className="empty-item-1"></div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Deneme = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (screenWidth >= 1200) {
    return time_line(events, 4);
  } else if (screenWidth >= 1000) {
    return time_line(events, 3);
  } else if (screenWidth >= 700) {
    return time_line(events, 2);
  } else {
    return time_line(events, 1);
  }
};

export default Deneme;
