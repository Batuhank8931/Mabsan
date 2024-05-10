import React, { useState } from "react";
import "./css/Surdurulebilirlik.css";
import yaprakSVG from "../assets/yaprak.svg";
import red_hoverSVG from "../assets/red_hover.svg";
import downloadSVG from "../assets/download.svg";



function downloadPDF(pdfPath, fileName) {
  const downloadLink = document.createElement('a');
  downloadLink.href = pdfPath;
  downloadLink.download = fileName;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

const Surdurulebilirlik = ({ SurdurData }) => {

  const handleDownload = (fileName) => {
    // Import the PDF file
    import(`../belgeler/${fileName}`)
      .then(module => {
        // Call the downloadPDF function with the PDF file path and desired filename
        downloadPDF(module.default, fileName);
      })
      .catch(error => {
        console.error('Error loading PDF file:', error);
      });
  };


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

  const totalPages = Math.ceil(SurdurData.length / itemsPerPage);

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

  const getBlogItems = (start, end) => {
    return (
      <div className="row" style={{ width: "100%" }}>
        {SurdurData.slice(start, end).map((item, index) => (
          <div key={index} className="col-md-4 col-12 pb-4">
            <div
              className="belge_kart d-flex align-items-center flex-column m-md-0 m-5 mb-0 mt-4 "
              style={{
                backgroundImage: `url(${red_hoverSVG})`,
                backgroundSize: "110%",
                backgroundPosition: "center",
              }}
            >
              <div className="bd-highlight p-md-3 pt-4">
                <img src={yaprakSVG} alt="yaprak" className="yaprak" />
              </div>
              <div className="bd-highlight  ">
                <label className="belge_title">{item.file}</label>
              </div>
              <div className="mt-auto bd-highlight w-100 button_frame" >
                <button
                  className="surdurulebilirlik_download_button"
                  style={{
                    backgroundImage: `url(${downloadSVG})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={() => handleDownload(item.file_address)}
                ></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="baslik p-md-5 p-3 pt-5 pb-5">
      <div className="d-flex flex-column align-items-center">
        <div className="belge-container p-0 m-0">
          <div
            className="belge_card"
            style={
              window.innerWidth >= 600
                ? {
                    transform: `translateX(${-1120 * currentIndex}px)`,
                  }
                : { transform: `translateX(${-390 * currentIndex}px)` }
            }
          >
            {SurdurData.map(
              (item, index) =>
                index % itemsPerPage === 0 && ( // Render only for every fourth item
                  <div
                    key={index}
                    className="belge_front d-flex align-items-start flex-column bd-highlight"
                  >
                    {getBlogItems(index, index + itemsPerPage)}
                  </div>
                )
            )}
          </div>
        </div>

        <div className="col-12 d-flex mt-3 justify-content-center">
          <div >
            <button
              className="belge_previous_button"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            ></button>
          </div>

          <div className="d-flex justify-content-evenly belge_button_pack">
            {renderPageNumbers()}
          </div>
          <div>
            <button
              className="belge_next_button"
              onClick={handleNext}
              disabled={currentIndex === totalPages - 1}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surdurulebilirlik;
