import React, { useState } from "react";

import Acilis_Sayfasi from "./components/Acilis_Sayfasi";
import Sektorler from "./components/Sektorler";
import Uretim from "./components/Uretim";
import Yolculugumuz from "./components/Yolculugumuz";
import Footer from "./components/Footer";
import Paragraf from "./components/Paragraf";
import Yonetim_Ekibi from "./components/Yonetim_Ekibi";
import Kapasite from "./components/Kapasite";

import photoUretim from "./assets/Uretim_ornek.png";

import E_Ticaret from "./assets/e_ticaret.svg";
import Edustriyel from "./assets/endustriyel.svg";
import Elektrik from "./assets/elektrik.svg";
import Perakende from "./assets/perakende.svg";
import Kozmetik from "./assets/kozmetik.svg";
import İlac from "./assets/ilac.svg";
import Otomotiv from "./assets/otomotiv.svg";

import E_Ticaret_b from "./assets/e_ticaret_b.svg";
import Edustriyel_b from "./assets/endustriyel_b.svg";
import Elektrik_b from "./assets/elektrik_b.svg";
import Perakende_b from "./assets/perakende_b.svg";
import Kozmetik_b from "./assets/kozmetik_b.svg";
import İlac_b from "./assets/ilac_b.svg";
import Otomotiv_b from "./assets/otomotiv_b.svg";

import Yonetim_image from "./assets/yonetim.png";

import Tanitim_Filmi from "./components/Tanitim_Filmi";
import Arka_Plan from "./components/Arka_Plan";
import Why_Work from "./components/Why_Work";
import Cv_Gonder from "./components/Cv_Gonder";
import Mabsan_Way_Form from "./components/Mabsan_Way_Form";
import Discover_1 from "./assets/Discover_1.svg";
import Mabsan_Way_Form_Reverse from "./components/Mabsan_Way_Form_Reverse";
import Discover_2 from "./assets/Discover_2.svg";

import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";

import Perakende_Video from "./components/Perakende_Video";
import Teknik_Ozellik from "./components/Teknik_Ozellik";
import Big_Slider from "./components/Big_Slider";
import Diger_Sektorler from "./components/Diger_Sektorler";
import Kutu_1 from "./assets/Urunler/kutu_1.png";

import Iletisim from "./components/Iletisim";

import Surdurulebilirlik from "./components/Surdurulebilirlik";

import Urunler_Filmi from "./components/Urunler_Filmi";
import Urunler from "./components/Urunler";

import Left_Header from "./components/Left_Header";
import Right_Header from "./components/Right_Header";
import Middle_Header from "./components/Middle_Header";
import SubNavbar from "./components/SubNavbar";
import backgroundSVG from "./assets/HeaderBackground.svg";

import Mukavva_cinsleri_background from "./assets/mukavva_cinsleri_background.svg";
import Kagit_cinsleri_background from "./assets/kagit_cinsleri_background.svg";

import "./App.css"; // Import the CSS file

