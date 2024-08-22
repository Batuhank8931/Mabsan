import React from "react";

import SubNavbar from "../components/SubNavbar";
import Why_Work from "../components/Why_Work";
import Cv_Gonder from "../components/Cv_Gonder";
import Mabsan_Way_Form from "../components/Mabsan_Way_Form";
import Mabsan_Way_Form_Reverse from "../components/Mabsan_Way_Form_Reverse";
import Footer from "../components/Footer";

import Main_Data from "../components/DB_converter";


const value1 = Main_Data.Cards.value1;
const value2 = Main_Data.Cards.value2;
const value3 = Main_Data.Cards.value3;
const value4 = Main_Data.Cards.value4;
const value5 = Main_Data.Cards.value5;
const value6 = Main_Data.Cards.value6;

const SektorItems = Main_Data.SektorItems;


const Kariyer_Page = ({ change_page }) => {
  return (
    <>
      <SubNavbar change_page={change_page} sectorLabel={"Kariyer"} SektorItems={SektorItems} />
      <Why_Work />
      <Cv_Gonder />
      <Mabsan_Way_Form
        PARAMATER1={value1}
        PARAMATER2={value2}
        PARAMATER3={value3}
      />
      <Mabsan_Way_Form_Reverse
        PARAMATER1={value4}
        PARAMATER2={value5}
        PARAMATER3={value6}
      />
      <Footer change_page={change_page}/>
    </>
  );
};

export default Kariyer_Page;
