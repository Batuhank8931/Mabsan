import React, { useState } from "react";
import "./css/Big_Slider.css";

const Mukavva_Cinsleri = ({ pagerData, background, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < pagerData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);

      const cardFronts = document.querySelectorAll("." + name + "_card_front");
      cardFronts.forEach((card, index) => {
        if (index === nextIndex) {
          card.style.height = window.innerWidth <= 600 ? "350px" : "550px";
          // Add class to trigger animation
          card.classList.add("height-animation");
        } else {
          const height = window.innerWidth <= 600 ? "450px" : "600px";
          card.style.height = height;
        }
      });

      const label1 = document.querySelector("." + name + "_label_1");
      const label2 = document.querySelector("." + name + "_label_2");
      label1.classList.add("fade-out");
      label2.classList.add("fade-out");
      setTimeout(() => {
        label1.classList.remove("fade-out");
        label2.classList.remove("fade-out");
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);

      const cardFronts = document.querySelectorAll("." + name + "_card_front");
      cardFronts.forEach((card, index) => {
        if (index === prevIndex) {
          // Conditionally set height based on window width
          const height = window.innerWidth <= 600 ? "350px" : "550px";
          card.style.height = height;
          // Add class to trigger animation
          card.classList.add("height-animation");
        } else {
          const height = window.innerWidth <= 600 ? "450px" : "600px";
          card.style.height = height;
        }
      });

      const label1 = document.querySelector("." + name + "_label_1");
      const label2 = document.querySelector("." + name + "_label_2");
      label1.classList.add("fade-out");
      label2.classList.add("fade-out");
      setTimeout(() => {
        label1.classList.remove("fade-out");
        label2.classList.remove("fade-out");
      }, 300);
    }
  };

  const currentItem = pagerData[currentIndex];

  return (
    <div
      className="baslik p-md-5 p-3 pt-5 pb-5"
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
    >
      {" "}
      <div className="d-flex row">
        <div className="col-12 col-md-4 d-flex row p-0 p-md-4 pb-0 mt-5 ">
          <div className="d-flex align-items-center justify-content-start">
            <label className={`big_slider_label_1 p-4 ${name}_label_1 pt-0 pb-0`}>
              {currentItem.header1}
            </label>
          </div>
          <div className="text_frame">
            <label className={`big_slider_label_2 p-4 ${name}_label_2 pt-4 pb-0`}>
              {currentItem.detail}
            </label>
          </div>
          <div className="d-flex align-items-center justify-content-end justify-content-md-start pl-0">
            <div className="d-flex column p-3 pl-0 pt-3 pb-3 pt-md-0 pb-md-0">
              <button
                className="big_slider_previous_button m-3"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              ></button>
              <button
                className="big_slider_next_button m-3"
                onClick={handleNext}
              ></button>
            </div>
          </div>
        </div>
        <div className="big_slider_front col-12 col-md-8 p-1 pt-0">
          <div className="big_slider_slide_card_wrapper">
            <div className="big_slider_slider_container">
              <div
                className="big_slider_slide_card"
                style={
                  window.innerWidth >= 600
                    ? {
                        transform: `translateX(${-700 * currentIndex}px)`,
                      }
                    : { transform: `translateX(${-370 * currentIndex}px)` }
                }
              >
                {pagerData.map((pagerItem, index) => (
                  <div
                    className={`big_slider_card_front p-1 p-md-1 d-flex align-items-start flex-column bd-highlight ${name}_card_front
                    }`}
                    key={index}
                    style={
                      window.innerWidth >= 600
                        ? {
                            height: index === 0 ? "550px" : "600px",
                            width: "650px",
                            marginTop: "20px",
                          }
                        : {
                            height: index === 0 ? "350px" : "450px",
                            width: "350px",
                          }
                    }
                  >
                    <div className="title_window flex-row m-4 pl-5">
                      <label className="big_slider_card_header_2">
                        {pagerItem.header2}
                      </label>
                      <label className="big_slider_card_header_2">
                        {pagerItem.header3}
                      </label>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-5">
                      <img
                        src={pagerItem.photoLink}
                        alt="bayrak"
                        className="image_container_makina"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mukavva_Cinsleri;
