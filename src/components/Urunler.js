import React, { useState, useEffect } from "react";
import "./css/Urunler.css";


const Urunler = ({ UrunData }) => {
  let itemsPerPage;

  const isPhoneScreen = () => {
    return window.innerWidth <= 600; // Adjust the threshold as needed
  };

  if (isPhoneScreen()) {
    itemsPerPage = 2;
  } else {
    itemsPerPage = 6;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(UrunData.length / itemsPerPage);

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handlePageClick = (pageIndex) => {
    setCurrentIndex(pageIndex);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let numAdjacentPages;

    if (window.innerWidth >= 600) {
      numAdjacentPages = 1;
    } else {
      numAdjacentPages = 1;
    }
    const numPagesToShow = 2 * numAdjacentPages + 1;

    // Calculate the range of page numbers to display
    let startPage = Math.max(0, currentIndex - numAdjacentPages);
    let endPage = Math.min(totalPages - 1, currentIndex + numAdjacentPages);

    // Adjust start and end page numbers if they are at the beginning or end
    if (endPage - startPage < numPagesToShow - 1) {
      if (currentIndex < numAdjacentPages) {
        endPage = Math.min(numPagesToShow - 1, totalPages - 1);
      } else {
        startPage = Math.max(0, totalPages - numPagesToShow);
      }
    }



    // Add page number buttons
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={
            currentIndex === i
              ? "active pagination_button"
              : " pagination_button"
          }
          onClick={() => handlePageClick(i)}
        >
          {i + 1}
        </button>
      );
    }



    return pageNumbers;
  };

  const [imageSrcs, setImageSrcs] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const srcs = [];
      for (const item of UrunData) {
        try {
          const imageModule = await import(
            `../assets/Urunler/${item.image}.png`
          );
          srcs.push(imageModule.default);
        } catch (error) {
          console.error("Error importing image:", error);
          srcs.push(null);
        }
      }
      setImageSrcs(srcs);
    };

    fetchImages();
  }, []);

  const getBlogItems = (start, end) => {
    return (
      <div className="row" style={{ width: "100%" }}>
        {UrunData.slice(start, end).map((item, index) => (
          <div key={index} className="col-md-4 col-12 pb-4">
            <div className="urun_kart d-flex align-items-center flex-column m-md-0 mb-0 mt-4">
              <div className="image_box">
                {imageSrcs[index] && (
                  <img src={imageSrcs[index]} alt={imageSrcs[index]} className="kutu_image" />
                )}
              </div>
              <div className="d-flex">
                <label className="urun_title">{item.file}</label>
              </div>
              <div className="d-flex white_line p-1 align-items-center"></div>
              <div className="d-flex pl-5 pr-5">
                <label className="urun_text">{item.text}</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="baslik p-md-5 p-3 pt-mb-5 pb-md-5 pb-4 pt-0 ">
      <div className="d-flex flex-column align-items-center">
        <div className="urun-container p-0 m-0">
          <div
            className="urun_card"
            style={
              window.innerWidth >= 600
                ? {
                    transform: `translateX(${-1110 * currentIndex}px)`,
                  }
                : { transform: `translateX(${-385 * currentIndex}px)` }
            }
          >
            {UrunData.map(
              (item, index) =>
                index % itemsPerPage === 0 && ( // Render only for every fourth item
                  <div
                    key={index}
                    className="urun_front d-flex align-items-start flex-column bd-highlight"
                  >
                    {getBlogItems(index, index + itemsPerPage)}
                  </div>
                )
            )}
          </div>
        </div>

        <div className="col-12 d-flex mt-3 justify-content-center">
          <div>
            <button
              className="urun_previous_button"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            ></button>
          </div>

          <div className="d-flex justify-content-evenly urun_button_pack">
            {renderPageNumbers()}
          </div>
          <div>
            <button
              className="urun_next_button"
              onClick={handleNext}
              disabled={currentIndex === totalPages - 1}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Urunler;
