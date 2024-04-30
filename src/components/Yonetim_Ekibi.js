import React, { useRef, useState, useEffect } from "react";
import "./css/Yonetim_ekibi.css";

const Uretim = () => {
  const pagerData = [
    {
      id: "1",
      Name: "Ayla Haktan",
      Position: "Genel Müdür",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/0f2f/5ee9/1b4cb5c861a379b27814cc557d674344?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2h0t6CxOjI3BOXsgaWCAiwBW4~RuH37A~QpG39GaklaH4nLvqat466XMk0jXTNiLGejDwRxbWB-WsJyoF2TWSxu1~Q3DZPbISqrSEzje6hw75F8Thv~UPDUmBQXUOfSeq9Y86xgVDn-sBnvX-WWy6NJ587JJYta9HjWSrScQAbxVlctgscaPzoKsN-exB-HHGHwp5kVV0dBNgjOBCdDPAbjxThbjC2wewGLCRb0dPztXcWM3Oj-MMBKJH04HyhmoRmf9GXrhRTHUvvPkdgH0T27FVBKQqdHTUDdNQMtJ35oyPq6E24G~51cytDX93QvyjHYK1PCTptD--hqKuSEiA__",
    },
    {
      id: "2",
      Name: "Ali Kara",
      Position: "Muhasebe Müdürü",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/0f2f/5ee9/1b4cb5c861a379b27814cc557d674344?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2h0t6CxOjI3BOXsgaWCAiwBW4~RuH37A~QpG39GaklaH4nLvqat466XMk0jXTNiLGejDwRxbWB-WsJyoF2TWSxu1~Q3DZPbISqrSEzje6hw75F8Thv~UPDUmBQXUOfSeq9Y86xgVDn-sBnvX-WWy6NJ587JJYta9HjWSrScQAbxVlctgscaPzoKsN-exB-HHGHwp5kVV0dBNgjOBCdDPAbjxThbjC2wewGLCRb0dPztXcWM3Oj-MMBKJH04HyhmoRmf9GXrhRTHUvvPkdgH0T27FVBKQqdHTUDdNQMtJ35oyPq6E24G~51cytDX93QvyjHYK1PCTptD--hqKuSEiA__",
    },
    {
      id: "3",
      Name: "Fatma Demir",
      Position: "İnsan Kaynakları Müdürü",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/0f2f/5ee9/1b4cb5c861a379b27814cc557d674344?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2h0t6CxOjI3BOXsgaWCAiwBW4~RuH37A~QpG39GaklaH4nLvqat466XMk0jXTNiLGejDwRxbWB-WsJyoF2TWSxu1~Q3DZPbISqrSEzje6hw75F8Thv~UPDUmBQXUOfSeq9Y86xgVDn-sBnvX-WWy6NJ587JJYta9HjWSrScQAbxVlctgscaPzoKsN-exB-HHGHwp5kVV0dBNgjOBCdDPAbjxThbjC2wewGLCRb0dPztXcWM3Oj-MMBKJH04HyhmoRmf9GXrhRTHUvvPkdgH0T27FVBKQqdHTUDdNQMtJ35oyPq6E24G~51cytDX93QvyjHYK1PCTptD--hqKuSEiA__",
    },
    {
      id: "4",
      Name: "Mehmet Yılmaz",
      Position: "Teknoloji Müdürü",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/0f2f/5ee9/1b4cb5c861a379b27814cc557d674344?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2h0t6CxOjI3BOXsgaWCAiwBW4~RuH37A~QpG39GaklaH4nLvqat466XMk0jXTNiLGejDwRxbWB-WsJyoF2TWSxu1~Q3DZPbISqrSEzje6hw75F8Thv~UPDUmBQXUOfSeq9Y86xgVDn-sBnvX-WWy6NJ587JJYta9HjWSrScQAbxVlctgscaPzoKsN-exB-HHGHwp5kVV0dBNgjOBCdDPAbjxThbjC2wewGLCRb0dPztXcWM3Oj-MMBKJH04HyhmoRmf9GXrhRTHUvvPkdgH0T27FVBKQqdHTUDdNQMtJ35oyPq6E24G~51cytDX93QvyjHYK1PCTptD--hqKuSEiA__",
    },
    {
      id: "5",
      Name: "Zeynep Güler",
      Position: "Pazarlama Müdürü",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/0f2f/5ee9/1b4cb5c861a379b27814cc557d674344?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2h0t6CxOjI3BOXsgaWCAiwBW4~RuH37A~QpG39GaklaH4nLvqat466XMk0jXTNiLGejDwRxbWB-WsJyoF2TWSxu1~Q3DZPbISqrSEzje6hw75F8Thv~UPDUmBQXUOfSeq9Y86xgVDn-sBnvX-WWy6NJ587JJYta9HjWSrScQAbxVlctgscaPzoKsN-exB-HHGHwp5kVV0dBNgjOBCdDPAbjxThbjC2wewGLCRb0dPztXcWM3Oj-MMBKJH04HyhmoRmf9GXrhRTHUvvPkdgH0T27FVBKQqdHTUDdNQMtJ35oyPq6E24G~51cytDX93QvyjHYK1PCTptD--hqKuSEiA__",
    },
    {
      id: "6",
      Name: "Hasan Karadeniz",
      Position: "Satış Müdürü",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/0f2f/5ee9/1b4cb5c861a379b27814cc557d674344?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2h0t6CxOjI3BOXsgaWCAiwBW4~RuH37A~QpG39GaklaH4nLvqat466XMk0jXTNiLGejDwRxbWB-WsJyoF2TWSxu1~Q3DZPbISqrSEzje6hw75F8Thv~UPDUmBQXUOfSeq9Y86xgVDn-sBnvX-WWy6NJ587JJYta9HjWSrScQAbxVlctgscaPzoKsN-exB-HHGHwp5kVV0dBNgjOBCdDPAbjxThbjC2wewGLCRb0dPztXcWM3Oj-MMBKJH04HyhmoRmf9GXrhRTHUvvPkdgH0T27FVBKQqdHTUDdNQMtJ35oyPq6E24G~51cytDX93QvyjHYK1PCTptD--hqKuSEiA__",
    },
    {
      id: "7",
      Name: "Selma Aksoy",
      Position: "Sosyal Medya Müdürü",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/0f2f/5ee9/1b4cb5c861a379b27814cc557d674344?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2h0t6CxOjI3BOXsgaWCAiwBW4~RuH37A~QpG39GaklaH4nLvqat466XMk0jXTNiLGejDwRxbWB-WsJyoF2TWSxu1~Q3DZPbISqrSEzje6hw75F8Thv~UPDUmBQXUOfSeq9Y86xgVDn-sBnvX-WWy6NJ587JJYta9HjWSrScQAbxVlctgscaPzoKsN-exB-HHGHwp5kVV0dBNgjOBCdDPAbjxThbjC2wewGLCRb0dPztXcWM3Oj-MMBKJH04HyhmoRmf9GXrhRTHUvvPkdgH0T27FVBKQqdHTUDdNQMtJ35oyPq6E24G~51cytDX93QvyjHYK1PCTptD--hqKuSEiA__",
    },
    {
      id: "8",
      Name: "Cemil Kılıç",
      Position: "Yazılım Geliştirme Müdürü",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/0f2f/5ee9/1b4cb5c861a379b27814cc557d674344?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2h0t6CxOjI3BOXsgaWCAiwBW4~RuH37A~QpG39GaklaH4nLvqat466XMk0jXTNiLGejDwRxbWB-WsJyoF2TWSxu1~Q3DZPbISqrSEzje6hw75F8Thv~UPDUmBQXUOfSeq9Y86xgVDn-sBnvX-WWy6NJ587JJYta9HjWSrScQAbxVlctgscaPzoKsN-exB-HHGHwp5kVV0dBNgjOBCdDPAbjxThbjC2wewGLCRb0dPztXcWM3Oj-MMBKJH04HyhmoRmf9GXrhRTHUvvPkdgH0T27FVBKQqdHTUDdNQMtJ35oyPq6E24G~51cytDX93QvyjHYK1PCTptD--hqKuSEiA__",
    },
    {
      id: "9",
      Name: "Elif Çelik",
      Position: "Veri Analisti",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/0f2f/5ee9/1b4cb5c861a379b27814cc557d674344?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2h0t6CxOjI3BOXsgaWCAiwBW4~RuH37A~QpG39GaklaH4nLvqat466XMk0jXTNiLGejDwRxbWB-WsJyoF2TWSxu1~Q3DZPbISqrSEzje6hw75F8Thv~UPDUmBQXUOfSeq9Y86xgVDn-sBnvX-WWy6NJ587JJYta9HjWSrScQAbxVlctgscaPzoKsN-exB-HHGHwp5kVV0dBNgjOBCdDPAbjxThbjC2wewGLCRb0dPztXcWM3Oj-MMBKJH04HyhmoRmf9GXrhRTHUvvPkdgH0T27FVBKQqdHTUDdNQMtJ35oyPq6E24G~51cytDX93QvyjHYK1PCTptD--hqKuSEiA__",
    },
    {
      id: "10",
      Name: "Ahmet Yıldız",
      Position: "Veri Yöneticisi",
      photoLink:
        "https://s3-alpha-sig.figma.com/img/0f2f/5ee9/1b4cb5c861a379b27814cc557d674344?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2h0t6CxOjI3BOXsgaWCAiwBW4~RuH37A~QpG39GaklaH4nLvqat466XMk0jXTNiLGejDwRxbWB-WsJyoF2TWSxu1~Q3DZPbISqrSEzje6hw75F8Thv~UPDUmBQXUOfSeq9Y86xgVDn-sBnvX-WWy6NJ587JJYta9HjWSrScQAbxVlctgscaPzoKsN-exB-HHGHwp5kVV0dBNgjOBCdDPAbjxThbjC2wewGLCRb0dPztXcWM3Oj-MMBKJH04HyhmoRmf9GXrhRTHUvvPkdgH0T27FVBKQqdHTUDdNQMtJ35oyPq6E24G~51cytDX93QvyjHYK1PCTptD--hqKuSEiA__",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateXValue, setTranslateXValue] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const containerRef = useRef(null);

  const handleMouseDown = (event) => {
    setDragStartX(event.clientX);
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (event) => {
    if (dragStartX !== null) {
      const dragDistance = event.clientX - dragStartX;
      containerRef.current.scrollLeft = scrollPosition - dragDistance;
    }
  };

  const handleMouseUp = () => {
    setDragStartX(null);
    setScrollPosition(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = "grab";
  };

  const handleTouchStart = (event) => {
    setDragStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (dragStartX !== null) {
      const dragDistance = event.touches[0].clientX - dragStartX;
      containerRef.current.scrollLeft = scrollPosition - dragDistance;
    }
  };

  const handleTouchEnd = () => {
    setDragStartX(null);
    setScrollPosition(containerRef.current.scrollLeft);
  };

  const handleNext = () => {
    if (currentIndex < pagerData.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };


  return (
    <div className="baslik p-md-5 p-3 pt-md-1 pb-md-1 ">
      {" "}
      <div className="d-flex row m-0">
        <div className=" col-6 col-md-1 d-flex align-items-center order-md-1 order-2 justify-content-end">
          <button
            className="previous_button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          ></button>
        </div>
        <div className=" col-12 col-md-10 order-md-2 order-1">
          <div className="yonetim_card_wrapper">
            <div
              className="yonetim-container"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
              ref={containerRef}
            >
              <div
                className="yonetim_card"
                style={
                  window.innerWidth >= 600
                    ? {
                        transform: `translateX(${-149 * currentIndex}px)`,
                      }
                    : { transform: `translateX(${-175 * currentIndex}px)` }
                }
              >
                {pagerData.map((pagerItem, index) => (
                  <div
                    className="yonetim_front d-flex align-items-center flex-column"
                    key={index}
                  >
                    <div className="yonetim_image_container">
                      {" "}
                      <img
                        src={pagerItem.photoLink}
                        alt="kişiler"
                        className="yonetim_image"
                      />
                    </div>

                    <div className="d-flex row justify-content-center">
                      <label className="yonetim_header">{pagerItem.Name}</label>
                      <label className="yonetim_header">
                        {pagerItem.Position}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" col-6 col-md-1 d-flex align-items-center order-3 justify-content-start">
          <button className="next_button" onClick={handleNext}></button>
        </div>
      </div>
    </div>
  );
};

export default Uretim;
