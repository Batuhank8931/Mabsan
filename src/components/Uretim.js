import React, { useRef, useState, useEffect } from "react";
import "./css/Uretim.css";
import arka from "../assets/arka.svg";
import benek from "../assets/benek.svg";

const Uretim = ({UretimData}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < UretimData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
  
      // Update height of card_front with index equal to currentIndex + 1
      const cardFronts = document.querySelectorAll(".card_front");
      cardFronts.forEach((card, index) => {
        if (index === nextIndex) {
          card.style.height = window.innerWidth <= 600 ? "380px" : "550px";
          // Add class to trigger animation
          card.classList.add("height-animation");
        } else {
          const height = window.innerWidth <= 600 ? "500px" : "600px";
          card.style.height = height;
        }
      });
  
      const label1 = document.querySelector(".pager_label_1");
      const label2 = document.querySelector(".pager_label_2");
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
  
      // Update height of card_front with index equal to currentIndex - 1
      const cardFronts = document.querySelectorAll(".card_front");
      cardFronts.forEach((card, index) => {
        if (index === prevIndex) {
          // Conditionally set height based on window width
          const height = window.innerWidth <= 600 ? "380px" : "550px";
          card.style.height = height;
          // Add class to trigger animation
          card.classList.add("height-animation");
        } else {
          const height = window.innerWidth <= 600 ? "500px" : "600px";
          card.style.height = height;
        }
      });
  
      const label1 = document.querySelector(".pager_label_1");
      const label2 = document.querySelector(".pager_label_2");
      label1.classList.add("fade-out");
      label2.classList.add("fade-out");
      setTimeout(() => {
        label1.classList.remove("fade-out");
        label2.classList.remove("fade-out");
      }, 300);
    }
  };
  
  

  const currentItem = UretimData[currentIndex];

  return (
    <div
      className="baslik pager_back p-md-5 p-3 pt-5 pb-5"
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${arka})`,
        backgroundSize: "95% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
    >
      {" "}
      <div
        className="centered_image_uretim"
        style={{
          backgroundImage: `url(${benek})`,
        }}
      ></div>
      <div className="d-flex row">
        <div className="header_card col-12 col-md-6 d-flex row p-0 p-md-4 pb-0  ">
          <div className="d-flex align-items-center justify-content-start">
            <label className="pager_label_1 p-4">{currentItem.header1} </label>
          </div>
          <div>
            <label className="pager_label_2 p-4">{currentItem.detail}</label>
          </div>
          <div className="d-flex align-items-center justify-content-end justify-content-md-start pl-0">
            <div className="d-flex column p-3 pl-0">
              <button
                className="previous_button m-3"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              ></button>
              <button className="next_button m-3" onClick={handleNext}></button>
            </div>
          </div>
        </div>
        <div className="pager_front col-12 col-md-6 p-4 pt-0">
          <div className="slide_card_wrapper">
            <div className="slider-container">
              <div
                className="slide_card"
                style={
                  window.innerWidth >= 600
                    ? {
                        transform: `translateX(${-450 * currentIndex}px)`,
                      }
                    : { transform: `translateX(${-300 * currentIndex}px)` }
                }
              >
                {UretimData.map((pagerItem, index) => (
                  <div
                    className={`card_front p-1 p-md-0 pt-0 d-flex align-items-start flex-column bd-highlight 
                    }`}
                    key={index}
                    style={window.innerWidth >= 600
                      ?{ height: index === 0 ? "550px" : "600px" }
                      :
                      { height: index === 0 ? "380px" : "500px" }
                    }
                  >
                    <div className="title_window d-flex m-2 mb-auto bd-highlight pt-md-4">
                      <label className="pager_card_header_1 pr-4 pl-4 pt-2">
                        0{pagerItem.id}
                      </label>
                      <label className="pager_card_header_2 pr-2 pl-4 ml-3">
                        {pagerItem.header2}
                      </label>
                    </div>
                    <div className="d-flex justify-content-center align-items-center bd-highlight picture_window">
                      <img
                        src={pagerItem.photoLink}
                        alt="bayrak"
                        className="image_container pb-5"
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

export default Uretim;
