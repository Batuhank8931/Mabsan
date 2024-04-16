// Timeline.js
import React from "react";
import "./Timeline.css"; // Import your CSS file for styling

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
    { year: 2070, title: "Event 10" }
  ];
  

const Timeline = () => {
  return (
    <div className="baslik p-md-5 p-3 pt-5 pb-5">
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="event">
            <div className="event-year">{event.year}</div>
            <div className="event-title">{event.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
