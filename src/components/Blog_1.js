import React, { useState } from "react";
import "./css/Blog_1.css";

const Uretim = () => {
  const photoanan =
    "https://s3-alpha-sig.figma.com/img/710a/d68c/9f241d0188983a0895548df77be50617?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lClo58bmk-wMlhMQX~RM2DF8oq451tgagc8Evoi0X~79Bn9JyiSo94OD-1aKPCFNlQcW9UQPRq61MKzIO8~QSYc83KhniLobHC2mRo3LzfCJr4jAakAQ1V~kX8tzxVxEeIuI4NzhgABF9vlvLgP3JdpwneaANr7vNcmJ9s97woRbYmuF98xyqgOuo694BnUv6RVkaHvtsQE~Rua8E7yBetjQt3YeewA8apLx0x8hz2rClph5DPFmel7mvERWdpWIM6CbQ84MF2GIi5MkAycooUGHmidsJk0c95NkpgQjaIQkiLZF9gQjNbgsQ0btg3iBNQTAq4D3vmR33qQ1bJ39~g__";

  const pagerData = [
    {
      id: "1",
      header1: '"El emeğiyle şekillenen her kutu, bir sanat eseridir."',
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject1",
      photoLink: photoanan,
    },
    {
      id: "2",
      header1: "Subject 2 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject2",
      photoLink: photoanan,
    },
    {
      id: "3",
      header1: "Subject 3 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject3",
      photoLink: photoanan,
    },
    {
      id: "4",
      header1: "Subject 4 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject4",
      photoLink: photoanan,
    },
    {
      id: "5",
      header1: "Subject 5 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject5",
      photoLink: photoanan,
    },
    {
      id: "6",
      header1: "Subject 6 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject6",
      photoLink: photoanan,
    },
    {
      id: "7",
      header1: "Subject 7 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject7",
      photoLink: photoanan,
    },
    {
      id: "8",
      header1: "Subject 8 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject8",
      photoLink: photoanan,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < pagerData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <div className="baslik pager_back p-md-5 p-3 pt-5 pb-5">
      {" "}
      <div className="d-flex row col-12">
        <div className="blog-container p-0 m-0">
          <div
            className="blog_card"
            style={
              window.innerWidth >= 600
                ? {
                    transform: `translateX(${-1100 * currentIndex}px)`,
                  }
                : { transform: `translateX(${-300 * currentIndex}px)` }
            }
          >
            {pagerData.map((pagerItem, index) => (
              <div
                className={`blog_front d-flex align-items-start flex-column bd-highlight 
                    }`}
                key={index}
              >
                <label className="blog_card_header_1 ">
                  {pagerItem.id}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12 d-flex row ">
          <button
            className="previous_button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          ></button>
          <button className="next_button" onClick={handleNext}></button>
        </div>
      </div>
    </div>
  );
};

export default Uretim;
