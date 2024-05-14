import React from "react";

import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import Iletisim from "../components/Iletisim";


const Iletisim_Page = ({ change_page }) => {
  return (
    <>
      <SubNavbar change_page={change_page} sectorLabel={"İletişim"} />
      <Iletisim />
      <Footer change_page={change_page}/>
    </>
  );
};

export default Iletisim_Page;
