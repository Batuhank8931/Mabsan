import React, { useState } from "react";
import "./css/Blog.css";

const Blog = ({ blogData }) => {
  let itemsPerPage;

  const isPhoneScreen = () => {
    return window.innerWidth <= 600; // Adjust the threshold as needed
  };

  if (isPhoneScreen()) {
    itemsPerPage = 2;
  } else {
    itemsPerPage = 4;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(blogData.length / itemsPerPage);

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
    const numAdjacentPages = 2;
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
          className="pagination_button"
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

  const getBlogItems = (start, end) => {
    return (
      <div className="row" style={{ width: "100%" }}>
        {blogData.slice(start, end).map((item, index) => (
          <div key={index} className="col-md-6 col-12 pb-4">
            <div className="blog_card_content d-flex align-items-center justify-content-center">
              <div className="date_title row justify-content-start">
                <label className="day_title">{item.day}</label>
                <label className="month_title">{item.month}</label>
              </div>
              <div className="blog_content d-flex justify-content-center align-items-center row p-4">
                {" "}
                <label className="blog_card_title p-2">{item.title}</label>
                <label className="blog_card_content p-2">{item.content}</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="baslik pager_back p-md-5 p-3 pt-5 pb-5">
      <div className="d-flex flex-column align-items-center">
        <div className="blog-container p-0 m-0">
          <div
            className="blog_card"
            style={
              window.innerWidth >= 600
                ? {
                    transform: `translateX(${-1105 * currentIndex}px)`,
                  }
                : { transform: `translateX(${-360 * currentIndex}px)` }
            }
          >
            {blogData.map(
              (item, index) =>
                index % itemsPerPage === 0 && ( // Render only for every fourth item
                  <div
                    key={index}
                    className="blog_front d-flex align-items-start flex-column bd-highlight"
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
              className="previous_button mr-2"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            ></button>
          </div>

          <div className="page-numbers-container d-flex justify-content-evenly button_pack">
            {renderPageNumbers()}
          </div>
          <div style={{ width: "70px" }}>
            <button
              className="next_button ml-2"
              onClick={handleNext}
              disabled={currentIndex === totalPages - 1}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
