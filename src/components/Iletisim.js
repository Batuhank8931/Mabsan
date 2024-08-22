import React, { useState } from "react";

import "./css/Iletisim.css";

import PhoneSVG from "../assets/Phone.svg";
import MailSVG from "../assets/mail.svg";
import Right_Arrow from "../assets/right_arrow.svg";

import adresSVG from "../assets/adres_iletisim.svg";


const Iletisim = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      phone: formData.phone,
      to_email: "batu27krky@gmail.com", // recipient email
    };

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    });
  };

  return (
    <div className="baslik pager_back p-md-5 p-3 pt-5">
      <div className="d-flex align-items-center justify-content-center pb-2">
        <label className="iletisim_header">İşbirliği ve sorularınız için bizimle iletişime geçin.</label>
      </div>
      <div className="row m-0 p-0">
        <div className="col-12 col-md-4 row m-0 p-0 p-md-3">
          <div className="d-flex column pt-md-2 pb-md-2 pl-md-4 p-0">
            <div className="col-3 d-flex p-4">
              <img src={PhoneSVG} alt="phone" className="logo_iletisim" />
            </div>
            <div className="col-9 row pt-4 pb-4 pl-4">
              <label className="iletisim_label">+90 (0216) 484 18 00</label>
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
                Büyükbakkalköy, Kaşif Sk.
              </label>
              <label className="iletisim_label">NO: 15, 34858 Maltepe</label>
              <label className="iletisim_label">Istanbul / Turkey</label>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 row m-0 p-0">
          <form onSubmit={handleSubmit}>
            <div className="d-flex row p-md-3 pb-0 m-0">
              {" "}
              <div className="col-12 col-md-6 p-0 m-0 d-flex justify-content-md-start justify-content-center p-md-0 pl-0 pr-0 pt-2 pb-2">
                {" "}
                <input
                  className="iletisim_input_field"
                  type="text"
                  placeholder="Ad Soyad"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 col-md-6 p-0 m-0 d-flex justify-content-md-end justify-content-center p-md-0 pl-0 pr-0 pt-2 pb-2">
                {" "}
                <input
                  className="iletisim_input_field"
                  type="tel"
                  placeholder="Telefon"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="d-flex row p-md-3 pt-0 m-0">
              <div className="col-12 col-md-6 p-0 m-0 d-flex justify-content-md-start justify-content-center p-md-0 pl-0 pr-0 pt-2 pb-2">
                <input
                  className="iletisim_input_field "
                  type="text"
                  placeholder="Firma Adı"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 col-md-6 p-0 m-0 d-flex justify-content-md-end justify-content-center p-md-0 pl-0 pr-0 pt-2 pb-2">
                <input
                  className="iletisim_input_field"
                  type="email"
                  placeholder="E-Mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="d-flex row p-md-3 pt-0 m-0">
              <div className="col-12 d-flex align-items-end justify-content-md-start justify-content-center p-md-0 m-md-0 p-2">
                <input
                  className="bilgi_input_field "
                  type="text"
                  placeholder="Mesaj"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="d-flex justify-content-center d-md-none p-4">
              <button
                className="iletisim_work_button d-flex justify-content-between"
                type="submit"
              >
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
                <img
                  className="h-100 mr-4"
                  src={Right_Arrow}
                  alt="Mabsan Logo"
                />
              </button>
            </div>
            <div className="d-none d-md-block row p-md-3 pt-0 m-0">
              <button className="iletisim_submit_btn p-2" type="submit">
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex row p-3 pt-md-4 m-0">
        <iframe
          className="iletisim_map m-0 p-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.065588822905!2d29.18484820003002!3d40.97386997729993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad3967183855b%3A0x1dfe4e3d35c637f5!2sMabsan%20Oluklu%20Mukavva%20Kutu%20Sanayi!5e1!3m2!1str!2str!4v1716215072832!5m2!1str!2str"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Iletisim;
