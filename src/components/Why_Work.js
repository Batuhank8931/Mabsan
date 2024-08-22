import React from "react";
import "./css/Why_Work.css";
import Right_Arrow from "../assets/right_arrow.svg";

const Why_Work = () => {
  return (
    <div className="baslik p-md-5 p-3 pt-md-1 pb-md-1 ">
      <div className="d-flex row justify-content-between">
        <div className="d-flex align-items-center justify-content-start  col-md-7 col-12">
          <label className="work_label_1 p-4">Mabsanlı Kimdir?</label>
        </div>
        <div className="col-md-5 col-12 d-flex">
          <label className="work_label_2 p-3 h-100">
            “Burası yeniliğe açık, kendine ve ekibine güvenen, tasarım odaklı
            düşünenlerin dünyası”
          </label>
        </div>
      </div>
    </div>
  );
};

export default Why_Work;
