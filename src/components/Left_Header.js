import React, { useEffect, useRef } from "react";
import "./css/Header.css";
import polygon from "../assets/polygon.svg";

const Left_Header = ({ sectorLabel }) => {
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;

    const handleScroll = () => {
      const rect = line.getBoundingClientRect();

      // Check if the line is visible in the viewport
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      ) {
        // If the line is visible, add a class to trigger the animation
        line.classList.add("animate-line-left");
      } else {
        // If the line is not visible, remove the class
        line.classList.remove("animate-line-left");
      }
    };

    // Call handleScroll once on page load to check visibility
    handleScroll();

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectorLabel]); // Re-run the effect when sectorLabel changes

  return (
    <div className="baslik p-md-5 p-3">
      <div className="d-flex justify-content-between">
        <div className="left-div d-flex align-items-center mr-5">
          <label className="line_header">{sectorLabel}</label>{" "}
          {/* Use the prop value here */}
        </div>
        <div className="middle-div d-flex align-items-center">
          <div ref={lineRef} className="line animate-line-left"></div>
        </div>
        <div className="right-div d-flex align-items-center w-8">
          <img src={polygon} alt="Polygon" />
        </div>
      </div>
    </div>
  );
};

export default Left_Header;
