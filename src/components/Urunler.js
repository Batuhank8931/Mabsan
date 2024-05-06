import React, { useState, useEffect } from "react";
import "./css/Urunler.css";
import kutu_1 from "../assets/Urunler/kutu_1.png";

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
      numAdjacentPages = 2;
    } else {
      numAdjacentPages = 1;
    }
    const numPagesToShow = 1 * numAdjacentPages + 1;

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

    // Add first page button
    if (startPage > 0) {
      pageNumbers.push(
        <button
          className="urun_pagination_button"
          key={0}
          onClick={() => handlePageClick(0)}
        >
          1
        </button>
      );
      if (startPage > 1) {
        pageNumbers.push(<span key={"ellipsis-start"}>...</span>);
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

    // Add last page button
    if (endPage < totalPages - 1) {
      if (endPage < totalPages - 2) {
        pageNumbers.push(<span key={"ellipsis-end"}>...</span>);
      }
      pageNumbers.push(
        <button
          className="pagination_button"
          key={totalPages - 1}
          onClick={() => handlePageClick(totalPages - 1)}
        >
          {totalPages}
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
              <div>
                {imageSrcs[index] && (
                  <img src={imageSrcs[index]} alt={imageSrcs[index]} className="kutu_image" />
                )}
              </div>
              <div className="d-flex">
                <label className="urun_title">{item.file}</label>
              </div>
              <div className="d-flex white_line p-1 align-items-center"></div>
              <div className="d-flex ">
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
                : { transform: `translateX(${-430 * currentIndex}px)` }
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
          <div style={{ width: "70px" }}>
            <button
              className="urun_previous_button mr-2"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            ></button>
          </div>

          <div className="d-flex justify-content-evenly urun_button_pack">
            {renderPageNumbers()}
          </div>
          <div style={{ width: "70px" }}>
            <button
              className="urun_next_button ml-2"
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
