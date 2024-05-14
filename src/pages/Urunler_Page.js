import React from "react";

import SubNavbar from "../components/SubNavbar";
import Urunler_Filmi from "../components/Urunler_Filmi";
import Middle_Header from "../components/Middle_Header";
import Urunler from "../components/Urunler";
import Footer from "../components/Footer";

import Main_Data from "../components/DB_converter";

const UrunData = Main_Data.UrunData;

const Urunler_Page = ({ change_page }) => {
  return (
    <>
      <SubNavbar change_page={change_page} sectorLabel={"Ürünler"} />
      <Urunler_Filmi />
      <Middle_Header MiddleLabel={"Tüm Ürünler"} />
      <Urunler UrunData={UrunData} />
      <Footer change_page={change_page}/>
    </>
  );
};

export default Urunler_Page;
