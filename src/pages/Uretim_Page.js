import React from "react";

import SubNavbar from "../components/SubNavbar";
import Tanitim_Filmi from "../components/Tanitim_Filmi";
import Kapasite from "../components/Kapasite";
import Arka_Plan from "../components/Arka_Plan";
import Footer from "../components/Footer";

import Main_Data from "../components/DB_converter";

const MakinaData = Main_Data.MakinaData;

const Mabsan_Way = Main_Data.Mabsan_Way;

const SektorItems = Main_Data.SektorItems;

const Uretim_Page = ({ change_page }) => {

  return (
    <>
      <SubNavbar change_page={change_page} sectorLabel={"Üretim"} SektorItems={SektorItems} />
      <Tanitim_Filmi />
      <Kapasite />
      <Arka_Plan
        pagerData={MakinaData}
        Mukavva_cinsleri_background={""}
        name={"Makina"}
        Mabsan_Way={Mabsan_Way}
      />
      <Footer change_page={change_page}/>
    </>
  );
};

export default Uretim_Page;
