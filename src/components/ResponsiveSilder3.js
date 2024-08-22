import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/ResponsiveSilder2.css";

import { useTranslation } from "react-i18next";

function ResponsiveSlider2() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const handleClick = () => {
    // Sayfa yönlendirmesi
    navigate("/productCategory");
  };

  return (
    <div className="responsiveBodySlider py-3">
      <div className="gridContainer">
        {[...Array(21)].map((_, index) => (
          <span
            className="spanSlider"
            style={{ "--i": index + 21 }}
            key={index}
          >
            <img
              className="imgSliderResponsive"
              src={require(`../assets/resize/${index + 21}.png`)}
              alt={`Image ${index + 21}`}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default ResponsiveSlider2;

//#5c0010
//#8f0022
//#ab0535
//#a35c4a
//#bf6e58
//#d98a77
