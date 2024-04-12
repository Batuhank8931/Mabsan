import React, { useRef, useState, useEffect } from "react";
import "./Carousel.css";
import polygon from "../assets/polygon.svg";
import rectangle from "../assets/Rectangle.svg";
import rectangleYatik from "../assets/Rectangle_yatik.svg";

const Carousel = () => {
  const carouselItems = ["E-Ticaret", "Endüstriyel", "Elektrik-Elektronik", "Perakende", "Kozmetik", "İlaç", "Otomotiv"];

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
    <div className="baslik p-md-5 p-3 pt-5 pb-5">
      <div className="d-flex align-items-left pb-5 ">
        <div className="col-4 col-md-2 d-flex align-items-center justify-content-start p-2">
          <label> Sektörler </label>
        </div>
        <div className="line-container col-7 col-md-9">
          <div className="line"></div>
        </div>
        <div className="line-container col-1 align-items-left">
          <div>
            <img src={polygon} />
          </div>
        </div>
      </div>
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
                  <div   
                    className="sector_card_1"  // TELEFONDA GÖZÜKEN HOVER CARDI
                    style={{
                      width: "100%",
                      height: "350px",
                    }}
                  >
                    {" "}
                    <div
                      className="mb-auto p-2 order-md-1 order-2 d-flex align-items-end justify-content-end"
                      style={{ width: "100%" }}
                    >
                      {" "}
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-end p-2"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <img
                        src="https://s3-alpha-sig.figma.com/img/9480/236d/c33af55d162a4580ed944cd3a9fb38a8?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RUv7OOYu4aV9~q6oQuHDHFykm73wkgLGKT3sNKTMPYovLI08uDtQ~4YQyLFT1vDaqfyMLvrwe6-wE-I2iPUqs7msdR-~Q4Kv8xOrNsSQEJuEVXROD7FjEkxUzugpvGq0zctC4FuuDyq8T0qAwyT6h8aMldJKiNivuhzSWAIsnEIpi5b8wNuCZaYmUfU-n-UZnGRwsJ9EgnYCcwnInN-pQbcj0MqZ-aiVYyovhhVVs5C7zOPL8qDs9REgD1wAzKMirL4-Fywsnd8MEz38gE3F2zI98GWb0qvq9XB84pD1w2mcJJnDAdij4QlDF8H1gkmVPwvNPFQH5WZGNhLzFLVr0Q__"
                        alt="Mabsan Logo"
                        className="w-75"
                      />
                    </div>
                  </div>{" "}
                  <div
                    className="d-flex align-items-start flex-md-column"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <div
                      className="mb-auto p-2 order-md-1 order-2 d-flex align-items-end justify-content-end"
                      style={{ width: "100%" }}
                    >
                      {" "}
                      <div className="d-flex column align-items-center justify-content-center">
                        <img style={{ width: "25px" }} src={polygon} />
                        <label
                          className="sektor_label"
                          style={{
                            alignSelf: "flex-start",
                            textAlign: "left",
                            width: "30px",
                          }}
                        >
                          {index + 1}
                        </label>
                      </div>
                    </div>

                    <div className="sektor_label p-2 order-md-2 order-1 m-2">
                      <div className=" vertical-text d-flex flex-row align-items-start " >
                        <label className="sektor_label col-2">AA</label>
                        <label className="sektor_label col-10"style={{width:"400px"}} >
                          {item}
                        </label>
                      </div>
                      <div
                        className="sector_card_2 p-5"  // BİLGİSAYARDA GÖZÜKEN HOVER CARDI
                        style={{
                          width: "100%",
                          height: "400px",

                        }}
                      >
                        {" "}
                        <div
                          className="d-flex align-items-center justify-content-end p-2"
                          style={{ height: "100%", width: "100%" }}
                        >
                          <img
                            src="https://s3-alpha-sig.figma.com/img/9480/236d/c33af55d162a4580ed944cd3a9fb38a8?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RUv7OOYu4aV9~q6oQuHDHFykm73wkgLGKT3sNKTMPYovLI08uDtQ~4YQyLFT1vDaqfyMLvrwe6-wE-I2iPUqs7msdR-~Q4Kv8xOrNsSQEJuEVXROD7FjEkxUzugpvGq0zctC4FuuDyq8T0qAwyT6h8aMldJKiNivuhzSWAIsnEIpi5b8wNuCZaYmUfU-n-UZnGRwsJ9EgnYCcwnInN-pQbcj0MqZ-aiVYyovhhVVs5C7zOPL8qDs9REgD1wAzKMirL4-Fywsnd8MEz38gE3F2zI98GWb0qvq9XB84pD1w2mcJJnDAdij4QlDF8H1gkmVPwvNPFQH5WZGNhLzFLVr0Q__"
                            alt="Mabsan Logo"
                            className="w-75"
                          />
                        </div>
                      </div>{" "}
                    </div>
                  </div>
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
