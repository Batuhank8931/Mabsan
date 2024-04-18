import React, { useRef, useState } from "react";
import "./Carousel.css";
import polygon from "../assets/polygon.svg";
import rectangle from "../assets/Rectangle.svg";
import rectangleYatik from "../assets/Rectangle_yatik.svg";

const Carousel = () => {
  const carouselItems = [
    "E-Ticaret",
    "Endüstriyel",
    "Elektrik- Elektronik",
    "Perakende",
    "Kozmetik",
    "İlaç",
    "Otomotiv",
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
    <div className="baslik p-md-5 p-3 pt-5 pb-5 ">
      <div className="redline">
        <div
          className="carousel bar "
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
          <div className="container">
            {carouselItems.map((item, index) => (
              <div className="blocks" key={index}>
                <button
                  className="sektor_button"
                  style={{
                    backgroundImage: `url(${
                      window.innerWidth <= 600 ? rectangleYatik : rectangle
                    })`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="button_header d-flex align-items-start flex-md-column">
                    <div
                      className="order-md-1 order-2 mt-2"
                      style={{
                        width: "100%",
                      }}
                    >
                      <div className="d-flex number_label">
                        <img className="w-8" src={polygon} />
                        <label
                          className="sektor_label ml-2"
                          style={{
                            alignSelf: "flex-start",
                            textAlign: "left",
                            width: "35%",
                          }}
                        >
                          {index + 1}
                        </label>
                      </div>
                      <div
                        className="sector_card_2"
                        // BİLGİSAYARDA GÖZÜKEN HOVER CARDI
                      >
                        {" "}
                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: "70%",
                          }}
                        >
                          <img
                            src="https://s3-alpha-sig.figma.com/img/9480/236d/c33af55d162a4580ed944cd3a9fb38a8?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RUv7OOYu4aV9~q6oQuHDHFykm73wkgLGKT3sNKTMPYovLI08uDtQ~4YQyLFT1vDaqfyMLvrwe6-wE-I2iPUqs7msdR-~Q4Kv8xOrNsSQEJuEVXROD7FjEkxUzugpvGq0zctC4FuuDyq8T0qAwyT6h8aMldJKiNivuhzSWAIsnEIpi5b8wNuCZaYmUfU-n-UZnGRwsJ9EgnYCcwnInN-pQbcj0MqZ-aiVYyovhhVVs5C7zOPL8qDs9REgD1wAzKMirL4-Fywsnd8MEz38gE3F2zI98GWb0qvq9XB84pD1w2mcJJnDAdij4QlDF8H1gkmVPwvNPFQH5WZGNhLzFLVr0Q__"
                            alt="Mabsan Logo"
                          />
                        </div>
                      </div>{" "}
                    </div>
                    <div
                      className="mb-auto order-md-1 order-2 d-flex row "
                      style={{
                        width: "100%",
                      }}
                    >
                      {" "}
                      <div className="d-flex column align-items-center justify-content-center m-0 p-0"></div>
                    </div>

                    <div className="sektor_label p-2 order-md-2 order-1 m-2">
                      <div className=" card_headers vertical-text d-flex align-items-start ">
                        <div className="">
                          <h1 className="sektor_label mr-3">AA</h1>
                        </div>
                        <div>
                          <h1 className="sektor_label ">{item}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="sector_card_1" // TELEFONDA GÖZÜKEN HOVER CARDI
                  >
                    <img
                      src="https://s3-alpha-sig.figma.com/img/9480/236d/c33af55d162a4580ed944cd3a9fb38a8?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RUv7OOYu4aV9~q6oQuHDHFykm73wkgLGKT3sNKTMPYovLI08uDtQ~4YQyLFT1vDaqfyMLvrwe6-wE-I2iPUqs7msdR-~Q4Kv8xOrNsSQEJuEVXROD7FjEkxUzugpvGq0zctC4FuuDyq8T0qAwyT6h8aMldJKiNivuhzSWAIsnEIpi5b8wNuCZaYmUfU-n-UZnGRwsJ9EgnYCcwnInN-pQbcj0MqZ-aiVYyovhhVVs5C7zOPL8qDs9REgD1wAzKMirL4-Fywsnd8MEz38gE3F2zI98GWb0qvq9XB84pD1w2mcJJnDAdij4QlDF8H1gkmVPwvNPFQH5WZGNhLzFLVr0Q__"
                      alt="Mabsan Logo"
                      className="picture_1"
                    />
                  </div>{" "}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
