

import kart_1 from "../assets/kart_1.png";
import kart_2 from "../assets/kart_2.png";
import kart_3 from "../assets/kart_3.png";
import kart_4 from "../assets/kart_4.png";


import E_Ticaret from "../assets/e_ticaret.svg";
import Edustriyel from "../assets/endustriyel.svg";
import Perakende from "../assets/perakende.svg";
import Kozmetik from "../assets/kozmetik.svg";
import Otomotiv from "../assets/otomotiv.svg";
import teknik_kutu from "../assets/teknik_kutu.png";
import acik_kutu from "../assets/acik_kutu.png";
import Yasmeyvesebze from "../assets/yasmeyvesebze.svg";
import FMCG from "../assets/ilac.svg";
import FMCG_b from "../assets/ilac_b.svg";
import Takeaway from "../assets/takeaway.svg";

import Yasmeyvesebze_b from "../assets/yasmeyvesebze_b.svg";
import E_Ticaret_b from "../assets/e_ticaret_b.svg";
import Edustriyel_b from "../assets/endustriyel_b.svg";
import Takeaway_b from "../assets/takeaway_b.svg";
import Perakende_b from "../assets/perakende_b.svg";
import Kozmetik_b from "../assets/kozmetik_b.svg";
import Otomotiv_b from "../assets/otomotiv_b.svg";

import Yonetim_image from "../assets/yonetim.png";
import Discover_1 from "../assets/Discover_1.svg";
import Discover_2 from "../assets/Discover_2.svg";
import Kutu_1 from "../assets/Urunler/kutu_1.png";
import Makina_Data from "../assets/Makina_Data.png";
import Mabsan_Way_image from "../assets/image_1.svg";
import Mukavva_Data from "../assets/Mukavva_Data.png";

