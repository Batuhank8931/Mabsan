import React, { useState, useEffect } from "react";
import "./css/Yolculugumuz.css";

const Yolculugumuz = ({ YolculugumuzData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateYValue, setTranslateYValue] = useState(0);
  const [first_year, setFirstYear] = useState(true);

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
    if (currentIndex < YolculugumuzData.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const isPhoneScreen = () => {
    return window.innerWidth <= 600; // Adjust the threshold as needed
  };

  const YearClick = () => {
    // Check if it's a phone screen
    if (isPhoneScreen()) {
      // Checking if first_year is true
      if (first_year) {
        const timeline_year0Label = document.querySelector(".timeline_year0");
        const timeline_yearLabels = document.querySelectorAll(".timeline_year");

        // Apply styles to timeline_year0Label
        // timeline_year0Label.style.fontSize = "125px";
        // timeline_year0Label.style.transform = "translateY(0%) translateX(0%)";

        // Loop through each timeline_year element and apply the styles
        timeline_yearLabels.forEach((label) => {
          label.style.fontSize = "120px";
          label.style.transform = "translateY(-240px) translateX(165px)";
          label.style.background =
            "linear-gradient(317.85deg, #FA0000 -41.59%, rgba(250, 0, 0, 0) 143.46%)";
          label.style.webkitBackgroundClip = "text";
          label.style.backgroundClip = "text";
          label.style.color = "transparent";
          label.style.zIndex = "3";
        });

        // Set first_year to false at the end
        setFirstYear(false);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const screenHeight = window.innerHeight; // Use window.innerHeight for vertical carousel
      setTranslateYValue(screenHeight < 600 ? -100 : -100); // Adjust translate value for vertical carousel
    };

    handleResize(); // Initial call to set initial translateY value

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run effect only once after component mount

  return (
    <div className="baslik p-md-5 p-3 pt-5 pb-0 frame">
      <div className="pt-5 pt-md-0">
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
            {YolculugumuzData.map((pagerItem, index) => (
              <div
                key={index}
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
                <div className="timer_button d-flex justify-content-start p-5">
                  <div
                    className="d-flex align-items-center flex-column bd-highlight"
                    style={{ height: "100%", width: "100%" }}
                    onClick={YearClick}
                  >
                    <button
                      className="p-2 bd-highlight arrow"
                      style={{ width: "100%" }}
                      onClick={() => {
                        handlePrevious();
                        let nextIndex = index - 1;
                        let nextsubIndex = index + 1;
                        if (nextsubIndex < YolculugumuzData.length) {
                          SubTitleChange(
                            YolculugumuzData[nextsubIndex].year2,
                            YolculugumuzData[nextsubIndex].title,
                            YolculugumuzData[nextsubIndex].text
                          );
                        }
                        if (
                          nextIndex >= 0 &&
                          nextIndex < YolculugumuzData.length
                        ) {
                          TitleChange(YolculugumuzData[nextIndex].year1); // Pass the year2 value of the next page item to deneme function
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
                        if (nextsubIndex < YolculugumuzData.length) {
                          SubTitleChange(
                            YolculugumuzData[nextsubIndex].year2,
                            YolculugumuzData[nextsubIndex].title,
                            YolculugumuzData[nextsubIndex].text
                          );
                        }
                        if (
                          nextIndex >= 0 &&
                          nextIndex < YolculugumuzData.length
                        ) {
                          TitleChange(YolculugumuzData[nextIndex].year1); // Pass the year2 value of the next page item to deneme function
                        }
                      }}
                    >
                      ↓
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="times_side col-12 col-md-6 p-5 d-flex justify-content-center">
            <div className="year">
              <label className="timeline_year" id="Sub_1">
                {YolculugumuzData[1].year2}
              </label>
            </div>
            <button className="timer_button d-flex justify-content-start ml-5 p-5">
              <div className="flex-column">
                <div
                  className="timeline_label p-2 order-md-2 order-1 m-2"
                  style={{ width: "100%" }}
                >
                  <div className="timer_headers d-flex flex-column align-items-start">
                    <label className="timeline_header pt-4" id="Sub_2">
                      {YolculugumuzData[1].title}
                    </label>
                    <label className="timeline_text pt-4" id="Sub_3">
                      {YolculugumuzData[1].text}
                    </label>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yolculugumuz;
