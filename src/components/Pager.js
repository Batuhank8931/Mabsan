import React, { useState } from "react";
import "./Pager.css";

const Pager = () => {
  const pagerData = [
    {
      id: "1",
      header1: "Subject 1 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject1",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/710a/d68c/9f241d0188983a0895548df77be50617?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yvto5ZGSNQonW1IcuFtBnzPS6Pkf5Vnvlf18Ria7Z-68CoW3GWtxSR-THQda2twMOP4mwGvyWnEKgCf6TSXqHxBfBMAvZ-efn1zHhRf8KY5eERBe~ul2gebu81joQd-VcQIhEOi8U1a0nl3SP0sH-Pg-oyrIJ1YODQsV3ECU2IG7BD33VKC7wx~N7jITBXwTc2LBQDrZ-82lh94WteCjg5tG31hPQfaH4UcUec82C5Ufjo-umsG8o6-GgLDvlWbaTWuMpUr6PvTxoBNwDD33UK6DzXVnx~gjROnCjTUv2uBJaRHnkLEDOAyHTdCLZb8ZW~k7vTHux2LbZVj2l5UO5g__",
    },
    {
      id: "2",
      header1: "Subject 2 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject2",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/710a/d68c/9f241d0188983a0895548df77be50617?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yvto5ZGSNQonW1IcuFtBnzPS6Pkf5Vnvlf18Ria7Z-68CoW3GWtxSR-THQda2twMOP4mwGvyWnEKgCf6TSXqHxBfBMAvZ-efn1zHhRf8KY5eERBe~ul2gebu81joQd-VcQIhEOi8U1a0nl3SP0sH-Pg-oyrIJ1YODQsV3ECU2IG7BD33VKC7wx~N7jITBXwTc2LBQDrZ-82lh94WteCjg5tG31hPQfaH4UcUec82C5Ufjo-umsG8o6-GgLDvlWbaTWuMpUr6PvTxoBNwDD33UK6DzXVnx~gjROnCjTUv2uBJaRHnkLEDOAyHTdCLZb8ZW~k7vTHux2LbZVj2l5UO5g__",
    },
    {
      id: "3",
      header1: "Subject 3 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject3",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/710a/d68c/9f241d0188983a0895548df77be50617?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yvto5ZGSNQonW1IcuFtBnzPS6Pkf5Vnvlf18Ria7Z-68CoW3GWtxSR-THQda2twMOP4mwGvyWnEKgCf6TSXqHxBfBMAvZ-efn1zHhRf8KY5eERBe~ul2gebu81joQd-VcQIhEOi8U1a0nl3SP0sH-Pg-oyrIJ1YODQsV3ECU2IG7BD33VKC7wx~N7jITBXwTc2LBQDrZ-82lh94WteCjg5tG31hPQfaH4UcUec82C5Ufjo-umsG8o6-GgLDvlWbaTWuMpUr6PvTxoBNwDD33UK6DzXVnx~gjROnCjTUv2uBJaRHnkLEDOAyHTdCLZb8ZW~k7vTHux2LbZVj2l5UO5g__",
    },
    {
      id: "4",
      header1: "Subject 4 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject4",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/710a/d68c/9f241d0188983a0895548df77be50617?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yvto5ZGSNQonW1IcuFtBnzPS6Pkf5Vnvlf18Ria7Z-68CoW3GWtxSR-THQda2twMOP4mwGvyWnEKgCf6TSXqHxBfBMAvZ-efn1zHhRf8KY5eERBe~ul2gebu81joQd-VcQIhEOi8U1a0nl3SP0sH-Pg-oyrIJ1YODQsV3ECU2IG7BD33VKC7wx~N7jITBXwTc2LBQDrZ-82lh94WteCjg5tG31hPQfaH4UcUec82C5Ufjo-umsG8o6-GgLDvlWbaTWuMpUr6PvTxoBNwDD33UK6DzXVnx~gjROnCjTUv2uBJaRHnkLEDOAyHTdCLZb8ZW~k7vTHux2LbZVj2l5UO5g__",
    },
    {
      id: "5",
      header1: "Subject 5 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject5",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/710a/d68c/9f241d0188983a0895548df77be50617?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yvto5ZGSNQonW1IcuFtBnzPS6Pkf5Vnvlf18Ria7Z-68CoW3GWtxSR-THQda2twMOP4mwGvyWnEKgCf6TSXqHxBfBMAvZ-efn1zHhRf8KY5eERBe~ul2gebu81joQd-VcQIhEOi8U1a0nl3SP0sH-Pg-oyrIJ1YODQsV3ECU2IG7BD33VKC7wx~N7jITBXwTc2LBQDrZ-82lh94WteCjg5tG31hPQfaH4UcUec82C5Ufjo-umsG8o6-GgLDvlWbaTWuMpUr6PvTxoBNwDD33UK6DzXVnx~gjROnCjTUv2uBJaRHnkLEDOAyHTdCLZb8ZW~k7vTHux2LbZVj2l5UO5g__",
    },
    {
      id: "6",
      header1: "Subject 6 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject6",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/710a/d68c/9f241d0188983a0895548df77be50617?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yvto5ZGSNQonW1IcuFtBnzPS6Pkf5Vnvlf18Ria7Z-68CoW3GWtxSR-THQda2twMOP4mwGvyWnEKgCf6TSXqHxBfBMAvZ-efn1zHhRf8KY5eERBe~ul2gebu81joQd-VcQIhEOi8U1a0nl3SP0sH-Pg-oyrIJ1YODQsV3ECU2IG7BD33VKC7wx~N7jITBXwTc2LBQDrZ-82lh94WteCjg5tG31hPQfaH4UcUec82C5Ufjo-umsG8o6-GgLDvlWbaTWuMpUr6PvTxoBNwDD33UK6DzXVnx~gjROnCjTUv2uBJaRHnkLEDOAyHTdCLZb8ZW~k7vTHux2LbZVj2l5UO5g__",
    },
    {
      id: "7",
      header1: "Subject 7 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject7",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/710a/d68c/9f241d0188983a0895548df77be50617?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yvto5ZGSNQonW1IcuFtBnzPS6Pkf5Vnvlf18Ria7Z-68CoW3GWtxSR-THQda2twMOP4mwGvyWnEKgCf6TSXqHxBfBMAvZ-efn1zHhRf8KY5eERBe~ul2gebu81joQd-VcQIhEOi8U1a0nl3SP0sH-Pg-oyrIJ1YODQsV3ECU2IG7BD33VKC7wx~N7jITBXwTc2LBQDrZ-82lh94WteCjg5tG31hPQfaH4UcUec82C5Ufjo-umsG8o6-GgLDvlWbaTWuMpUr6PvTxoBNwDD33UK6DzXVnx~gjROnCjTUv2uBJaRHnkLEDOAyHTdCLZb8ZW~k7vTHux2LbZVj2l5UO5g__",
    },
    {
      id: "8",
      header1: "Subject 8 Header",
      detail:
        "Mebsan Kutu, bir atölyede, sanat ve el emeğiyle sekillenmeye başladı. İlk katman, geleneksel sanatlarının ve yaratıcılığın doğuşunu temsil eder İlk nefesini aldığında, bir kutu olarak varlık buldu.",
      header2: "Subject8",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/710a/d68c/9f241d0188983a0895548df77be50617?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yvto5ZGSNQonW1IcuFtBnzPS6Pkf5Vnvlf18Ria7Z-68CoW3GWtxSR-THQda2twMOP4mwGvyWnEKgCf6TSXqHxBfBMAvZ-efn1zHhRf8KY5eERBe~ul2gebu81joQd-VcQIhEOi8U1a0nl3SP0sH-Pg-oyrIJ1YODQsV3ECU2IG7BD33VKC7wx~N7jITBXwTc2LBQDrZ-82lh94WteCjg5tG31hPQfaH4UcUec82C5Ufjo-umsG8o6-GgLDvlWbaTWuMpUr6PvTxoBNwDD33UK6DzXVnx~gjROnCjTUv2uBJaRHnkLEDOAyHTdCLZb8ZW~k7vTHux2LbZVj2l5UO5g__",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // Check if there is a next item
    if (currentIndex < pagerData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      shrinkAndEnlarge();
    }
    if (currentIndex < pagerData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      const label1 = document.querySelector(".label_1");
      const label2 = document.querySelector(".label_2");
      label1.classList.add("fade-out");
      label2.classList.add("fade-out");
      setTimeout(() => {
        label1.classList.remove("fade-out");
        label2.classList.remove("fade-out");
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      shrinkAndEnlarge();
    }
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const label1 = document.querySelector(".label_1");
      const label2 = document.querySelector(".label_2");
      label1.classList.add("fade-out");
      label2.classList.add("fade-out");
      setTimeout(() => {
        label1.classList.remove("fade-out");
        label2.classList.remove("fade-out");
      }, 300);
    }
  };

  const currentItem = pagerData[currentIndex];

  const shrinkAndEnlarge = () => {
    const slideCard = document.querySelector(".slide_card");
    const parentWidth = slideCard.parentElement.offsetWidth; // Get the width of the parent element

    // Shrink the slide card to zero width
    slideCard.style.width = "0";

    // Set a timeout to enlarge the slide card after a short delay
    setTimeout(() => {
      // Enlarge the slide card back to its original width
      slideCard.style.width = parentWidth + "px"; // Use the parent's width for enlargement
    }, 400); // Adjust the delay as needed (400 milliseconds in this case)
  };

  return (
    <div className="baslik  p-md-5 p-3 pt-5 pb-5">
      <div className="pager_back d-flex row">
        <div className="header_card pager_front col-12 col-md-8 d-flex row p-4 pb-0">
          <div>
            <label className="label_1 p-4">{currentItem.header1}</label>
          </div>
          <div>
            <label className="label_2 p-4">{currentItem.detail}</label>
          </div>
          <div className="p-4 d-flex align-items-center justify-content-center">
            <div className="d-flex column p-3">
              <button
                className="previous_button m-3"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                {/* Handle previous button */}
              </button>
              <button className="next_button m-3" onClick={handleNext}>
                {/* Handle next button */}
              </button>
            </div>
          </div>
        </div>
        <div className="pager_front col-12 col-md-4 p-4 pt-0">
          <div className="slide_card_wrapper">
            <div className="slide_card">
              <div className="card_front">
                <div className="d-flex justify-content-evenly m-5">
                  <label className="card_header_1 p-4">{currentItem.id}</label>
                  <label className="card_header_2 p-4">
                    {currentItem.header2}
                  </label>
                </div>
                <div className="d-flex justify-content-center p-4 m-4">
                  <img
                    src={currentItem.photoLink}
                    alt="bayrak"
                    className="image_container"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pager;
