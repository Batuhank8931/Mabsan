import photoUretim from "../assets/Uretim_ornek.png";

import E_Ticaret from "../assets/e_ticaret.svg";
import Edustriyel from "../assets/endustriyel.svg";
import Elektrik from "../assets/elektrik.svg";
import Perakende from "../assets/perakende.svg";
import Kozmetik from "../assets/kozmetik.svg";
import İlac from "../assets/ilac.svg";
import Otomotiv from "../assets/otomotiv.svg";

import teknik_kutu from "../assets/teknik_kutu.png";
import acik_kutu from "../assets/acik_kutu.png";

import E_Ticaret_b from "../assets/e_ticaret_b.svg";
import Edustriyel_b from "../assets/endustriyel_b.svg";
import Elektrik_b from "../assets/elektrik_b.svg";
import Perakende_b from "../assets/perakende_b.svg";
import Kozmetik_b from "../assets/kozmetik_b.svg";
import İlac_b from "../assets/ilac_b.svg";
import Otomotiv_b from "../assets/otomotiv_b.svg";

import Yonetim_image from "../assets/yonetim.png";
import Discover_1 from "../assets/Discover_1.svg";
import Discover_2 from "../assets/Discover_2.svg";
import Kutu_1 from "../assets/Urunler/kutu_1.png";
import Makina_Data from "../assets/Makina_Data.png";
import Mabsan_Way_image from "../assets/image_1.svg";
import Mukavva_Data from "../assets/Mukavva_Data.png";

