import React from "react";
import "./Header.css";
import polygon from "../assets/polygon.svg";

const Left_Header = ({ sectorLabel }) => {
  return (
    <div className="baslik p-md-5 p-3">
      <div class="d-flex justify-content-between">
        <div class="left-div d-flex align-items-center mr-5">
          <label>{sectorLabel}</label> {/* Use the prop value here */}
        </div>
        <div class="middle-div d-flex align-items-center ml-5">
          <div className="line"></div>
        </div>
        <div class="right-div d-flex align-items-center w-8">
          <img src={polygon} alt="Polygon" />
        </div>
      </div>
    </div>
  );
};

export default Left_Header;
