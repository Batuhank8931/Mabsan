import React from "react";
import "./css/Footer.css";

import iletisimSVG from "../assets/iletisim.svg";
import yaprakSVG from "../assets/yaprak.svg";
import adresSVG from "../assets/adres.svg";
import red_hoverSVG from "../assets/red_hover.svg";
import faceSVG from "../assets/face.svg";
import instaSVG from "../assets/insta.svg";
import twitterSVG from "../assets/twitter.svg";
import linkedinSVG from "../assets/linkedin.svg";
import youtubeSVG from "../assets/youtube.svg";
import Turning_logo from "../assets/logo_1.mp4";

const Footer = () => {
  return (
    <div className="baslik p-md-5 p-3 pt-0 pb-5 ">
      <div className="d-flex align-items-center justify-content-center mb-0 mb-md-5 mt-0">
        <div className="video-container">
          <video
            autoPlay
            loop
            muted
            style={{
              transform: "translate(-0%, -24%)",
              width: "auto",
              height: "auto",
            }}
          >
            <source src={Turning_logo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center row mr-md-5 ml-md-5 ">
        <div className="kart_1 redline_footer_left d-flex align-items-center justify-content-center col-md-4 col-5 order-md-0 order-1">
          <div>
            <div className="d-flex align-items-center justify-content-center">
              <img src={iletisimSVG} alt="iletisim" className="iletisim" />
            </div>
            <div className="d-flex align-items-center justify-content-center p-3">
              <label className="footer_title">İletişim</label>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <label className="footer_title">+90 555 555 55 55</label>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <label className="footer_title">info@mabsan.com</label>
            </div>
          </div>
        </div>
        <div
          className="kart_2 d-flex align-items-center flex-column col-md-4 col-10 m-md-0 m-5 mb-0 mt-4 "
          style={{
            backgroundImage: `url(${red_hoverSVG})`,
            backgroundSize: "cover",
          }}
        >
          <div className="bd-highlight p-md-3 pt-4">
            <img src={yaprakSVG} alt="yaprak" className="yaprak" />
          </div>
          <div className="bd-highlight  ">
            <label className="detay_title">Sürdürülebilirlik Politikası</label>
          </div>
          <div className="mt-auto bd-highlight w-100">
            <button className="detay_button">Detay</button>
          </div>
        </div>
        <div className="kart_3 redline_footer_right d-flex align-items-center justify-content-center col-md-4 col-5 order-md-2 order-1">
          <div>
            <div className="d-flex align-items-center justify-content-center">
              <img src={adresSVG} alt="adres" className="adres" />
            </div>
            <div className="d-flex align-items-center justify-content-center p-3">
              <label className="footer_title">Adres</label>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <label className="footer_title">Lorem impsum met</label>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <label className="footer_title">İstanbul / Turkey</label>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center row mt-5 mr-md-5 ml-md-5">
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
      <div className="d-flex align-items-center justify-content-center justify-content-md-start row mt-2 mr-md-5 ml-md-5">
        <div className="col-md-3 col-12 align-items-center justift-content-center w-60 w-md-70">
          <div className="d-flex justify-content-between mr-md-5 mb-3 mr-3 ml-md-0 mt-3">
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
            <p className="footer_title">1988 - 2024 Copyright.</p>
            <p className="footer_title">All right Reserved.</p>
          </div>
        </div>
        <div className="col-3 footer_list">
          {" "}
          <div>
            <ul>
              <li>Hikayemiz</li>
              <li>Mabsan Grup Politikaları</li>
              <li>Dünya’da Mabsan</li>
              <li>İletişim</li>
            </ul>
          </div>
        </div>
        <div className="col-3 footer_list">
          {" "}
          <div>
            {" "}
            <ul>
              <li>Hikayemiz</li>
              <li>Mabsan Grup Politikaları</li>
              <li>Dünya’da Mabsan</li>
              <li>İletişim</li>
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
        <div className="hidden_bottom  column p-md-5 p-3 pt-0 pb-5 hidden_bottom">
          <div className="col-6" style={{ textAlign: "left" }}>
            <ul style={{ listStylePosition: "inside", margin: 0, padding: 0, fontSize: "20px"}}>
              <li>Yasal Bildirim</li>
              <li>Gizlilik Politikası</li>
            </ul>
          </div>
          <div className="col-6" style={{ textAlign: "right" }}>
            <ul style={{ listStylePosition: "inside", margin: 0, padding: 0, fontSize: "20px" }}>
              <li>Çerez Politikası</li>
              <li>Hizmet ve Şartlar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
