import React from "react";
import "./css/Arka_Plan.css";
import arka from "../assets/arka.svg";
import benek from "../assets/benek.svg";
import workers_man from "../assets/workers_man.svg";
import Makina_Parkuru from "./Makina_Parkuru";
import MabsanWay from "../assets/MabsanWay.svg";
import Mabsan_Way_Form from "./Mabsan_Way_Form";
import image_1 from "../assets/image_1.svg";


const value1 = "The Mabsan Way";

const value2 = `At Mabsan Way, we pride ourselves on our unique approach to cardboard production. Our way is defined by a steadfast commitment to sustainability, where every fold and crease in our cardboard products reflects our dedication to minimizing environmental impact. We prioritize innovation, continuously seeking new ways to improve our processes and products to meet the evolving needs of our customers.`;

const value3 = "Our Strategy";


const value4 = image_1;

const Arka_Plan = () => {
  return (
    <div
      style={{
        height: "100%",
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
        <img src={MabsanWay} alt="MabsanWay" className="MabsanWay p-md-5 p-1" />
      </div>
      <Mabsan_Way_Form PARAMATER1={value1} PARAMATER2={value2} PARAMATER3={value3} PARAMATER4={value4} />

    </div>
  );
};

export default Arka_Plan;
