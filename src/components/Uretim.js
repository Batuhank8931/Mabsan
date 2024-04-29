import React, { useRef, useState, useEffect } from "react";
import "./css/Uretim.css";
import arka from "../assets/arka.svg";
import benek from "../assets/benek.svg";

const Uretim = () => {
  const photoanan =
    "https://s3-alpha-sig.figma.com/img/710a/d68c/9f241d0188983a0895548df77be50617?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lClo58bmk-wMlhMQX~RM2DF8oq451tgagc8Evoi0X~79Bn9JyiSo94OD-1aKPCFNlQcW9UQPRq61MKzIO8~QSYc83KhniLobHC2mRo3LzfCJr4jAakAQ1V~kX8tzxVxEeIuI4NzhgABF9vlvLgP3JdpwneaANr7vNcmJ9s97woRbYmuF98xyqgOuo694BnUv6RVkaHvtsQE~Rua8E7yBetjQt3YeewA8apLx0x8hz2rClph5DPFmel7mvERWdpWIM6CbQ84MF2GIi5MkAycooUGHmidsJk0c95NkpgQjaIQkiLZF9gQjNbgsQ0btg3iBNQTAq4D3vmR33qQ1bJ39~g__";

  const pagerData = [
    {
      id: "1",
      header1: '"El emeğiyle şekillenen her kutu, bir sanat eseridir."',
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject1",
      photoLink: photoanan,
    },
    {
      id: "2",
      header1: "Subject 2 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject2",
      photoLink: photoanan,
    },
    {
      id: "3",
      header1: "Subject 3 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject3",
      photoLink: photoanan,
    },
    {
      id: "4",
      header1: "Subject 4 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject4",
      photoLink: photoanan,
    },
    {
      id: "5",
      header1: "Subject 5 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject5",
      photoLink: photoanan,
    },
    {
      id: "6",
      header1: "Subject 6 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject6",
      photoLink: photoanan,
    },
    {
      id: "7",
      header1: "Subject 7 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject7",
      photoLink: photoanan,
    },
    {
      id: "8",
      header1: "Subject 8 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject8",
      photoLink: photoanan,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < pagerData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
  
      // Update height of card_front with index equal to currentIndex + 1
      const cardFronts = document.querySelectorAll(".card_front");
      cardFronts.forEach((card, index) => {
        if (index === nextIndex) {
          card.style.height = window.innerWidth <= 600 ? "380px" : "450px";
          // Add class to trigger animation
          card.classList.add("height-animation");
        } else {
          const height = window.innerWidth <= 600 ? "500px" : "550px";
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
          const height = window.innerWidth <= 600 ? "380px" : "450px";
          card.style.height = height;
          // Add class to trigger animation
          card.classList.add("height-animation");
        } else {
          const height = window.innerWidth <= 600 ? "500px" : "550px";
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
  
  

  const currentItem = pagerData[currentIndex];

  return (
    <div
      className="baslik pager_back p-md-5 p-3 pt-5 pb-5"
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${arka})`,
        backgroundSize: "95% auto",
        backgroundPosition: "center",
      }}
    >
      {" "}
      <div
        className="centered_image"
        style={{
          backgroundImage: `url(${benek})`,
        }}
      ></div>
      <div className="d-flex row">
        <div className="header_card col-12 col-md-6 d-flex row p-0 p-md-4 pb-0  ">
          <div className="d-flex align-items-center justify-content-start">
            <label className="pager_label_1 p-4">{currentItem.header1}</label>
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
                {pagerData.map((pagerItem, index) => (
                  <div
                    className={`card_front p-3 p-md-5 pt-0 d-flex align-items-start flex-column bd-highlight 
                    }`}
                    key={index}
                    style={window.innerWidth >= 600
                      ?{ height: index === 0 ? "450px" : "550px" }
                      :
                      { height: index === 0 ? "380px" : "500px" }
                    }
                  >
                    <div className="title_window d-flex m-4 mb-auto bd-highlight">
                      <label className="pager_card_header_1 pr-4">
                        {pagerItem.id}
                      </label>
                      <label className="pager_card_header_2">
                        {pagerItem.header2}
                      </label>
                    </div>
                    <div className="d-flex justify-content-center align-items-center bd-highlight picture_window">
                      <img
                        src={pagerItem.photoLink}
                        alt="bayrak"
                        className="image_container"
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