const SektorItems = [
  { name: "E-Ticaret", image: E_Ticaret, image_b: E_Ticaret_b, way:"eticaret", video:"apples.mp4" , header:"E-Ticaret Ürünleri", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim sem, tincidunt sed aliquam quis, cursus quis tortor. Vestibulum nec lacinia massa. Vivamus pulvinar vel ante ac facilisis. Fusce vitae dignissim odio, eget fermentum metus. Pellentesque semper posuere molestie. Proin ultricies rutrum tortor ut tristique. Proin placerat risus et erat cursus consequat.", teknik_kutu:teknik_kutu, acik_kutu:acik_kutu, data_1:"30", data_2:"30", data_3:"30", data_4:"30", data_5:"30" },
  { name: "Endüstriyel", image: Edustriyel, image_b: Edustriyel_b, way:"endustriyel", video:"apples.mp4" , header:"Endüstriyel Ürünleri", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim sem, tincidunt sed aliquam quis, cursus quis tortor. Vestibulum nec lacinia massa. Vivamus pulvinar vel ante ac facilisis. Fusce vitae dignissim odio, eget fermentum metus. Pellentesque semper posuere molestie. Proin ultricies rutrum tortor ut tristique. Proin placerat risus et erat cursus consequat.", teknik_kutu:teknik_kutu, acik_kutu:acik_kutu, data_1:"30", data_2:"30", data_3:"30", data_4:"30", data_5:"30" },
  { name: "Elektrik- Elektronik", image: Elektrik, image_b: Elektrik_b, way:"elektrikelektronik", video:"apples.mp4" , header:"Elektrik-Elektronik Ürünleri", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim sem, tincidunt sed aliquam quis, cursus quis tortor. Vestibulum nec lacinia massa. Vivamus pulvinar vel ante ac facilisis. Fusce vitae dignissim odio, eget fermentum metus. Pellentesque semper posuere molestie. Proin ultricies rutrum tortor ut tristique. Proin placerat risus et erat cursus consequat.", teknik_kutu:teknik_kutu, acik_kutu:acik_kutu, data_1:"30", data_2:"30", data_3:"30", data_4:"30", data_5:"30" },
  { name: "Perakende", image: Perakende, image_b: Perakende_b, way:"preakende", video:"apples.mp4" , header:"Perakende Ürünleri", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim sem, tincidunt sed aliquam quis, cursus quis tortor. Vestibulum nec lacinia massa. Vivamus pulvinar vel ante ac facilisis. Fusce vitae dignissim odio, eget fermentum metus. Pellentesque semper posuere molestie. Proin ultricies rutrum tortor ut tristique. Proin placerat risus et erat cursus consequat.", teknik_kutu:teknik_kutu, acik_kutu:acik_kutu, data_1:"30", data_2:"30", data_3:"30", data_4:"30", data_5:"30" },
  { name: "Kozmetik", image: Kozmetik, image_b: Kozmetik_b, way:"kozmetik", video:"apples.mp4" , header:"Kozmetik Ürünleri", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim sem, tincidunt sed aliquam quis, cursus quis tortor. Vestibulum nec lacinia massa. Vivamus pulvinar vel ante ac facilisis. Fusce vitae dignissim odio, eget fermentum metus. Pellentesque semper posuere molestie. Proin ultricies rutrum tortor ut tristique. Proin placerat risus et erat cursus consequat.", teknik_kutu:teknik_kutu, acik_kutu:acik_kutu, data_1:"30", data_2:"30", data_3:"30", data_4:"30", data_5:"30" },
  { name: "İlaç", image: İlac, image_b: İlac_b, way:"ilac", video:"apples.mp4" , header:"İlaç Ürünleri", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim sem, tincidunt sed aliquam quis, cursus quis tortor. Vestibulum nec lacinia massa. Vivamus pulvinar vel ante ac facilisis. Fusce vitae dignissim odio, eget fermentum metus. Pellentesque semper posuere molestie. Proin ultricies rutrum tortor ut tristique. Proin placerat risus et erat cursus consequat.", teknik_kutu:teknik_kutu, acik_kutu:acik_kutu, data_1:"30", data_2:"30", data_3:"30", data_4:"30", data_5:"30" },
  { name: "Otomotiv", image: Otomotiv, image_b: Otomotiv_b, way:"otomotiv", video:"apples.mp4" , header:"Otomotiv Ürünleri", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim sem, tincidunt sed aliquam quis, cursus quis tortor. Vestibulum nec lacinia massa. Vivamus pulvinar vel ante ac facilisis. Fusce vitae dignissim odio, eget fermentum metus. Pellentesque semper posuere molestie. Proin ultricies rutrum tortor ut tristique. Proin placerat risus et erat cursus consequat.", teknik_kutu:teknik_kutu, acik_kutu:acik_kutu, data_1:"30", data_2:"30", data_3:"30", data_4:"30", data_5:"30" },
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

const Paragraflar = {
  hakkimizda:
    "Mabsan Oluklu Mukavva Kutu San. ve Tic.Ltd.Şti 1988 yılında hizmete açılmış olup, sürekli gelişip hizmet kalitesini arttırak günümüz teknolojisiyle beraber kaliteli ve güvenilir çalışmalarına devam etmektedir. Geniş müşteri portföyü ve kaliteli ürün yelpazesi ile sektörünün önde gelen firmalarından olan firmamız, güncel teknolojik gelişmeleri üretim sürecinin her aşamasında kullanarak, yüksek kalite standartlarını hedefe ulaşmasındaki büyük dayanak olarak görmüştür.\n\nHızla büyümelerini 'Doğru ve Kaliteli' hizmet anlayışına borçlu olan firmamız, ilkelerinden taviz vermeden, istikrarlı büyümesi ile de sektörünün saygın firmaları arasındaki yerini gün geçtikçe sağlamlaştırmaktadır.\n\nMüşteri memnuniyetimizden aldığımız güç ile iç piyasada daha da büyümeyi hedeflemekteyiz.",
  misyon:
    "Mabsan Ailesi olarak misyonumuz, etik ilkelerden asla ödün vermeden genç, dinamik, lider kişilikli kadrosu ile teknolojik gelişmeleri takip eden ve faaliyet alanlarında uygulayan, tüketicilerine, tedarikçilerine memnuniyet odaklı hizmet anlayışını benimsemiş ve sürdürmeyi ilke edinmiştir. Sektörünün gelişimine, kapsamlı, yenilikçi, çeşitli piyasa segmentlerinin beklentilerini ve gereksinimlerini karşılayan, kaliteli ürün ve hizmetlerin sunumu ile katkı sağlamaktır. Müşteri beklentilerini, yeni ürünleri ve hizmetleri ile büyümek, geldiğimiz konumda da siz paydaşlarına artan katma değer kazandırmaktır.",
  vizyon:
    "\n\u2022 Koşulsuz müşteri memnuniyeti sağlamak,\n\u2022 Sektörünün önde gelen firmaları arasında kalıcığını korumak,\n\u2022 Güçlü büyüme ile siz müşterilerimize kalıcı değer yaratmak, \n\u2022Karlılığınızı, bilinirliğinizi ve markanızın yapısını korumak, \n\u2022Kalitede ve üretimde lider olmak.",
};

const Cards = {
  value1: "Discover New Opportunities",
  value2: `At Mabsan Way, we pride ourselves on our unique approach to cardboard production. Our way is defined by a steadfast commitment to sustainability, where every fold and crease in our cardboard products reflects our dedication to minimizing environmental impact.`,
  value3: "Discover",
  value4: Discover_1,
  value5: Discover_2,
};

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
  }
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

const MakinaData = [
  {
    id: "1",
    header1: "Makina Parkurlarımız",
    detail:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    header2: "173 cm B+C",
    header3: "Oluklu Mukavva Hattı",
    photoLink: Makina_Data,
  },
  {
    id: "2",
    header1: "Subject 2 Header",
    detail:
      "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
    header2: "173 cm B+C",
    header3: "Oluklu Mukavva Hattı",
    photoLink: Makina_Data,
  },
  {
    id: "3",
    header1: "Subject 3 Header",
    detail:
      "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
    header2: "173 cm B+C",
    header3: "Oluklu Mukavva Hattı",
    photoLink: Makina_Data,
  },
  {
    id: "4",
    header1: "Subject 4 Header",
    detail:
      "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
    header2: "173 cm B+C",
    header3: "Oluklu Mukavva Hattı",
    photoLink: Makina_Data,
  },
  {
    id: "5",
    header1: "Subject 5 Header",
    detail:
      "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
    header2: "173 cm B+C",
    header3: "Oluklu Mukavva Hattı",
    photoLink: Makina_Data,
  },
  {
    id: "6",
    header1: "Subject 6 Header",
    detail:
      "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
    header2: "173 cm B+C",
    header3: "Oluklu Mukavva Hattı",
    photoLink: Makina_Data,
  },
  {
    id: "7",
    header1: "Subject 7 Header",
    detail:
      "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
    header2: "173 cm B+C",
    header3: "Oluklu Mukavva Hattı",
    photoLink: Makina_Data,
  },
  {
    id: "8",
    header1: "Subject 8 Header",
    detail:
      "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
    header2: "173 cm B+C",
    header3: "Oluklu Mukavva Hattı",
    photoLink: Makina_Data,
  },
];

const Mabsan_Way = {
  value1: "The Mabsan Way",
  value2: `
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    `,
  value3: "Our Strategy",
  value4: Mabsan_Way_image,
};

const MukavvaData = [
  {
    id: "1",
    header1: "Oluklu Mukavva Cinsleri",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
  {
    id: "2",
    header1: "Oluklu Mukavva Cinsleri - 2",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
  {
    id: "3",
    header1: "Oluklu Mukavva Cinsleri - 3",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
  {
    id: "4",
    header1: "Oluklu Mukavva Cinsleri - 4",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
  {
    id: "5",
    header1: "Oluklu Mukavva Cinsleri - 5",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
  {
    id: "6",
    header1: "Oluklu Mukavva Cinsleri - 6",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
  {
    id: "7",
    header1: "Oluklu Mukavva Cinsleri - 7",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
  {
    id: "8",
    header1: "Oluklu Mukavva Cinsleri - 8",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
];

const KagitData = [
  {
    id: "1",
    header1: "Kağıt Cinsleri",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
  {
    id: "2",
    header1: "Kağıt Cinsleri - 2",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
  {
    id: "3",
    header1: "Kağıt Cinsleri - 3",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
  {
    id: "4",
    header1: "Kağıt Cinsleri - 4",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
  {
    id: "5",
    header1: "Kağıt Cinsleri - 5",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
  {
    id: "6",
    header1: "Kağıt Cinsleri - 6",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
  {
    id: "7",
    header1: "Kağıt Cinsleri - 7",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
  {
    id: "8",
    header1: "Kağıt Cinsleri - 8",
    detail:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
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

const Main_Data = {
  SektorItems: SektorItems,
  UretimData: UretimData,
  YolculugumuzData: YolculugumuzData,
  Paragraflar: Paragraflar,
  Cards: Cards,
  YonetimData: YonetimData,
  blogData: blogData,
  reversedBlogData: reversedBlogData,
  SurdurData: SurdurData,
  UrunData: UrunData,
  MakinaData: MakinaData,
  Mabsan_Way: Mabsan_Way,
  MukavvaData: MukavvaData,
  KagitData: KagitData,
  Diger_Sektorler_Data: Diger_Sektorler_Data,
};

export default Main_Data;
