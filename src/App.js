import React, { useState } from "react";

import Acilis_Sayfasi from "./components/Acilis_Sayfasi";
import Sektorler from "./components/Sektorler";
import Pager from "./components/Uretim";
import Yolculugumuz from "./components/Yolculugumuz";
import Footer from "./components/Footer";
import Paragraf from "./components/Paragraf";
import Yonetim_Ekibi from "./components/Yonetim_Ekibi";

import Tanitim_Filmi from "./components/Tanitim_Filmi";

import Left_Header from "./components/Left_Header";
import Right_Header from "./components/Right_Header";
import SubNavbar from "./components/SubNavbar";
import backgroundSVG from "./assets/HeaderBackground.svg";

import "./App.css"; // Import the CSS file

const App = () => {
  const [Subheader, setSubheader] = useState(true); // State to control the visibility of elements
  const [BigHeader, setBigHeader] = useState("");

  // Function to toggle the visibility of elements
  // Function to toggle the visibility of elements
  const change_page = (label) => {
    if (!Subheader) {
      // If Subheader is true, update only BigHeader
      setBigHeader(label);
    } else {
      // If Subheader is false, toggle both Subheader and BigHeader
      setSubheader((prevSubheader) => !prevSubheader);
      setBigHeader(label);
    }
  };

  const hakkimizda = `Mabsan Oluklu Mukavva Kutu San. ve Tic.Ltd.Şti 1988 yılında hizmete açılmış olup, sürekli gelişip hizmet kalitesini arttırak günümüz teknolojisiyle beraber kaliteli ve güvenilir çalışmalarına devam etmektedir. Geniş müşteri portföyü ve kaliteli ürün yelpazesi ile sektörünün önde gelen firmalarından olan firmamız, güncel teknolojik gelişmeleri üretim sürecinin her aşamasında kullanarak, yüksek kalite standartlarını hedefe ulaşmasındaki büyük dayanak olarak görmüştür.\n\nHızla büyümelerini 'Doğru ve Kaliteli' hizmet anlayışına borçlu olan firmamız, ilkelerinden taviz vermeden, istikrarlı büyümesi ile de sektörünün saygın firmaları arasındaki yerini gün geçtikçe sağlamlaştırmaktadır.\n\nMüşteri memnuniyetimizden aldığımız güç ile iç piyasada daha da büyümeyi hedeflemekteyiz.`;

  const misyon =
    "Mabsan Ailesi olarak misyonumuz, etik ilkelerden asla ödün vermeden genç, dinamik, lider kişilikli kadrosu ile teknolojik gelişmeleri takip eden ve faaliyet alanlarında uygulayan, tüketicilerine, tedarikçilerine memnuniyet odaklı hizmet anlayışını benimsemiş ve sürdürmeyi ilke edinmiştir. Sektörünün gelişimine, kapsamlı, yenilikçi, çeşitli piyasa segmentlerinin beklentilerini ve gereksinimlerini karşılayan, kaliteli ürün ve hizmetlerin sunumu ile katkı sağlamaktır. Müşteri beklentilerini, yeni ürünleri ve hizmetleri ile büyümek, geldiğimiz konumda da siz paydaşlarına artan katma değer kazandırmaktır.";

  const vizyon =
    "\n\u2022 Koşulsuz müşteri memnuniyeti sağlamak,\n\u2022 Sektörünün önde gelen firmaları arasında kalıcığını korumak,\n\u2022 Güçlü büyüme ile siz müşterilerimize kalıcı değer yaratmak, \n\u2022Karlılığınızı, bilinirliğinizi ve markanızın yapısını korumak, \n\u2022Kalitede ve üretimde lider olmak.";

  return (
    <div
      className="App-container"
      style={{
        position: "relative",
        backgroundImage: `url(${backgroundSVG})`,
      }}
    >
      {/* Wrap everything with the container */}
      <div className="App">
        {Subheader || Subheader === "Main" ? (
          <div className="">
            <Acilis_Sayfasi change_page={change_page} />
            <Left_Header sectorLabel={"Sektörler"} />
            <Sektorler />
            <Right_Header sectorLabel={"Üretim"} />
            <Pager />
          </div>
        ) : (
          <div className="slide-up">
            {BigHeader === "Main" && (
              <>
                <Acilis_Sayfasi change_page={change_page} />
                <Left_Header sectorLabel={"Sektörler"} />
                <Sektorler />
                <Right_Header sectorLabel={"Üretim"} />
                <Pager />
              </>
            )}

            {BigHeader === "Kurumsal" && (
              <>
                <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
                <Tanitim_Filmi />
                <Left_Header sectorLabel={"Yönetim Ekibimiz"} />
                <Yonetim_Ekibi />
                <Right_Header sectorLabel={"Hakkımızda"} />
                <Paragraf paragraf_metni={hakkimizda} />
                <Left_Header sectorLabel={"Misyon"} />
                <Paragraf paragraf_metni={misyon} />
                <Right_Header sectorLabel={"Vizyon"} />
                <Paragraf paragraf_metni={vizyon} />
              </>
            )}

            {BigHeader === "Üretim" && (
              // add your Main content here
              <>
                {" "}
                <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
                <div>Main content</div>
              </>
            )}
          </div>
        )}
        <Left_Header sectorLabel={"Yolculuğumuz"} />
        <Yolculugumuz />
        <Footer />
      </div>
    </div>
  );
};

export default App;
