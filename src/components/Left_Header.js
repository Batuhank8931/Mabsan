import React from "react";
import "./Header.css";
import polygon from "../assets/polygon.svg";

const Left_Header = ({ sectorLabel }) => {
  return (
    <div className="baslik p-md-5 p-3 pt-5 pb-5">
      <div className="d-flex align-items-left pb-5 ">
        <div className="col-4 col-md-2 d-flex align-items-center justify-content-start p-2">
          <label>{sectorLabel}</label> {/* Use the prop value here */}
        </div>
        <div className="line-container col-7 col-md-9">
          <div className="line"></div>
        </div>
        <div className="line-container col-1 align-items-left">
          <div>
            <img src={polygon} alt="Polygon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left_Header;
