import React from "react";

import SubNavbar from "../components/SubNavbar";
import Perakende_Video from "../components/Perakende_Video";
import Teknik_Ozellik from "../components/Teknik_Ozellik";
import Middle_Header from "../components/Middle_Header";
import Big_Slider from "../components/Big_Slider";
import Urunler_Filmi from "../components/Urunler_Filmi";
import Diger_Sektorler from "../components/Diger_Sektorler";
import Footer from "../components/Footer";
import ResponsiveSlider2 from "../components/ResponsiveSilder2";

import ResponsiveSlider3 from "../components/ResponsiveSilder3";

import Mukavva_cinsleri_background from "../assets/mukavva_cinsleri_background.svg";
import Kagit_cinsleri_background from "../assets/kagit_cinsleri_background.svg";

import Main_Data from "../components/DB_converter";

const MukavvaData = Main_Data.MukavvaData;
const KagitData = Main_Data.KagitData;
const Diger_Sektorler_Data = Main_Data.Diger_Sektorler_Data;

const SektorItems = Main_Data.SektorItems;

const Sektorler_Page = ({ change_page, sektor_item }) => {
  const matchedItem = SektorItems.find((item) => item.name === sektor_item);

  // Extract the video value if the item is found

  const matchedItemDetails = matchedItem
    ? [
        matchedItem.video,
        matchedItem.header,
        matchedItem.info,
        matchedItem.teknik_kutu,
        matchedItem.acik_kutu,
        matchedItem.data_1,
        matchedItem.data_2,
        matchedItem.data_3,
        matchedItem.data_4,
        matchedItem.data_5,
      ]
    : [null, null, null, null, null, null, null, null, null, , null];

  // Destructure the matchedItemDetails array

  return (
    <>
      <SubNavbar
        change_page={change_page}
        sectorLabel={sektor_item}
        SektorItems={SektorItems}
      />
      <Perakende_Video matchedItemDetails={matchedItemDetails} />
      <Teknik_Ozellik matchedItemDetails={matchedItemDetails} />
      <Urunler_Filmi/>
      <Middle_Header MiddleLabel={"Mukavva Cinsleri"} />
      <Big_Slider
        pagerData={MukavvaData}
        background={Mukavva_cinsleri_background}
        name={"Mukavva"}
      />
      <div className="my-5">
        <ResponsiveSlider3 />
        <label style={{ fontSize: "10px", color:"white"}}>
          Görseller firmamızın daha önce ürettiği kutu çeşitlerine örnek olup,
          resimlerde görünen marka ürünlerinin satışları, pazarlanması vb
          firmamız tarafından yapılmamaktadır. Kutuların üzerinde yer alan
          markaların her türlü hakları ilgili markalara aittir. Sitemizden ürün
          görsellerinin haberimiz olmadan alınması ve kullanılmasına
          muvafakatimiz yoktur. Bu şekilde kullanımlarda her türlü yasal
          sorumluluk kullanan şahsa aittir.
        </label>
      </div>

      <Middle_Header MiddleLabel={"Kağıt Cinsleri"} />
      <Big_Slider
        pagerData={KagitData}
        background={Kagit_cinsleri_background}
        name={"Kagit"}
      />
      <div className="my-5">
        {" "}
        <ResponsiveSlider2 />
        <label style={{ fontSize: "10px", color:"white" }}>
          Görseller firmamızın daha önce ürettiği kutu çeşitlerine örnek olup,
          resimlerde görünen marka ürünlerinin satışları, pazarlanması vb
          firmamız tarafından yapılmamaktadır. Kutuların üzerinde yer alan
          markaların her türlü hakları ilgili markalara aittir. Sitemizden ürün
          görsellerinin haberimiz olmadan alınması ve kullanılmasına
          muvafakatimiz yoktur. Bu şekilde kullanımlarda her türlü yasal
          sorumluluk kullanan şahsa aittir.
        </label>
      </div>

      <Diger_Sektorler Diger_Sektorler_Data={Diger_Sektorler_Data} />
      <Footer change_page={change_page} />
    </>
  );
};

export default Sektorler_Page;
