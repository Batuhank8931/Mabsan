import React from "react";

import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import Surdurulebilirlik from "../components/Surdurulebilirlik";

import Main_Data from "../components/DB_converter";

const SurdurData = Main_Data.SurdurData;


const Surdurulebilirlik_Page = ({ change_page }) => {
  return (
    <>
      <SubNavbar change_page={change_page} sectorLabel={"Sürdürülebilirlik"} />
      <Surdurulebilirlik SurdurData={SurdurData} />
      <Footer change_page={change_page}/>
    </>
  );
};

export default Surdurulebilirlik_Page;