const SektorItems = [
  {
    name: "E-Ticaret",
    image: E_Ticaret,
    image_b: E_Ticaret_b,
    way: "eticaret",
    video: "eticaret.mp4",
    header: "E-Ticaret Ürünleri",
    info:
      "Koşullar ne olursa olsun satışın 7/24 devam etmesi gereken e-ticaret sektöründe hız ve güven kilit önem taşır. E-ticaret uzmanlığımızla, online işletmeniz ve müşterileriniz için güvenilir, yenilikçi ve sürdürülebilir çözümler sunacağımıza güvenebilirsiniz.",
    teknik_kutu: teknik_kutu,
    acik_kutu: acik_kutu,
    data_1: "30",
    data_2: "30",
    data_3: "30",
    data_4: "30",
    data_5: "30",
  },
  {
    name: "Endüstriyel",
    image: Edustriyel,
    image_b: Edustriyel_b,
    way: "endustriyel",
    video: "endustriyel.mp4",
    header: "Endüstriyel Ürünleri",
    info:
      "Endüstriyel pazarda ürünün güvenliği her şeyden önemlidir. Ağır ve hantal ürünlerden tehlikeli maddelere kadar, endüstriyel ürünlerin lojistik zorluklarına dayanabilecek esnek seçenekler sunmak kritik önem taşır. Bu nedenle oluklu mukavva çözümlerimiz, nakliye sırasında dayanıklılık ve güvenilirlik sağlamak için kapsamlı testlerden geçirilir.",
    teknik_kutu: teknik_kutu,
    acik_kutu: acik_kutu,
    data_1: "30",
    data_2: "30",
    data_3: "30",
    data_4: "30",
    data_5: "30",
  },
  {
    name: "Perakende",
    image: Perakende,
    image_b: Perakende_b,
    way: "perakende",
    video: "perakende.mp4",
    header: "Perakende Ürünleri",
    info:
      "Günümüz tüketicilerinin satın alma kararlarında paketlemenin gücü tartışılmaz. Sadece tasarım değil güvenli ve kullanıcı davranışlarının hesaba katıldığı paketlemeler satışlarda büyük farklar yaratır. Ulusal ve uluslararası pek çok perakende markasıyla edindiğimiz deneyimimize güvenebilirsiniz.",
    teknik_kutu: teknik_kutu,
    acik_kutu: acik_kutu,
    data_1: "30",
    data_2: "30",
    data_3: "30",
    data_4: "30",
    data_5: "30",
  },
  {
    name: "Kozmetik",
    image: Kozmetik,
    image_b: Kozmetik_b,
    way: "kozmetik",
    video: "kozmetik.mp4",
    header: "Kozmetik Ürünleri",
    info:
      "Rekabetin yüksek olduğu kozmetik pazarında, markaların mevcut ve yeni tüketicilerin akıllarında kalması zorlaşıyor. Bu da görsel ve doku alanında sürekli inovasyona ihtiyaç duyulmasına neden oluyor. Güvenilir ve yaratıcı bir iş ortağı olarak, ürünlerinizin öne çıkmasına yardımcı olmak için yanınızdayız. ",
    teknik_kutu: teknik_kutu,
    acik_kutu: acik_kutu,
    data_1: "30",
    data_2: "30",
    data_3: "30",
    data_4: "30",
    data_5: "30",
  },
  {
    name: "Yaş Meyve-Sebze",
    image: Yasmeyvesebze,
    image_b: Yasmeyvesebze_b,
    way: "yasmeyvesebze",
    video: "yasmeyvesebze.mp4",
    header: "Yaş Meyve-Sebze Ürünleri",
    info:
      "Tedarik zinciri boyunca bozulmaya karşı koruma gerektiren yüksek hacimli yaş meyve-sebze ürünlerinde, güçlü ve güvenilir paketleme çözümleri kullanmak çok önemlidir. Her ürün türü için özenle tasarlanmış kâğıt bazlı çözümlerimiz, sürdürülebilirlik vaadimizi yerine getirirken, gıda ürünlerini korumak için tasarlanmış, test edilmiş ve üretilmiştir.",
    teknik_kutu: teknik_kutu,
    acik_kutu: acik_kutu,
    data_1: "30",
    data_2: "30",
    data_3: "30",
    data_4: "30",
    data_5: "30",
  },
  {
    name: "FMCG",
    image: FMCG,
    image_b: FMCG_b,
    way: "FMCG",
    video: "FMCG.mp4",
    header: "FMCG Ürünleri",
    info:
      "Hızlı tüketim ürünlerinde ambalaj ve teşhirler, tüketicileri karar anlarında etkilemek için kritik araçlardır. Ürünlerinizin fark yaratması ve tedarik zincirinde verimliliği korumak için kapsamlı FMCG deneyimimizden yararlanıyoruz. ",
    teknik_kutu: teknik_kutu,
    acik_kutu: acik_kutu,
    data_1: "30",
    data_2: "30",
    data_3: "30",
    data_4: "30",
    data_5: "30",
  },
  {
    name: "Otomotiv",
    image: Otomotiv,
    image_b: Otomotiv_b,
    way: "otomotiv",
    video: "otomotiv.mp4",
    header: "Otomotiv Ürünleri",
    info:
      "İster küçük ister büyük, ister hafif ister ağır bileşenleri paketliyor olalım, amaca uygun ve sürdürülebilir paketleme çözümleri sunmak için kanıtlanmış bilimsel yöntemler kullanıyoruz. Sürtünmeye ve korozyona dayanıklı paketler de dahil olmak üzere ürün yelpazemiz, tedarik zincirinizin fiziksel gereksinimlerini karşılamak için tasarlanmıştır.",
    teknik_kutu: teknik_kutu,
    acik_kutu: acik_kutu,
    data_1: "30",
    data_2: "30",
    data_3: "30",
    data_4: "30",
    data_5: "30",
  },
  {
    name: "Take-Away",
    image: Takeaway,
    image_b: Takeaway_b,
    way: "takeaway",
    video: "takeaway.mp4",
    header: "Take-Away Ürünleri",
    info:
      "Fast-food zincirlerinden fine dining restoranlarına kadar günümüzün yeme-içme sektöründe hizmet verenlere çevresel etkilerini önemsiyor; plastik yerine kâğıt bazlı paketleri tercih ediyor. Take-away veya paket servislerinizde müşterilerinizin memnuniyetini garantiye almak için bize güvenebilirsiniz.",
    teknik_kutu: teknik_kutu,
    acik_kutu: acik_kutu,
    data_1: "30",
    data_2: "30",
    data_3: "30",
    data_4: "30",
    data_5: "30",
  }
];

