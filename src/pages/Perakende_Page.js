import React from "react";

import SubNavbar from "../components/SubNavbar";
import Perakende_Video from "../components/Perakende_Video";
import Teknik_Ozellik from "../components/Teknik_Ozellik";
import Middle_Header from "../components/Middle_Header";
import Big_Slider from "../components/Big_Slider";
import Urunler_Filmi from "../components/Urunler_Filmi";
import Diger_Sektorler from "../components/Diger_Sektorler";
import Footer from "../components/Footer";

import Mukavva_cinsleri_background from "../assets/mukavva_cinsleri_background.svg";
import Kagit_cinsleri_background from "../assets/kagit_cinsleri_background.svg";

import Main_Data from "../components/DB_converter";

const MukavvaData = Main_Data.MukavvaData;
const KagitData = Main_Data.KagitData;
const Diger_Sektorler_Data = Main_Data.Diger_Sektorler_Data;

const Perakende_Page = ({ change_page }) => {
  return (
    <>
      <SubNavbar change_page={change_page} sectorLabel={"Perakende"} />
      <Perakende_Video />
      <Teknik_Ozellik />
      <Middle_Header MiddleLabel={"Mukavva Cinsleri"} />
      <Big_Slider
        pagerData={MukavvaData}
        background={Mukavva_cinsleri_background}
        name={"Mukavva"}
      />
      <Urunler_Filmi />
      <Middle_Header MiddleLabel={"Kağıt Cinsleri"} />
      <Big_Slider
        pagerData={KagitData}
        background={Kagit_cinsleri_background}
        name={"Kagit"}
      />
      <Urunler_Filmi />
      <Diger_Sektorler Diger_Sektorler_Data={Diger_Sektorler_Data} />
      <Footer change_page={change_page}/>
    </>
  );
};

export default Perakende_Page;
