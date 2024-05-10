import React from "react";
import "./css/Header.css";

const Middle_Header = ({ MiddleLabel }) => {
  return (
    <div className="baslik p-md-5 p-3 ">
      <div className="d-flex align-items-center justify-content-center">
        <label className="middle_header">{MiddleLabel}</label>
      </div>
    </div>
  );
};

export default Middle_Header;
