import React from "react";
import "./css/Iletisim.css";

import PhoneSVG from "../assets/Phone.svg";
import MailSVG from "../assets/mail.svg";
import Right_Arrow from "../assets/right_arrow.svg";

import adresSVG from "../assets/adres_iletisim.svg";

const Iletisim = () => {
  return (
    <div className="baslik pager_back p-md-5 p-3 pt-5">
      <div className="d-flex align-items-center justify-content-center pb-2">
        <label className="iletisim_header">Lorem impsum dolor sit amet</label>
      </div>
      <div className="row m-0 p-0">
        <div className="col-12 col-md-4 row m-0 p-0">
          <div className="d-flex column pt-md-2 pb-md-2 pl-md-4 p-0">
            <div className="col-3 d-flex p-4">
              <img src={PhoneSVG} alt="phone" className="logo_iletisim" />
            </div>
            <div className="col-9 row pt-4 pb-4 pl-4">
              <label className="iletisim_label">+90 555 555 55 55</label>
              <label className="iletisim_label">+90 555 555 55 55</label>
            </div>
          </div>

          <div className="d-flex column pt-md-2 pb-md-2 pl-md-4 p-0">
            <div className="col-3 d-flex p-4">
              <img src={MailSVG} alt="mail" className="logo_iletisim " />
            </div>
            <div className="col-9 row pt-4 pb-4 pl-4 ">
              <label className="iletisim_label">info@mabsan.com</label>
            </div>
          </div>
          <div className="d-flex column pt-md-2 pb-md-2 pl-md-4 p-0">
            <div className="col-3 d-flex p-4">
              <img src={adresSVG} alt="adres" className="logo_iletisim" />
            </div>
            <div className="col-9 row pt-4 pb-4 pl-4">
              <label className="iletisim_label">
                Lorem impsum dolor sit amet
              </label>
              <label className="iletisim_label">Istanbul / Turkey</label>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 row m-0 p-0">
          <div className="d-flex row p-md-3 pb-0 m-0">
            {" "}
            <div className="col-12 col-md-6 p-0 m-0 d-flex justify-content-md-start justify-content-center p-md-0 pl-0 pr-0 pt-2 pb-2">
              {" "}
              <input
                className="iletisim_input_field"
                type="text"
                placeholder="Adınız Soyadınız"
              />
            </div>
            <div className="col-12 col-md-6 p-0 m-0 d-flex justify-content-md-end justify-content-center p-md-0 pl-0 pr-0 pt-2 pb-2">
              {" "}
              <input
                className="iletisim_input_field"
                type="tel"
                placeholder="Telefon Numaranız"
              />
            </div>
          </div>
          <div className="d-flex row p-md-3 pt-0 m-0">
            <div className="col-12 col-md-6 p-0 m-0 d-flex justify-content-md-start justify-content-center p-md-0 pl-0 pr-0 pt-2 pb-2">
              <input
                className="iletisim_input_field "
                type="text"
                placeholder="Firma Adı"
              />
            </div>
            <div className="col-12 col-md-6 p-0 m-0 d-flex justify-content-md-end justify-content-center p-md-0 pl-0 pr-0 pt-2 pb-2">
              <input
                className="iletisim_input_field"
                type="email"
                placeholder="E-Mail Adresinis"
              />
            </div>
          </div>
          <div className="d-none d-md-block row p-3 m-0 ">
            <button className="iletisim_submit_btn">Gönder</button>
          </div>
          <div className="d-flex justify-content-center d-md-none p-4">
            <button className="work_button d-flex justify-content-between">
              <label
                className="p-3 ml-4"
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  fontSize: "23px",
                }}
              >
                Gönder
              </label>
              <img className="h-100 mr-4" src={Right_Arrow} alt="Mabsan Logo" />
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex row p-3 m-0">
        <iframe
          className="iletisim_map m-0 p-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.346642189235!2d29.196865513207122!3d40.9738897712359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad3967183855b%3A0x1dfe4e3d35c637f5!2sMabsan%20Oluklu%20Mukavva%20Kutu%20Sanayi!5e0!3m2!1str!2str!4v1714994018871!5m2!1str!2str"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Iletisim;
