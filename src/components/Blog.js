import React, { useState } from "react";
import "./css/Blog.css";

const Blog = ({ blogData, change_blog }) => {
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
        {blogData.slice(start, end).map((item, index) => (
          <div
            key={index}
            id={`blog_${item.id}`}
            className="col-md-6 col-12 pb-4"
            onClick={() => change_blog(item.id,"BlogDetail")}
          >
            <div className="blog_card_content d-flex align-items-center justify-content-center">
              <div className="date_title row justify-content-start">
                <h1 className="day_title">{item.day}</h1>
                <p className="month_title">{item.month}</p>
              </div>
              <div className="blog_content d-flex justify-content-center align-items-center row p-md-4 p-2">
                {" "}
                <label className="blog_card_title p-2">{item.title}</label>
                <label className="blog_card_text p-2">{item.content}</label>
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
        <div className="blog-container p-0 m-0">
          <div
            className="blog_card"
            style={
              window.innerWidth >= 600
                ? {
                    transform: `translateX(${-1110 * currentIndex}px)`,
                  }
                : { transform: `translateX(${-430 * currentIndex}px)` }
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
          <div>
            <button
              className="blog_previous_button"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            ></button>
          </div>

          <div className="d-flex justify-content-evenly button_pack">
            {renderPageNumbers()}
          </div>
          <div>
            <button
              className="blog_next_button"
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
