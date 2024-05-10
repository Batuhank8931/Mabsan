





// DENEMEDİR KULLANILMAMAKTADIR.....................................................





























import React, {  useState } from "react";
import "./css/Makina_Parkuru.css";


const Makina_Parkuru = () => {
  const photoanan =
    "https://s3-alpha-sig.figma.com/img/6637/7c4a/aae7adfd6e7437b49f5ef3db871c9446?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZQXw76Kw1EIJNdjZAbSoDEbKzmBVraO7-vHGztY4VJxtBRrV6q-vzduelmAHeQ9nFlAOF0zETk4dZq0aLHbZQsg52DtTGCVOSdOINtZqLLxnSrwXSyeioxfyBwv~pH8dpkriWo4U~b43Hy0jks9rBH2ZEPwMG9Qy8Gnb~TpoxE0llncq6nTljHJy5YzEeYP0QhPiyJBz7OmGNsnfyjeU-l4d9d5vF9Y4yfhrhkx4kBmGuvhfje8purC2P1bM9sw-1-Rf7tMntkFiP4Vhywquy3a8OYcKn2ZaY5Wef~fQqpp7JG2rQF6B0~N0FhBmkndhldO-XdzSH7xF8gHA3hFINA__";

  const pagerData = [
    {
      id: "1",
      header1: '"El emeğiyle şekillenen her kutu, bir sanat eseridir."',
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "173 cm B+C",
      header3: "Oluklu Mukavva Hattı",
      photoLink: photoanan,
    },
    {
      id: "2",
      header1: "Subject 2 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
        header2: "173 cm B+C",
        header3: "Oluklu Mukavva Hattı",
      photoLink: photoanan,
    },
    {
      id: "3",
      header1: "Subject 3 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
        header2: "173 cm B+C",
        header3: "Oluklu Mukavva Hattı",
      photoLink: photoanan,
    },
    {
      id: "4",
      header1: "Subject 4 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
        header2: "173 cm B+C",
        header3: "Oluklu Mukavva Hattı",
      photoLink: photoanan,
    },
    {
      id: "5",
      header1: "Subject 5 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
        header2: "173 cm B+C",
        header3: "Oluklu Mukavva Hattı",
      photoLink: photoanan,
    },
    {
      id: "6",
      header1: "Subject 6 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
        header2: "173 cm B+C",
        header3: "Oluklu Mukavva Hattı",
      photoLink: photoanan,
    },
    {
      id: "7",
      header1: "Subject 7 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
        header2: "173 cm B+C",
        header3: "Oluklu Mukavva Hattı",
      photoLink: photoanan,
    },
    {
      id: "8",
      header1: "Subject 8 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
        header2: "173 cm B+C",
        header3: "Oluklu Mukavva Hattı",
      photoLink: photoanan,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < pagerData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);

      const cardFronts = document.querySelectorAll(".makina_card_front");
      cardFronts.forEach((card, index) => {
        if (index === nextIndex) {
          card.style.height = window.innerWidth <= 600 ? "350px" : "500px";;
          // Add class to trigger animation
          card.classList.add("height-animation");
        } else {
          const height = window.innerWidth <= 600 ? "450px" : "600px";
          card.style.height = height;
        }
      });

      const label1 = document.querySelector(".makina_label_1");
      const label2 = document.querySelector(".makina_label_2");
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

      const cardFronts = document.querySelectorAll(".makina_card_front");
      cardFronts.forEach((card, index) => {
        if (index === prevIndex) {
          // Conditionally set height based on window width
          const height = window.innerWidth <= 600 ? "350px" : "500px";
          card.style.height = height;
          // Add class to trigger animation
          card.classList.add("height-animation");
        } else {
          const height = window.innerWidth <= 600 ? "450px" : "600px";
          card.style.height = height;
        }
      });

      const label1 = document.querySelector(".makina_label_1");
      const label2 = document.querySelector(".makina_label_2");
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
      className="baslik makina_back p-md-5 p-3 pt-5 pb-5"
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
    >
      {" "}
      <div className="d-flex row">
        <div className="col-12 col-md-5 d-flex row p-0 p-md-4 pb-0  ">
          <div className="d-flex align-items-center justify-content-start">
            <label className="makina_label_1 p-4">{currentItem.header1}</label>
          </div>
          <div>
            <label className="makina_label_2 p-4">{currentItem.detail}</label>
          </div>
          <div className="d-flex align-items-center justify-content-end justify-content-md-start pl-0">
            <div className="d-flex column p-3 pl-0">
              <button
                className="makina_previous_button m-3"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              ></button>
              <button className="makina_next_button m-3" onClick={handleNext}></button>
            </div>
          </div>
        </div>
        <div className="makina_front col-12 col-md-7 p-1 pt-0">
          <div className="makina_makina_slide_card_wrapper">
            <div className="makina_slider_container">
              <div
                className="makina_slide_card"
                style={
                  window.innerWidth >= 600
                    ? {
                        transform: `translateX(${-600 * currentIndex}px)`,
                      }
                    : { transform: `translateX(${-370 * currentIndex}px)` }
                }
              >
                {pagerData.map((pagerItem, index) => (
                  <div
                    className={`makina_card_front p-1 p-md-1 d-flex align-items-start flex-column bd-highlight 
                    }`}
                    key={index}
                    style={
                      window.innerWidth >= 600
                        ? {
                            height: index === 0 ? "500px" : "600px",
                            width: "520px",
                            marginTop:"20px"
                          }
                        : {
                            height: index === 0 ? "350px" : "450px",
                            width: "350px",
                          }
                    }
                  >
                    <div className="title_window flex-row m-4 ">
                      <label className="makina_card_header_2">
                        {pagerItem.header2}
                      </label>
                      <label className="makina_card_header_2">
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

export default Makina_Parkuru;