const UretimData = [
  {
    id: "1",
    header1: '"Sürdürülebilir bir dünya için ilk adımımız geri dönüşüm."',
    detail:
      "Hurda kâğıtları, çevre dostu geri dönüşüm sürecinden geçirerek dünyaya yeniden kazandırıyoruz.",
    header2: "Geri Dönüşüm",
    photoLink: kart_1,
  },
  {
    id: "2",
    header1: "Ürünlerinizi korumak için teknolojiye güveniyoruz.",
    detail:
      "Geri dönüştürülen malzemeler, yüksek teknolojili makinelerle sağlam ve dayanıklı bobin kâğıtlara dönüştürülüyor.",
    header2: "Yüksek Teknoloji",
    photoLink: kart_2,
  },
  {
    id: "3",
    header1: "36 yıllık tecrübemizle en iyi bildiğimiz işi yapıyoruz.",
    detail:
      "Kâğıt bobinlerini, oluklu mukavva makinelerinde işleyerek oluk formunu veriyoruz. Düz kâğıtları ve oluk formu kazandırılmış kâğıtları birleştirerek düz tabaka mukavva üretimine geçiyoruz.",
    header2: "Oluklu Mukavva",
    photoLink: kart_3,
  },
  {
    id: "4",
    header1: "Marka itibarınız için fark yaratan çözümler tasarlıyoruz.",
    detail:
      "Oluklu mukavva levhaları, hassas kesim, baskı ve özel yapıştırma işlemlerinden geçirerek son ürün olan koli ve kutulara dönüştürüyoruz.",
    header2: "Markaya Özel Çözümler",
    photoLink: kart_4,
  }
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
    "1988 yılından bu yana ulusal ve uluslararası markaların paketleme çözümlerinde güvenilir ortağı olmaktan gurur duyuyoruz. Bu güveni; sürekli gelişime olan cesaretimizle, global üretim standartlarına bağlılığımızla, teknoloji yatırımlarımızla ve her müşterimize eşit özen yaklaşımımızla kazandık. \n\n Geniş müşteri portföyümüz ve kaliteli ürün yelpazemiz sayesinde sektörümüzün önde gelen firmalarından biri haline geldik. İlkelerimizden asla taviz vermeden, istikrarlı büyümemiz sayesinde sektörümüzün en saygın firmaları arasındaki konumumuzu güçlendiriyoruz. \n\n",
  misyon:
    "Kaliteli ürünler, yenilikçi tasarımlar ve uzun soluklu güvene dayalı müşteri ilişkileriyle çalıştığımız markaların itibarına ve iş süreçlerine katma değer kazandırırız. ",
  vizyon:
    "Oluklu mukavva sektörünün sürdürülebilir dönüşümünde öncü üreticilerden biri olarak perakendeden otomotive her sektörde en güvenilir iş ortağı olmak. ",
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
  },
];

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
      "En küçük dalga formuna sahip olan E-dalga, ince ve hafif ürün ihtiyacı olan müşterilerimiz için ideal bir çözüm sunar. Ambalaj, kutu ve karton üretiminde sıklıkla tercih edilir.",
    header2: "E Dalga",
    header3: "Oluklu Mukavva",
    photoLink: Mukavva_Data,
  },
  {
    id: "2",
    header1: "Oluklu Mukavva Cinsleri",
    detail:
      "Orta büyüklükteki dalga formuna sahip olan B-dalga, dayanıklılık gerektiren ürünler için sıklıkla kullanılır. Elektronik, beyaz eşya ve diğer sanayi ürünlerinin ambalajlanmasında tercih edilir.",
      header2: "B Dalga",
      header3: "Oluklu Mukavva",
      photoLink: Mukavva_Data,
  },
  {
    id: "3",
    header1: "Oluklu Mukavva Cinsleri",
    detail:
      "Daha büyük dalga formuna sahip olan C-dalga, süpermarket ürünleri, endüstriyel ve tarımsal ürünlerin ambalajlanmasında kullanılır. Dayanıklılık ve koruma özellikleriyle ön plana çıkar.",
      header2: "C Dalga",
      header3: "Oluklu Mukavva",
      photoLink: Mukavva_Data,
  },
  {
    id: "4",
    header1: "Oluklu Mukavva Cinsleri",
    detail:
      "En büyük dalga formuna sahip olan A-dalga, özellikle ağır ve hacimli ürünlerin ambalajlanmasında kullanılır. Yüksek dayanıklılık sunar.",
      header2: "A Dalga",
      header3: "Oluklu Mukavva",
      photoLink: Mukavva_Data,
  }
];

const KagitData = [
  {
    id: "1",
    header1: "Kağıt Cinsleri",
    detail:
      "Doğal, kahverengi renkli ve yüksek dayanıklılığa sahip olan kraft kâğıt, oluklu mukavva üretiminde en sık kullanılan kâğıt türüdür. Mukavemet, nem ve yırtılma direnci özellikleriyle öne çıkar",
    header2: "Kraft ",
    header3: "Kâğıt",
    photoLink: Mukavva_Data,
  },
  {
    id: "2",
    header1: "Kağıt Cinsleri",
    detail:
      "Beyaz renkli, düz ve pürüzsüz yüzeye sahip olan bu kâğıt türü, daha yüksek baskı kalitesi gerektiren ürünlerin üretiminde tercih edilir. Ambalaj ve kutu tasarımlarında kullanışlıdır.",
    header2: "Beyaz ",
    header3: "Kâğıt",
    photoLink: Mukavva_Data,
  },
  {
    id: "3",
    header1: "Kağıt Cinsleri",
    detail:
      "Çevre dostu bir seçenek olan geri dönüştürülmüş kâğıt, kaynak tasarrufu sağlaması ve sürdürülebilirlik ilkelerimize uygunluğu nedeniyle önem verdiğimiz bir hammaddedir.",
    header2: "Geri Dönüştürülmüş ",
    header3: "Kâğıt",
    photoLink: Mukavva_Data,
  },
  {
    id: "4",
    header1: "Kağıt Cinsleri",
    detail:
      "Yüzeyi özel kaplamalarla güçlendirilmiş olan bu kâğıt türü, neme, yağa veya suya karşı yüksek direnç sağlar. Gıda, ilaç ve elektronik ürün ambalajlarında sıklıkla kullanılır.",
    header2: "Özel Kaplı ",
    header3: "Kâğıt",
    photoLink: Mukavva_Data,
  }
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
  SurdurData: SurdurData,
  UrunData: UrunData,
  MakinaData: MakinaData,
  Mabsan_Way: Mabsan_Way,
  MukavvaData: MukavvaData,
  KagitData: KagitData,
  Diger_Sektorler_Data: Diger_Sektorler_Data,
};

export default Main_Data;
