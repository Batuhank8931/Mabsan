import React, { useState, useEffect } from "react";
import "./css/Timeline.css";

function isPhoneScreen() {
  return window.matchMedia("(max-width: 768px)").matches; // Adjust the max-width as needed
}

const Timeline_new = () => {
  const events = [
    {
      year1: "19",
      year2: "82",
      title: "Event 1",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "19",
      year2: "88",
      title: "Event 2",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "00",
      title: "Event 3",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "01",
      title: "Event 4",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "02",
      title: "Event 5",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "10",
      title: "Event 6",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "12",
      title: "Event 7",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "15",
      title: "Event 8",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "18",
      title: "Event 9",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "23",
      title: "Event 10",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateYValue, setTranslateYValue] = useState(0);

  const TitleChange = (yazi) => {
    const yearLabel = document.querySelector(".timeline_year0");
    if (yearLabel.textContent !== yazi) {
      yearLabel.classList.add("fade-out"); // Add the fade-out class
      setTimeout(() => {
        yearLabel.textContent = yazi; // Update the text content after the fade-out animation completes
        yearLabel.classList.remove("fade-out"); // Remove the fade-out class
        yearLabel.classList.add("fade-in"); // Add the fade-in class
        setTimeout(() => {
          yearLabel.classList.remove("fade-in"); // Remove the fade-in class after the fade-in animation completes
        }, 500);
      }, 500);
    }
  };

  const SubTitleChange = (yazi1, yazi2, yazi3) => {
    const sub1 = document.querySelector("#Sub_1");
    const sub2 = document.querySelector("#Sub_2");
    const sub3 = document.querySelector("#Sub_3");
    sub1.textContent = yazi1;
    sub2.textContent = yazi2;
    sub3.textContent = yazi3;
  };

  const handleNext = () => {
    if (currentIndex < events.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const screenHeight = window.innerHeight; // Use window.innerHeight for vertical carousel
      setTranslateYValue(screenHeight < 600 ? -87 : -87); // Adjust translate value for vertical carousel
    };

    handleResize(); // Initial call to set initial translateY value

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run effect only once after component mount

  return (
    <div
      className="baslik deneme p-md-5 p-3 pt-5 pb-0"
      style={{ height: "670px" }}
    >
      <div className="year_header">
        <label className="timeline_year0">19</label>
      </div>
      <div className="d-flex row card_window">
        <div
          className="time_slide_card p-0 m-0"
          style={{
            transform: `translateY(${translateYValue * currentIndex}%)`,
          }}
        >
          {events.map((pagerItem, index) => (
            <div
              className="times col-12 col-md-6 p-md-5 pr-0 d-flex justify-content-center"
              onMouseEnter={() => {
                const timeSlideCard = document.querySelector(
                  ".time_slide_card"
                );
                timeSlideCard.classList.add("full-width");
              }}
              onMouseLeave={() => {
                const timeSlideCard = document.querySelector(
                  ".time_slide_card"
                );
                timeSlideCard.classList.remove("full-width");
              }}
            >
              <div className="year">
                <label className="timeline_year">{pagerItem.year2}</label>
              </div>
              <button className="timer_button d-flex justify-content-start p-5">
                <div
                  class="d-flex align-items-center flex-column bd-highlight"
                  style={{ height: "100%", width: "100%" }}
                >
                  <button
                    className="p-2 bd-highlight arrow"
                    style={{ width: "100%" }}
                    onClick={() => {
                      handlePrevious();
                      let nextIndex = index - 1;
                      let nextsubIndex = index + 1;
                      if (nextsubIndex < events.length) {
                        SubTitleChange(
                          events[nextsubIndex].year2,
                          events[nextsubIndex].title,
                          events[nextsubIndex].text
                        );
                      }
                      if (nextIndex >= 0 && nextIndex < events.length) {
                        TitleChange(events[nextIndex].year1); // Pass the year2 value of the next page item to deneme function
                      }
                    }}
                    disabled={currentIndex === 0}
                  >
                    ↑
                  </button>
                  <div className="p-2 bd-highlight" style={{ width: "100%" }}>
                    <div className="timer_headers d-flex flex-column align-items-start">
                      <label className="timeline_header pt-4">
                        {pagerItem.title}
                      </label>
                      <label className="timeline_text pt-4">
                        {pagerItem.text}
                      </label>
                    </div>
                  </div>
                  <button
                    className="mt-auto p-2 bd-highlight arrow"
                    style={{ width: "100%" }}
                    onClick={() => {
                      handleNext();
                      let nextIndex = index + 1;
                      let nextsubIndex = index + 2;
                      if (nextsubIndex < events.length) {
                        SubTitleChange(
                          events[nextsubIndex].year2,
                          events[nextsubIndex].title,
                          events[nextsubIndex].text
                        );
                      }
                      if (nextIndex >= 0 && nextIndex < events.length) {
                        TitleChange(events[nextIndex].year1); // Pass the year2 value of the next page item to deneme function
                      }
                    }}
                  >
                    ↓
                  </button>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="times_side col-12 col-md-6 p-5 d-flex justify-content-center">
          <div className="year">
            <label className="timeline_year" id="Sub_1">
              {events[1].year2}
            </label>
          </div>
          <button className="timer_button d-flex justify-content-start ml-5 p-5">
            <div className="flex-column">
              <div className="timeline_label p-2 order-md-2 order-1 m-2"  style={{ width: "100%" }}>
                <div className="timer_headers d-flex flex-column align-items-start">
                  <label className="timeline_header pt-4" id="Sub_2">
                    {events[1].title}
                  </label>
                  <label className="timeline_text pt-4" id="Sub_3">
                    {events[1].text}
                  </label>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timeline_new;
