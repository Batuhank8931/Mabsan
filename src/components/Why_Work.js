import React from "react";
import "./css/Why_Work.css";
import Right_Arrow from "../assets/right_arrow.svg";

const Why_Work = () => {
  return (
    <div className="baslik p-md-5 p-3 pt-md-1 pb-md-1 ">
      <div className="d-flex row justify-content-between">
        <div className="d-flex align-items-center justify-content-center  col-md-4 col-12">
          <label className="work_label_1 p-4">Why Work For Mabsan ?</label>
        </div>
        <div className="col-md-4 col-12">
          <label className="work_label_2 p-3 h-100">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </label>
        </div>
        <div className="d-flex align-items-center justify-content-center justify-content-md-end pl-0 col-md-4 col-12">
          <div className="d-flex column p-3 pl-0">
            <button className="work_button d-flex justify-content-between">
              <label
                className="p-3 ml-4"
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  fontSize: "23px",
                }}
              >
                About Us
              </label>
              <img className="h-100 mr-4" src={Right_Arrow} alt="Mabsan Logo" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why_Work;
