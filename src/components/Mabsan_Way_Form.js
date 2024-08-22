import React from "react";
import "./css/Mabsan_Way_Form.css";
import Right_Arrow from "../assets/right_arrow.svg";


const Mabsan_Way_Form = ({ PARAMATER1, PARAMATER2, PARAMATER3 }) => {
  return (
    <div
      className="baslik p-md-5 p-3 pt-1 pb-0 pb-md-0"
      style={{
        width: "100%",
        backgroundColor: "transparent",
      }}
    >
      <div className="row">
        <div className="col-12 col-md-5 d-flex row align-items-center pt-4 pb-5">
          <div className="d-flex align-items-center justify-content-start">
            <label className="form_label_1 p-4">{PARAMATER1}</label>
          </div>
          <div className="pr-5">
            <label className="form_label_2 p-4">{PARAMATER2}</label>
          </div>
          <div className="d-flex align-items-center justify-content-center justify-content-md-start pl-0">
            <div className="d-flex column p-4 pl-0">
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7 p-0 m-0">
          <img
            src={PARAMATER3}
            alt="bayrak"
            className="image_container_way"
          />
        </div>
      </div>
    </div>
  );
};


export default Mabsan_Way_Form;
