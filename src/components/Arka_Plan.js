import React from "react";
import "./css/Arka_Plan.css";
import arka from "../assets/arka.svg";
import benek from "../assets/benek.svg";
import workers_man from "../assets/workers_man.svg";
import Big_Slider from "./Big_Slider"
import MabsanWay from "../assets/MabsanWay.svg";
import Mabsan_Way_Form from "./Mabsan_Way_Form";
import image_1 from "../assets/image_1.svg";


const value1 = "The Mabsan Way";

const value2 = `
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
`;

const value3 = "Our Strategy";


const value4 = image_1;

const Arka_Plan = ({pagerData, background}) => {
  return (
    <div
      style={{
        height: "100%",
        position: "relative",
        width: "100%",
        backgroundImage: `url(${benek}), url(${workers_man}), url(${arka})`,
        backgroundSize: "15% , 95% , 95% ",
        backgroundPosition: "500px 80px, center 580px, center 1730px",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
      }}
    >
      <Big_Slider pagerData={pagerData} background={background}/>

      <div className="p-md-5 p-1">
        <img src={MabsanWay} alt="MabsanWay" className="MabsanWay p-md-5 p-1" />
      </div>
      <Mabsan_Way_Form PARAMATER1={value1} PARAMATER2={value2} PARAMATER3={value3} PARAMATER4={value4} />

    </div>
  );
};

export default Arka_Plan;