const App = () => {
  const [Subheader, setSubheader] = useState(true); // State to control the visibility of elements
  const [BigHeader, setBigHeader] = useState("");
  const [blog_id, setBlogId] = useState(""); // State to manage blog_id

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

  const change_blog = (label, blog) => {
    setBlogId(label); // Update blog_id state with the new value
    setBigHeader(blog);
  };

  const SektorItems = [
    { name: "E-Ticaret", image: E_Ticaret, image_b: E_Ticaret_b },
    { name: "Endüstriyel", image: Edustriyel, image_b: Edustriyel_b },
    { name: "Elektrik- Elektronik", image: Elektrik, image_b: Elektrik_b },
    { name: "Perakende", image: Perakende, image_b: Perakende_b }, // Add image source
    { name: "Kozmetik", image: Kozmetik, image_b: Kozmetik_b },
    { name: "İlaç", image: İlac, image_b: İlac_b },
    { name: "Otomotiv", image: Otomotiv, image_b: Otomotiv_b },
  ];

  const UretimData = [
    {
      id: "1",
      header1: '"El emeğiyle şekillenen her kutu, bir sanat eseridir."',
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Doğuş",
      photoLink: photoUretim,
    },
    {
      id: "2",
      header1: "Subject 2 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject2",
      photoLink: photoUretim,
    },
    {
      id: "3",
      header1: "Subject 3 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject3",
      photoLink: photoUretim,
    },
    {
      id: "4",
      header1: "Subject 4 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject4",
      photoLink: photoUretim,
    },
    {
      id: "5",
      header1: "Subject 5 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject5",
      photoLink: photoUretim,
    },
    {
      id: "6",
      header1: "Subject 6 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject6",
      photoLink: photoUretim,
    },
    {
      id: "7",
      header1: "Subject 7 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject7",
      photoLink: photoUretim,
    },
    {
      id: "8",
      header1: "Subject 8 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject8",
      photoLink: photoUretim,
    },
  ];

  const YolculugumuzData = [
    {
      year1: "19",
      year2: "82",
      title: "Event 1",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "19",
      year2: "88",
      title: "Event 2",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "00",
      title: "Event 3",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "01",
      title: "Event 4",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "02",
      title: "Event 5",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "10",
      title: "Event 6",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "12",
      title: "Event 7",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "15",
      title: "Event 8",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "18",
      title: "Event 9",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
    {
      year1: "20",
      year2: "23",
      title: "Event 10",
      text: "1988 yılında x tarafından İstanbul'da kuruldu.",
    },
  ];

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

  const YonetimData = [
    {
      id: "1",
      Name: "Ayla Haktan",
      Position: "Genel Müdür",
      photoLink: Yonetim_image,
    },
    {
      id: "2",
      Name: "Ali Kara",
      Position: "Muhasebe Müdürü",
      photoLink: Yonetim_image,
    },
    {
      id: "3",
      Name: "Fatma Demir",
      Position: "İnsan Kaynakları Müdürü",
      photoLink: Yonetim_image,
    },
    {
      id: "4",
      Name: "Mehmet Yılmaz",
      Position: "Teknoloji Müdürü",
      photoLink: Yonetim_image,
    },
    {
      id: "5",
      Name: "Zeynep Güler",
      Position: "Pazarlama Müdürü",
      photoLink: Yonetim_image,
    },
    {
      id: "6",
      Name: "Hasan Karadeniz",
      Position: "Satış Müdürü",
      photoLink: Yonetim_image,
    },
    {
      id: "7",
      Name: "Selma Aksoy",
      Position: "Sosyal Medya Müdürü",
      photoLink: Yonetim_image,
    },
    {
      id: "8",
      Name: "Cemil Kılıç",
      Position: "Yazılım Geliştirme Müdürü",
      photoLink: Yonetim_image,
    },
    {
      id: "9",
      Name: "Elif Çelik",
      Position: "Veri Analisti",
      photoLink: Yonetim_image,
    },
    {
      id: "10",
      Name: "Ahmet Yıldız",
      Position: "Veri Yöneticisi",
      photoLink: Yonetim_image,
    },
  ];

  const blogData = [
    {
      id: 1,
      day: "27",
      month: "Şubat",
      title: "Cras lobortis libero a dignissim aliquet. ",
      content:
        "Suspendisse a enim id erat finibus ullamcorper vitae quis nisl. Curabitur a nisi libero. Suspendisse faucibus, neque id tempus dapibus, dolor sapien malesuada ante, sed hendrerit arcu sapien scelerisque arcu.",
      header: "header_1",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 2,
      day: "7",
      month: "Mart",
      title: "Blog Post 2",
      content: "Content of Blog Post 2",
      header: "header_2",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 3,
      day: "15",
      month: "Mayıs",
      title: "Blog Post 3",
      content: "Content of Blog Post 3",
      header: "header_3",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 4,
      day: "22",
      month: "Haziran",
      title: "Blog Post 4",
      content: "Content of Blog Post 4",
      header: "header_4",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 5,
      day: "10",
      month: "Ağustos",
      title: "Blog Post 5",
      content: "Content of Blog Post 5",
      header: "header_5",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 6,
      day: "3",
      month: "Ekim",
      title: "Blog Post 6",
      content: "Content of Blog Post 6",
      header: "header_6",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 7,
      day: "18",
      month: "Kasım",
      title: "Blog Post 7",
      content: "Content of Blog Post 7",
      header: "header_7",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 8,
      day: "5",
      month: "Ocak",
      title: "Blog Post 8",
      content: "Content of Blog Post 8",
      header: "header_8",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 9,
      day: "9",
      month: "Şubat",
      title: "Blog Post 9",
      content: "Content of Blog Post 9",
      header: "header_9",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 10,
      day: "11",
      month: "Mart",
      title: "Blog Post 10",
      content: "Content of Blog Post 10",
      header: "header_10",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 11,
      day: "20",
      month: "Nisan",
      title: "Blog Post 11",
      content: "Content of Blog Post 11",
      header: "header_11",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 12,
      day: "25",
      month: "Mayıs",
      title: "Blog Post 12",
      content: "Content of Blog Post 12",
      header: "header_12",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 13,
      day: "3",
      month: "Temmuz",
      title: "Blog Post 13",
      content: "Content of Blog Post 13",
      header: "header_13",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 14,
      day: "30",
      month: "Ağustos",
      title: "Blog Post 14",
      content: "Content of Blog Post 14",
      header: "header_14",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 15,
      day: "2",
      month: "Ekim",
      title: "Blog Post 15",
      content: "Content of Blog Post 15",
      header: "header_15",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 16,
      day: "12",
      month: "Kasım",
      title: "Blog Post 16",
      content: "Content of Blog Post 16",
      header: "header_16",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 17,
      day: "18",
      month: "Aralık",
      title: "Blog Post 17",
      content: "Content of Blog Post 17",
      header: "header_17",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 18,
      day: "5",
      month: "Ocak",
      title: "Blog Post 18",
      content: "Content of Blog Post 18",
      header: "header_18",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 19,
      day: "10",
      month: "Şubat",
      title: "Blog Post 19",
      content: "Content of Blog Post 19",
      header: "header_19",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 20,
      day: "15",
      month: "Mart",
      title: "Blog Post 20",
      content: "Content of Blog Post 20",
      header: "header_20",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 21,
      day: "20",
      month: "Nisan",
      title: "Blog Post 21",
      content: "Content of Blog Post 21",
      header: "header_21",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 22,
      day: "25",
      month: "Mayıs",
      title: "Blog Post 22",
      content: "Content of Blog Post 22",
      header: "header_22",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 23,
      day: "30",
      month: "Haziran",
      title: "Blog Post 23",
      content: "Content of Blog Post 23",
      header: "header_23",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 24,
      day: "5",
      month: "Ağustos",
      title: "Blog Post 24",
      content: "Content of Blog Post 24",
      header: "header_24",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 25,
      day: "10",
      month: "Eylül",
      title: "Blog Post 25",
      content: "Content of Blog Post 25",
      header: "header_25",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 26,
      day: "15",
      month: "Ekim",
      title: "Blog Post 26",
      content: "Content of Blog Post 26",
      header: "header_26",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 27,
      day: "20",
      month: "Kasım",
      title: "Blog Post 27",
      content: "Content of Blog Post 27",
      header: "header_27",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 28,
      day: "25",
      month: "Aralık",
      title: "Blog Post 28",
      content: "Content of Blog Post 28",
      header: "header_28",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 29,
      day: "30",
      month: "Ocak",
      title: "Blog Post 29",
      content: "Content of Blog Post 29",
      header: "header_29",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 30,
      day: "5",
      month: "Mart",
      title: "Blog Post 30",
      content: "Content of Blog Post 30",
      header: "header_30",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 31,
      day: "10",
      month: "Nisan",
      title: "Blog Post 31",
      content: "Content of Blog Post 31",
      header: "header_31",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 32,
      day: "15",
      month: "Mayıs",
      title: "Blog Post 32",
      content: "Content of Blog Post 32",
      header: "header_32",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 33,
      day: "20",
      month: "Haziran",
      title: "Blog Post 33",
      content: "Content of Blog Post 33",
      header: "header_33",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 34,
      day: "25",
      month: "Temmuz",
      title: "Blog Post 34",
      content: "Content of Blog Post 34",
      header: "header_34",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 35,
      day: "30",
      month: "Ağustos",
      title: "Blog Post 35",
      content: "Content of Blog Post 35",
      header: "header_35",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 36,
      day: "5",
      month: "Eylül",
      title: "Blog Post 36",
      content: "Content of Blog Post 36",
      header: "header_36",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 37,
      day: "10",
      month: "Ekim",
      title: "Blog Post 37",
      content: "Content of Blog Post 37",
      header: "header_37",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 38,
      day: "15",
      month: "Kasım",
      title: "Blog Post 38",
      content: "lorem ipsum",
      header: "header_38",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 39,
      day: "20",
      month: "Aralık",
      title: "Blog Post 39",
      content: "Content of Blog Post 39",
      header: "header_39",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 40,
      day: "25",
      month: "Ocak",
      title: "Blog Post 40",
      content: "Content of Blog Post 40",
      header: "header_40",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 41,
      day: "5",
      month: "Mart",
      title: "Blog Post 41",
      content: "Content of Blog Post 41",
      header: "header_41",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 42,
      day: "10",
      month: "Nisan",
      title: "Blog Post 42",
      content: "Content of Blog Post 42",
      header: "header_42",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 43,
      day: "15",
      month: "Mayıs",
      title: "Blog Post 43",
      content: "Content of Blog Post 43",
      header: "header_43",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 44,
      day: "20",
      month: "Haziran",
      title: "Blog Post 44",
      content: "Content of Blog Post 44",
      header: "header_44",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
    {
      id: 45,
      day: "25",
      month: "Temmuz",
      title: "Cras lobortis libero a dignissim aliquet. ",
      content:
        "Suspendisse a enim id erat finibus ullamcorper vitae quis nisl. Curabitur a nisi libero. Suspendisse faucibus, neque id tempus dapibus, dolor sapien malesuada ante, sed hendrerit arcu sapien scelerisque arcu.",
      header: "header_45",
      detail_content:
        "Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum.\n\n Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in. Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, \n\niaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna,\n\n vel fermentum elit posuere in.Mauris mollis convallis purus sed bibendum. Pellentesque non lacinia nulla, tempor congue nisl. Quisque at nibh elementum, iaculis justo a, ultricies tellus. Aliquam congue eleifend urna, vel fermentum elit posuere in.",
    },
  ];

  function reverseBlogData(blogData) {
    // Create a reversed copy of the array
    const reversedArray = blogData.slice().reverse();

    // Adjust the ids
    const reversedWithAdjustedIds = reversedArray.map((item, index) => ({
      ...item,
      id: blogData.length - index, // Adjusted id
    }));

    return reversedWithAdjustedIds;
  }

  const reversedBlogData = reverseBlogData(blogData);

  const SurdurData = [
    {
      id: 1,
      file: "belge 1",
      file_address: "belge - Kopya (1).pdf",
    },
    {
      id: 2,
      file: "belge 2",
      file_address: "belge - Kopya (2).pdf",
    },
    {
      id: 3,
      file: "belge 3",
      file_address: "belge - Kopya (3).pdf",
    },
    {
      id: 4,
      file: "belge 4",
      file_address: "belge - Kopya (4).pdf",
    },
    {
      id: 5,
      file: "belge 5",
      file_address: "belge - Kopya (5).pdf",
    },
    {
      id: 6,
      file: "belge 6",
      file_address: "belge - Kopya (6).pdf",
    },
    {
      id: 7,
      file: "belge 7",
      file_address: "belge - Kopya (7).pdf",
    },
    {
      id: 8,
      file: "belge 8",
      file_address: "belge - Kopya (8).pdf",
    },
    {
      id: 9,
      file: "belge 9",
      file_address: "belge - Kopya (9).pdf",
    },
    {
      id: 10,
      file: "belge 10",
      file_address: "belge - Kopya (10).pdf",
    },
    {
      id: 11,
      file: "belge 11",
      file_address: "belge - Kopya (11).pdf",
    },
    {
      id: 12,
      file: "belge 12",
      file_address: "belge - Kopya (12).pdf",
    },
    {
      id: 13,
      file: "belge 13",
      file_address: "belge - Kopya (13).pdf",
    },
    {
      id: 14,
      file: "belge 14",
      file_address: "belge - Kopya (14).pdf",
    },
    {
      id: 15,
      file: "belge 15",
      file_address: "belge - Kopya (15).pdf",
    },
    {
      id: 16,
      file: "belge 16",
      file_address: "belge - Kopya (16).pdf",
    },
    {
      id: 17,
      file: "belge 17",
      file_address: "belge - Kopya (17).pdf",
    },
    {
      id: 18,
      file: "belge 18",
      file_address: "belge - Kopya (18).pdf",
    },
    {
      id: 19,
      file: "belge 19",
      file_address: "belge - Kopya (19).pdf",
    },
  ];

  const UrunData = [
    {
      id: 1,
      file: "MEŞRUBAT KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 2,
      file: "CAM ŞİŞE TAŞIYICI KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_2",
    },
    {
      id: 3,
      file: "SEKİZGEN OKTOBİN KUTU KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_3",
    },
    {
      id: 4,
      file: "MEŞRUBAT KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 5,
      file: "CAM ŞİŞE TAŞIYICI KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 6,
      file: "SEKİZGEN OKTOBİN KUTU KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 7,
      file: "MEŞRUBAT KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 8,
      file: "CAM ŞİŞE TAŞIYICI KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 9,
      file: "SEKİZGEN OKTOBİN KUTU KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 10,
      file: "MEŞRUBAT KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 11,
      file: "CAM ŞİŞE TAŞIYICI KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 12,
      file: "SEKİZGEN OKTOBİN KUTU KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 3,
      file: "MEŞRUBAT KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 14,
      file: "CAM ŞİŞE TAŞIYICI KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 15,
      file: "SEKİZGEN OKTOBİN KUTU KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 16,
      file: "MEŞRUBAT KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 17,
      file: "CAM ŞİŞE TAŞIYICI KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 18,
      file: "SEKİZGEN OKTOBİN KUTU KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 19,
      file: "MEŞRUBAT KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
    {
      id: 20,
      file: "CAM ŞİŞE TAŞIYICI KUTUSU",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor..",
      image: "kutu_1",
    },
  ];

  const photoMakina =
    "https://s3-alpha-sig.figma.com/img/6637/7c4a/aae7adfd6e7437b49f5ef3db871c9446?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZQXw76Kw1EIJNdjZAbSoDEbKzmBVraO7-vHGztY4VJxtBRrV6q-vzduelmAHeQ9nFlAOF0zETk4dZq0aLHbZQsg52DtTGCVOSdOINtZqLLxnSrwXSyeioxfyBwv~pH8dpkriWo4U~b43Hy0jks9rBH2ZEPwMG9Qy8Gnb~TpoxE0llncq6nTljHJy5YzEeYP0QhPiyJBz7OmGNsnfyjeU-l4d9d5vF9Y4yfhrhkx4kBmGuvhfje8purC2P1bM9sw-1-Rf7tMntkFiP4Vhywquy3a8OYcKn2ZaY5Wef~fQqpp7JG2rQF6B0~N0FhBmkndhldO-XdzSH7xF8gHA3hFINA__";

  const MakinaData = [
    {
      id: "1",
      header1: "Makina Parkurlarımız",
      detail:
        '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      header2: "173 cm B+C",
      header3: "Oluklu Mukavva Hattı",
      photoLink: photoMakina,
    },
    {
      id: "2",
      header1: "Subject 2 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "173 cm B+C",
      header3: "Oluklu Mukavva Hattı",
      photoLink: photoMakina,
    },
    {
      id: "3",
      header1: "Subject 3 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "173 cm B+C",
      header3: "Oluklu Mukavva Hattı",
      photoLink: photoMakina,
    },
    {
      id: "4",
      header1: "Subject 4 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "173 cm B+C",
      header3: "Oluklu Mukavva Hattı",
      photoLink: photoMakina,
    },
    {
      id: "5",
      header1: "Subject 5 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "173 cm B+C",
      header3: "Oluklu Mukavva Hattı",
      photoLink: photoMakina,
    },
    {
      id: "6",
      header1: "Subject 6 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "173 cm B+C",
      header3: "Oluklu Mukavva Hattı",
      photoLink: photoMakina,
    },
    {
      id: "7",
      header1: "Subject 7 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "173 cm B+C",
      header3: "Oluklu Mukavva Hattı",
      photoLink: photoMakina,
    },
    {
      id: "8",
      header1: "Subject 8 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "173 cm B+C",
      header3: "Oluklu Mukavva Hattı",
      photoLink: photoMakina,
    },
  ];

  const photoKukavva =
    "https://s3-alpha-sig.figma.com/img/2045/19d3/c70ec48f61b5a940593a67768df8830d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lSHecsfchtZH89Ygv6wyy5PciSK2LXwSkwdZ4D131xTtgJ~lX0dqgbD7vBq8NyTqDQDnok5wIdkAfpv2GvReNZkdHWsxbEzI~OIquVyluc81Fhae6QzWdEYDR4MbAaskwxsvsJj~uCd194RKnb1-ef7xp9BOL-G0hppYzXNU92OWjxlNYeg404yf1yp3CxYxMEOpW7goTosne-xNuHgxcMI~c5NQywh4qUT9jvjl5fw6~Nc2UqSQnThEUmB6OGxp0rKfRoRDbYNy3LzSCwLQlQZkfeg3Xdvmt2gsiWe8osKyejjKlJq3NWNgUXcOKCvk6BUchdUdlsqNMBQBmwtSwA__";

  const MukavvaData = [
    {
      id: "1",
      header1: "Oluklu Mukavva Cinsleri",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photoKukavva,
    },
    {
      id: "2",
      header1: "Oluklu Mukavva Cinsleri - 2",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photoKukavva,
    },
    {
      id: "3",
      header1: "Oluklu Mukavva Cinsleri - 3",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photoKukavva,
    },
    {
      id: "4",
      header1: "Oluklu Mukavva Cinsleri - 4",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photoKukavva,
    },
    {
      id: "5",
      header1: "Oluklu Mukavva Cinsleri - 5",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photoKukavva,
    },
    {
      id: "6",
      header1: "Oluklu Mukavva Cinsleri - 6",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photoKukavva,
    },
    {
      id: "7",
      header1: "Oluklu Mukavva Cinsleri - 7",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photoKukavva,
    },
    {
      id: "8",
      header1: "Oluklu Mukavva Cinsleri - 8",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photoKukavva,
    },
  ];

  const photokagit =
    "https://s3-alpha-sig.figma.com/img/fb89/92dc/e97cc528853ef71ee92955a11c366ffa?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vhh1aQGsWZY-yaau3jvyoITDp2twQVHeN4seqWQpCLrGwtlTxisbPYWW-AC3NBhC5q8SDtTGIzLDPgLNmRWGqYf5WtKDx6F3VaMVREHHm4JsYuy81F6TNuegePqCcYjQPQUkLPnf1bqTf3OQIu~eI1I5hkDOvOvTTzaHbjl~ptnZLd4jwT8CLkitZck1-XW-eiFvhR4laMvjVRyT96V3Kdbw5IsFRMLBKCWwH7WLpMgShREaBts7R6sj6gu-HrE7pmrGtNryX9GALz8Dmf00wIhEDma3XAAgqwSrYmmoL0OzS0C93FYhDsXdBkN9QmGF5LKpecnYnNLVGRwRsV~0sg__";

  const KagitData = [
    {
      id: "1",
      header1: "Kağıt Cinsleri",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photokagit,
    },
    {
      id: "2",
      header1: "Kağıt Cinsleri - 2",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photokagit,
    },
    {
      id: "3",
      header1: "Kağıt Cinsleri - 3",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photokagit,
    },
    {
      id: "4",
      header1: "Kağıt Cinsleri - 4",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photokagit,
    },
    {
      id: "5",
      header1: "Kağıt Cinsleri - 5",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photokagit,
    },
    {
      id: "6",
      header1: "Kağıt Cinsleri - 6",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photokagit,
    },
    {
      id: "7",
      header1: "Kağıt Cinsleri - 7",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photokagit,
    },
    {
      id: "8",
      header1: "Kağıt Cinsleri - 8",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      header2: "E Dalga",
      header3: "Oluklu Mukavva",
      photoLink: photokagit,
    },
  ];

  const Diger_Sektorler_Data = [
    {
      id: "1",
      Title: "Otomotiv",
      Text:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      photoLink: Kutu_1,
    },
    {
      id: "2",
      Title: "Elektronik",
      Text:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      photoLink: Kutu_1,
    },
    {
      id: "3",
      Title: "Otomotiv",
      Text:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      photoLink: Kutu_1,
    },
    {
      id: "4",
      Title: "Elektronik",
      Text:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      photoLink: Kutu_1,
    },
    {
      id: "5",
      Title: "Otomotiv",
      Text:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      photoLink: Kutu_1,
    },
    {
      id: "6",
      Title: "Elektronik",
      Text:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      photoLink: Kutu_1,
    },
    {
      id: "7",
      Title: "Otomotiv",
      Text:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      photoLink: Kutu_1,
    },
    {
      id: "8",
      Title: "Elektronik",
      Text:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      photoLink: Kutu_1,
    },
    {
      id: "9",
      Title: "Otomotiv",
      Text:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      photoLink: Kutu_1,
    },
    {
      id: "10",
      Title: "Elektronik",
      Text:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      photoLink: Kutu_1,
    },
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
            <Sektorler SektorItems={SektorItems} />
            <Right_Header sectorLabel={"Üretim"} />
            <Uretim UretimData={UretimData} />
            <Left_Header sectorLabel={"Yolculuğumuz"} />
            <Yolculugumuz YolculugumuzData={YolculugumuzData} />
          </div>
        ) : (
          <div className="slide-up">
            {BigHeader === "Main" && (
              <>
                <Acilis_Sayfasi change_page={change_page} />
                <Left_Header sectorLabel={"Sektörler"} />
                <Sektorler SektorItems={SektorItems} />
                <Right_Header sectorLabel={"Üretim"} />
                <Uretim UretimData={UretimData} />
                <Left_Header sectorLabel={"Yolculuğumuz"} />
                <Yolculugumuz YolculugumuzData={YolculugumuzData} />
              </>
            )}

            {BigHeader === "Kurumsal" && (
              <>
                <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
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
              </>
            )}

            {BigHeader === "Üretim" && (
              // add your Main content here
              <>
                {" "}
                <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
                <Tanitim_Filmi />
                <Kapasite />
                <Arka_Plan
                  pagerData={MakinaData}
                  Mukavva_cinsleri_background={""}
                  name={"Makina"}
                />
              </>
            )}
            {BigHeader === "Ürünler" && (
              // add your Main content here
              <>
                {" "}
                <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
                <Urunler_Filmi />
                <Middle_Header MiddleLabel={"Tüm Ürünler"} />
                <Urunler UrunData={UrunData} />
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
              </>
            )}
            {BigHeader === "Blog" && (
              // add your Main content here
              <>
                {" "}
                <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
                <Blog blogData={reversedBlogData} change_blog={change_blog} />
              </>
            )}
            {BigHeader === "Perakende" && (
              // add your Main content here
              <>
                {" "}
                <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
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
              </>
            )}
            {BigHeader === "İletişim" && (
              // add your Main content here
              <>
                {" "}
                <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
                <Iletisim />
              </>
            )}
            {BigHeader === "Sürdürülebilirlik" && (
              // add your Main content here
              <>
                {" "}
                <SubNavbar change_page={change_page} sectorLabel={BigHeader} />
                <Surdurulebilirlik SurdurData={SurdurData} />
              </>
            )}
            {BigHeader === "BlogDetail" && (
              // add your Main content here
              <>
                {" "}
                <SubNavbar change_page={change_page} sectorLabel={"Blog"} />
                <BlogDetail Blog_Detail={blog_id} all_data={blogData} />
              </>
            )}
          </div>
        )}
        <Footer change_page={change_page} />
      </div>
    </div>
  );
};

export default App;
