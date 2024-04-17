import React from "react";
import "./Footer.css";
import altlogoSVG from "../assets/alt-logo.svg";
import iletisimSVG from "../assets/iletisim.svg";
import yaprakSVG from "../assets/yaprak.svg";
import adresSVG from "../assets/adres.svg";
import red_hoverSVG from "../assets/red_hover.svg";
import faceSVG from "../assets/face.svg";
import instaSVG from "../assets/insta.svg";
import twitterSVG from "../assets/twitter.svg";
import linkedinSVG from "../assets/linkedin.svg";
import youtubeSVG from "../assets/youtube.svg";

const Footer = () => {
  return (
    <div className="baslik p-md-5 p-3 pt-0 pb-5 ">
      <div className="d-flex align-items-center justify-content-center mb-0 mb-md-5 mt-md-5 mt-0">
        <div>
          <img src={altlogoSVG} alt="altlogo" className="altlogo" />
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center row mr-md-5 ml-md-5 ">
        <div className="kart_1 redline_footer d-flex align-items-center justify-content-center col-md-3 col-5 order-md-0 order-1">
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
          className="kart_2 d-flex align-items-center flex-column col-md-6 col-10 m-md-0 m-5 mb-0 "
          style={{
            backgroundImage: `url(${red_hoverSVG})`,
            backgroundSize: "cover",
          }}
        >
          <div className="bd-highlight p-md-5 pt-4">
            <img src={yaprakSVG} alt="yaprak" className="yaprak" />
          </div>
          <div className="bd-highlight  p-md-5 p-1">
            <label className="detay_title">Sürdürülebilirlik Politikası</label>
          </div>
          <div className="mt-auto bd-highlight w-100">
            <button className="detay_button">Detay</button>
          </div>
        </div>
        <div className="kart_3 redline_footer d-flex align-items-center justify-content-center col-md-3 col-5 order-md-2 order-1">
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
      <div className="d-flex align-items-center justify-content-center row mt-2 mr-md-5 ml-md-5">
        <div className="col-md-3 col-12">
          <div className="d-flex justify-content-between mr-md-5 mb-5 mr-3 ml-md-0">
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
      </div>
    </div>
  );
};

export default Footer;
