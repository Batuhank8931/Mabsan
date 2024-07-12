import React from "react";

import Acilis_Sayfasi from "../components/Acilis_Sayfasi";
import Sektorler from "../components/Sektorler";
import Uretim from "../components/Uretim";
import Yolculugumuz from "../components/Yolculugumuz";
import Footer from "../components/Footer";
import Left_Header from "../components/Left_Header";
import Right_Header from "../components/Right_Header";

import Main_Data from "../components/DB_converter";

const SektorItems = Main_Data.SektorItems;
const UretimData = Main_Data.UretimData;
const YolculugumuzData = Main_Data.YolculugumuzData;

const Main_Page = ({ change_page }) => {
  return (
    <>
      <Acilis_Sayfasi change_page={change_page} SektorItems={SektorItems} />
      <Left_Header sectorLabel={"Her sektörün ihtiyacını biliyoruz"} />
      <Sektorler SektorItems={SektorItems} />
      <Right_Header sectorLabel={"Kâğıtla başlayan güvenilir markalara uzanan bir yolculuk"} />
      <Uretim UretimData={UretimData} />
      <Left_Header sectorLabel={"Yolculuğumuz"} />
      <Yolculugumuz YolculugumuzData={YolculugumuzData} />
      <Footer change_page={change_page}/>
    </>
  );
};

export default Main_Page;
