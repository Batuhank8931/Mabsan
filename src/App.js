import React, { useState } from "react";

import Acilis_Sayfasi from "./components/Acilis_Sayfasi";
import Sektorler from "./components/Sektorler";
import Uretim from "./components/Uretim";
import Yolculugumuz from "./components/Yolculugumuz";
import Footer from "./components/Footer";
import Paragraf from "./components/Paragraf";
import Yonetim_Ekibi from "./components/Yonetim_Ekibi";
import Kapasite from "./components/Kapasite";

import Tanitim_Filmi from "./components/Tanitim_Filmi";
import Arka_Plan from "./components/Arka_Plan";
import Why_Work from "./components/Why_Work";
import Cv_Gonder from "./components/Cv_Gonder";
import Mabsan_Way_Form from "./components/Mabsan_Way_Form";
import Discover_1 from "./assets/Discover_1.svg";
import Mabsan_Way_Form_Reverse from "./components/Mabsan_Way_Form_Reverse";
import Discover_2 from "./assets/Discover_2.svg";

import Blog from "./components/Blog";


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

  const value1 = "Discover New Opportunities";

  const value2 = `At Mabsan Way, we pride ourselves on our unique approach to cardboard production. Our way is defined by a steadfast commitment to sustainability, where every fold and crease in our cardboard products reflects our dedication to minimizing environmental impact.`;

  const value3 = "Discover";

  const value4 = Discover_1;
  const value5 = Discover_2;

  const blogData = [
    { id: 1, day: "27", month: "Şubat", title: "Blog Post 1", content: "Content of Blog Post 1" },
    { id: 2, day: "7", month: "Mart", title: "Blog Post 2", content: "Content of Blog Post 2" },
    { id: 3, day: "15", month: "Mayıs", title: "Blog Post 3", content: "Content of Blog Post 3" },
    { id: 4, day: "22", month: "Haziran", title: "Blog Post 4", content: "Content of Blog Post 4" },
    { id: 5, day: "10", month: "Ağustos", title: "Blog Post 5", content: "Content of Blog Post 5" },
    { id: 6, day: "3", month: "Ekim", title: "Blog Post 6", content: "Content of Blog Post 6" },
    { id: 7, day: "18", month: "Kasım", title: "Blog Post 7", content: "Content of Blog Post 7" },
    { id: 8, day: "5", month: "Ocak", title: "Blog Post 8", content: "Content of Blog Post 8" },
    { id: 9, day: "9", month: "Şubat", title: "Blog Post 9", content: "Content of Blog Post 9" },
    { id: 10, day: "11", month: "Mart", title: "Blog Post 10", content: "Content of Blog Post 10" },
    { id: 11, day: "20", month: "Nisan", title: "Blog Post 11", content: "Content of Blog Post 11" },
    { id: 12, day: "25", month: "Mayıs", title: "Blog Post 12", content: "Content of Blog Post 12" },
    { id: 13, day: "3", month: "Temmuz", title: "Blog Post 13", content: "Content of Blog Post 13" },
    { id: 14, day: "30", month: "Ağustos", title: "Blog Post 14", content: "Content of Blog Post 14" },
    { id: 15, day: "2", month: "Ekim", title: "Blog Post 15", content: "Content of Blog Post 15" },
    { id: 16, day: "12", month: "Kasım", title: "Blog Post 16", content: "Content of Blog Post 16" },
    { id: 17, day: "18", month: "Aralık", title: "Blog Post 17", content: "Content of Blog Post 17" },
    { id: 18, day: "5", month: "Ocak", title: "Blog Post 18", content: "Content of Blog Post 18" },
    { id: 19, day: "10", month: "Şubat", title: "Blog Post 19", content: "Content of Blog Post 19" },
    { id: 20, day: "15", month: "Mart", title: "Blog Post 20", content: "Content of Blog Post 20" },
    { id: 21, day: "20", month: "Nisan", title: "Blog Post 21", content: "Content of Blog Post 21" },
    { id: 22, day: "25", month: "Mayıs", title: "Blog Post 22", content: "Content of Blog Post 22" },
    { id: 23, day: "30", month: "Haziran", title: "Blog Post 23", content: "Content of Blog Post 23" },
    { id: 24, day: "5", month: "Ağustos", title: "Blog Post 24", content: "Content of Blog Post 24" },
    { id: 25, day: "10", month: "Eylül", title: "Blog Post 25", content: "Content of Blog Post 25" },
    { id: 26, day: "15", month: "Ekim", title: "Blog Post 26", content: "Content of Blog Post 26" },
    { id: 27, day: "20", month: "Kasım", title: "Blog Post 27", content: "Content of Blog Post 27" },
    { id: 28, day: "25", month: "Aralık", title: "Blog Post 28", content: "Content of Blog Post 28" },
    { id: 29, day: "30", month: "Ocak", title: "Blog Post 29", content: "Content of Blog Post 29" },
    { id: 30, day: "5", month: "Mart", title: "Blog Post 30", content: "Content of Blog Post 30" },
    { id: 31, day: "10", month: "Nisan", title: "Blog Post 31", content: "Content of Blog Post 31" },
    { id: 32, day: "15", month: "Mayıs", title: "Blog Post 32", content: "Content of Blog Post 32" },
    { id: 33, day: "20", month: "Haziran", title: "Blog Post 33", content: "Content of Blog Post 33" },
    { id: 34, day: "25", month: "Temmuz", title: "Blog Post 34", content: "Content of Blog Post 34" },
    { id: 35, day: "30", month: "Ağustos", title: "Blog Post 35", content: "Content of Blog Post 35" },
    { id: 36, day: "5", month: "Eylül", title: "Blog Post 36", content: "Content of Blog Post 36" },
    { id: 37, day: "10", month: "Ekim", title: "Blog Post 37", content: "Content of Blog Post 37" },
    { id: 38, day: "15", month: "Kasım", title: "Blog Post 38", content: "Content of Blog Post 38" },
    { id: 39, day: "20", month: "Aralık", title: "Blog Post 39", content: "Content of Blog Post 39" },
    { id: 40, day: "25", month: "Ocak", title: "Blog Post 40", content: "Content of Blog Post 40" },
    { id: 41, day: "5", month: "Mart", title: "Blog Post 41", content: "Content of Blog Post 41" },
    { id: 42, day: "10", month: "Nisan", title: "Blog Post 42", content: "Content of Blog Post 42" },
    { id: 43, day: "15", month: "Mayıs", title: "Blog Post 43", content: "Content of Blog Post 43" },
    { id: 44, day: "20", month: "Haziran", title: "Blog Post 44", content: "Content of Blog Post 44" },
    { id: 45, day: "25", month: "Temmuz", title: "Blog Post 45", content: "Content of Blog Post 45" },
  ];
  

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
            <Uretim />
            <Left_Header sectorLabel={"Yolculuğumuz"} />
            <Yolculugumuz />
            <Footer />
          </div>
        ) : (
          <div className="slide-up">
            {BigHeader === "Main" && (
              <>
                <Acilis_Sayfasi change_page={change_page} />
                <Left_Header sectorLabel={"Sektörler"} />
                <Sektorler />
                <Right_Header sectorLabel={"Üretim"} />
                <Uretim />
                <Left_Header sectorLabel={"Yolculuğumuz"} />
                <Yolculugumuz />
                <Footer />
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
                <Left_Header sectorLabel={"Yolculuğumuz"} />
                <Yolculugumuz />
                <Footer />
              </>
            )}

            {BigHeader === "Üretim" && (
              // add your Main content here
              <>
                {" "}
                <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
                <Tanitim_Filmi />
                <Kapasite />
                <Arka_Plan />
                <Footer />
              </>
            )}
            {BigHeader === "Ürünler" && (
              // add your Main content here
              <>
                {" "}
                <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
                <Tanitim_Filmi />
                <div>Main content</div>
              </>
            )}
            {BigHeader === "Kariyer" && (
              // add your Main content here
              <>
                {" "}
                <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
                <Why_Work />
                <Cv_Gonder />
                <Mabsan_Way_Form
                  PARAMATER1={value1}
                  PARAMATER2={value2}
                  PARAMATER3={value3}
                  PARAMATER4={value4}
                />
                <Mabsan_Way_Form_Reverse
                  PARAMATER1={value1}
                  PARAMATER2={value2}
                  PARAMATER3={value3}
                  PARAMATER4={value5}
                />
                <Footer />
              </>
            )}
            {BigHeader === "Blog" && (
              // add your Main content here
              <>
                {" "}
                <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
                <Blog blogData={blogData} />
                <Footer />

              </>
            )}
            {BigHeader === "Perakende" && (
              // add your Main content here
              <>
                {" "}
                <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
                <Tanitim_Filmi />
                <div>Main content</div>
              </>
            )}
            {BigHeader === "İletişim" && (
              // add your Main content here
              <>
                {" "}
                <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
                <Tanitim_Filmi />
                <div>Main content</div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
