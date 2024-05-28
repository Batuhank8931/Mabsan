import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/ResponsiveSilder2.css";
import image1 from "../assets/resize/1.png";
import image2 from "../assets/resize/2.png";
import image3 from "../assets/resize/3.png";
import image4 from "../assets/resize/4.png";
import image5 from "../assets/resize/5.png";
import image6 from "../assets/resize/12.png";
import image7 from "../assets/resize/13.png";
import image8 from "../assets/resize/8.png";
import image9 from "../assets/resize/9.png";
import image10 from "../assets/resize/10.png";
import image11 from "../assets/resize/11.png";
import image12 from "../assets/resize/7.png";
import image13 from "../assets/resize/14.png";
import image14 from "../assets/resize/6.png";
import image15 from "../assets/resize/15.png";
import image16 from "../assets/resize/16.png";
import image17 from "../assets/resize/17.png";
import image18 from "../assets/resize/18.png";
import image19 from "../assets/resize/19.png";
import image20 from "../assets/resize/20.png";
import image21 from "../assets/resize/21.png";
import image22 from "../assets/resize/22.png";
import image23 from "../assets/resize/23.png";
import image24 from "../assets/resize/24.png";
import image25 from "../assets/resize/25.png";
import image26 from "../assets/resize/26.png";
import image27 from "../assets/resize/27.png";
import image28 from "../assets/resize/28.png";
import image29 from "../assets/resize/29.png";
import image30 from "../assets/resize/30.png";
import image31 from "../assets/resize/31.png";
import image32 from "../assets/resize/32.png";
import image33 from "../assets/resize/33.png";
import image34 from "../assets/resize/34.png";
import image35 from "../assets/resize/35.png";
import image36 from "../assets/resize/36.png";
import image37 from "../assets/resize/37.png";
import image38 from "../assets/resize/38.png";
import image39 from "../assets/resize/39.png";
import image40 from "../assets/resize/40.png";
import image41 from "../assets/resize/41.png";
import image42 from "../assets/resize/42.png";

import { useTranslation } from "react-i18next";

function ResponsiveSlider2() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const handleClick = () => {
    // Sayfa yönlendirmesi
    navigate("/productCategory");
  };

  return (
    <div className="responsiveBodySlider">
      <div className="gridContainer">
        {[...Array(24)].map((_, index) => (
          <span className="spanSlider" style={{ "--i": index + 1 }}>
            <img
              className="imgSliderResponsive"
              src={require(`../assets/resize/${index + 1}.png`)}
              alt={`Image ${index + 1}`}
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
