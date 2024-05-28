import React from "react";
import "./css/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import iletisimSVG from "../assets/iletisim.svg";
import yaprakSVG from "../assets/yaprak.svg";
import adresSVG from "../assets/adres.svg";
import red_hoverSVG from "../assets/red_hover.svg";
import faceSVG from "../assets/face.svg";
import instaSVG from "../assets/insta.svg";
import twitterSVG from "../assets/twitter.svg";
import linkedinSVG from "../assets/linkedin.svg";
import youtubeSVG from "../assets/youtube.svg";
import WhatsAppSVG from "../assets/whatsap.svg";
import Turning_logo from "../assets/logo_1.mp4";

import { Link } from "react-router-dom";

const Footer = ({ change_page }) => {
  const phoneNumber = "+905308432383"; // Replace with your WhatsApp number
  const message = "Hello! I have a question."; // Replace with your default message

  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="baslik p-md-5 p-3 pt-5 pb-5">
      <div className="d-flex align-items-center justify-content-center mb-0 mb-md-5 mt-0 m-0">
        <div className="video-container">
          <video
            autoPlay
            loop
            muted
            controls={false}
            playsInline
            style={{
              transform: "translate(-0%, 0%)",
              width: "auto",
              height: "auto",
            }}
          >
            <source src={Turning_logo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center row mr-md-5 ml-md-5 m-0">
        <div className="kart_1 redline_footer_left d-flex align-items-center justify-content-center col-md-4 col-6 order-md-0 order-1">
          <div>
            <div className="d-flex align-items-center justify-content-center">
              <img src={iletisimSVG} alt="iletisim" className="iletisim" />
            </div>
            <div className="d-flex align-items-center justify-content-center p-md-3 p-2">
              <label className="footer_title">İletişim</label>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <label className="footer_deatil_text">+90 (0216) 484 18 00</label>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <label className="footer_deatil_text">info@mabsan.com</label>
            </div>
          </div>
        </div>
        <div
          className="kart_2 d-flex align-items-center flex-column col-md-4 col-12 m-md-0 m-2 mb-0 mt-4 "
          style={{
            backgroundImage: `url(${red_hoverSVG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bd-highlight p-md-3 ">
            <img src={yaprakSVG} alt="yaprak" className="yaprak" />
          </div>
          <div
            className="bd-highlight"
            onClick={() => {
              change_page("Sürdürülebilirlik");
            }}
          >
            <button
              className="detay_title pt-3 pb-2 pt-md-4 pb-md-0
            "
            >
              <Link to={"/surdurulebilirlik"}>
                {" "}
                Sürdürülebilirlik Politikası{" "}
              </Link>
            </button>
          </div>
          <div
            className="mt-auto bd-highlight w-100"
            style={{ height: "60px" }}
          >
            <button
              className="detay_button_footer"
              onClick={() => {
                change_page("Sürdürülebilirlik");
              }}
            >
              <Link to={"/surdurulebilirlik"}> Detay </Link>
            </button>
          </div>
        </div>
        <div className="kart_3 redline_footer_right d-flex align-items-center justify-content-center col-md-4 col-6 order-md-2 order-1">
          <div>
            <div className="d-flex align-items-center justify-content-center">
              <img src={adresSVG} alt="adres" className="adres" />
            </div>
            <div className="d-flex align-items-center justify-content-center p-md-3 p-2">
              <label className="footer_title">Adres</label>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <label className="footer_deatil_text">
                Büyükbakkalköy, Kaşif Sk.
              </label>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <label className="footer_deatil_text">
                NO: 15, 34858 Maltepe
              </label>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <label className="footer_deatil_text">İstanbul / Turkey</label>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center row mt-5 mr-md-5 ml-md-5 m-0">
        <div className="col-md-3 col-12 d-flex justify-content-md-start justify-content-center">
          <div className="footer_h1">Sosyal</div>
        </div>
        <div className="col-3">
          {" "}
          <div className="footer_h2">Kurumsal</div>
        </div>
        <div className="col-3">
          {" "}
          <div className="footer_h2">Sayfalar</div>
        </div>
        <div className="col-3">
          {" "}
          <div className="footer_h2">Politikalar</div>
        </div>
      </div>
      <div className="d-flex align-items-start justify-content-center justify-content-md-start row mt-2 mr-md-5 ml-md-5 m-0">
        <div className="col-md-3 col-12 align-items-center justift-content-center w-60 w-md-70 h-50 ">
          <div className="d-flex justify-content-between mr-md-5 mb-3 mr-0 ml-md-0 mt-3">
            <button>
              <img src={faceSVG} alt="Face Icon" />
            </button>
            <button>
              <img src={instaSVG} alt="Insta Icon" />
            </button>
            <button>
              <img src={twitterSVG} alt="Twitter Icon" />
            </button>
            <button>
              <img src={linkedinSVG} alt="Linkledin Icon" />
            </button>
            <button>
              <img src={youtubeSVG} alt="Youtube Icon" />
            </button>
          </div>

          <div className="d-flex justify-content-between row mr-md-5 mb-5 ">
            <p className="footer_title_middle">Copyright 2024 - Neomani</p>
            <p className="footer_title_middle">All right Reserved.</p>
          </div>
        </div>
        <div className="col-3 footer_list">
          {" "}
          <div>
            <ul>
              <li>
                <Link to={"/kurumsal"}>Yönetim Ekibi</Link>
              </li>
              <li>
                <Link to={"/kurumsal"}>Hakkımızda</Link>
              </li>
              <li>
                <Link to={"/kurumsal"}>Misyon</Link>
              </li>
              <li>
                <Link to={"/kurumsal"}>Vizyon</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-3 footer_list">
          {" "}
          <div>
            {" "}
            <ul>
              <li>
                <Link to={"/kurumsal"}>Kurumsal</Link>
              </li>
              <li>
                <Link to={"/uretim"}>Üretim</Link>
              </li>
              <li>
                <Link to={"/kariyer"}>Kariyer</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 footer_list ">
          {" "}
          <div>
            {" "}
            <ul>
              <li>Yasal Bildirim</li>
              <li>Gizlilik Politikası</li>
              <li>Çerez Politikası</li>
              <li>Hizmet ve Şartlar</li>
            </ul>
          </div>
        </div>

        <div className="hidden_bottom column">
          <div className="col-6" style={{ textAlign: "left" }}>
            <ul
              style={{
                listStylePosition: "inside",
                margin: 0,
                padding: 0,
                fontSize: "15px",
              }}
            >
              <li>Üretim</li>
              <li>Ürünler</li>
            </ul>
          </div>
          <div className="col-6" style={{ textAlign: "left" }}>
            <ul
              style={{
                listStylePosition: "inside",
                margin: 0,
                padding: 0,
                fontSize: "15px",
              }}
            >
              <li>Kariyer</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className="whatsapp_button_container">
          <button onClick={handleWhatsAppClick}>
            <img src={WhatsAppSVG} alt="whatsap Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
