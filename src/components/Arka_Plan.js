import React from "react";
import "./css/Arka_Plan.css";
import arka from "../assets/arka.svg";
import benek from "../assets/benek.svg";
import workers_man from "../assets/workers_man.svg";
import Makina_Parkuru from "./Makina_Parkuru";
import MabsanWay from "../assets/MabsanWay.svg";

const Arka_Plan = () => {
  return (
    <div
      style={{
        height: "2800px",
        position: "relative",
        width: "100%",
        backgroundImage: `url(${benek}), url(${workers_man}), url(${arka})`,
        backgroundSize: "15% , 95% , 95% ",
        backgroundPosition: "center 430px, center 580px, center 1730px",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
      }}
    >
      <Makina_Parkuru />
      <div className="p-md-5 p-1">
        <img src={MabsanWay} alt="MabsanWay" className="MabsanWay p-md-5 p-1" style={{ width:"100%"}}/>
      </div>
    </div>
  );
};

export default Arka_Plan;
