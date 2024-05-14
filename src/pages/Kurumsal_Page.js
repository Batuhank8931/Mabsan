import React from "react";

import SubNavbar from "../components/SubNavbar";
import Tanitim_Filmi from "../components/Tanitim_Filmi";
import Left_Header from "../components/Left_Header";
import Right_Header from "../components/Right_Header";
import Yonetim_Ekibi from "../components/Yonetim_Ekibi";
import Paragraf from "../components/Paragraf";
import Yolculugumuz from "../components/Yolculugumuz";
import Footer from "../components/Footer";

import Main_Data from "../components/DB_converter";

const YonetimData = Main_Data.YonetimData;
const hakkimizda = Main_Data.Paragraflar.hakkimizda;
const misyon = Main_Data.Paragraflar.misyon;
const vizyon = Main_Data.Paragraflar.vizyon;
const YolculugumuzData = Main_Data.YolculugumuzData;

const Kurumsal_Page = ({ change_page }) => {
  return (
    <>
      <SubNavbar change_page={change_page} sectorLabel={"Kurumsal"} />
      <Tanitim_Filmi />
      <Left_Header sectorLabel={"Yönetim Ekibimiz"} />
      <Yonetim_Ekibi YonetimData={YonetimData} />
      <Right_Header sectorLabel={"Hakkımızda"} />
      <Paragraf paragraf_metni={hakkimizda} />
      <Left_Header sectorLabel={"Misyon"} />
      <Paragraf paragraf_metni={misyon} />
      <Right_Header sectorLabel={"Vizyon"} />
      <Paragraf paragraf_metni={vizyon} />
      <Left_Header sectorLabel={"Yolculuğumuz"} />
      <Yolculugumuz YolculugumuzData={YolculugumuzData} />
      <Footer change_page={change_page}/>
    </>
  );
};

export default Kurumsal_Page;
