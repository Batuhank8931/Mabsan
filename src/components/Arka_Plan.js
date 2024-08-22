import React from "react";
import "./css/Arka_Plan.css";
import arka from "../assets/arka.svg";
import benek from "../assets/benek.svg";
import workers_man from "../assets/workers_man.svg";
import Big_Slider from "./Big_Slider";
import MabsanWay from "../assets/MabsanWay.svg";
import Mabsan_Way_Form from "./Mabsan_Way_Form";

const Arka_Plan = ({ pagerData, background, Mabsan_Way }) => {
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
      <Big_Slider pagerData={pagerData} background={background} />

      <div className="p-md-5 p-1">
        <div className="image-container" style={{ position: "relative" }}>
          <img
            src={MabsanWay}
            alt="MabsanWay"
            className="MabsanWay"
            style={{ width: "100%" }}
          />

          <svg
            viewBox="0 0 4400 4400"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          >
            <text
              id="Mabsan_Üretim_Döngüsü"
              data-name="Mabsan Üretim  Döngüsü"
              className="cls-1"
              x="2231.082"
              y="2200.018"
            >
              <tspan x="2231.082">Mabsan Üretim </tspan>
              <tspan x="2231.082" dy="180">
                Döngüsü
              </tspan>
            </text>
            <text id="Güven" className="cls-1" x="2203.054" y="518.527">
              <tspan x="2203.054">Güven</tspan>
            </text>
            <text id="İnovasyon" className="cls-1" x="2203.054" y="3947.412">
              <tspan x="2203.054">İnovasyon</tspan>
            </text>
            <text
              id="Tasarım"
              className="cls-1"
              transform="translate(3867.345 2247.247) rotate(90)"
            >
              <tspan x="0">Tasarım</tspan>
            </text>
            <text
              id="Kalite"
              className="cls-1"
              transform="translate(532.726 2200.018) rotate(-90)"
            >
              <tspan x="0">Kalite</tspan>
            </text>
          </svg>
        </div>
      </div>
      <Mabsan_Way_Form
        PARAMATER1={Mabsan_Way.value1}
        PARAMATER2={Mabsan_Way.value2}
        PARAMATER3={Mabsan_Way.value3}
      />
    </div>
  );
};

export default Arka_Plan;
