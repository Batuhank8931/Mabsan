import React, { useState } from "react";
import "./css/Cv_Gonder.css";
import Right_Arrow from "../assets/right_arrow.svg";
import Cv_Arka_Plan from "../assets/Cv_Arka_Plan.svg";
import Cv_ButtonSVG from "../assets/CV_Button.svg";

const Cv_Gonder = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="baslik p-md-5 p-3 pt-md-1 pb-md-1 ">
      <div>
        <label className="basvuru_title pt-4 pb-4 pl-0 pr-0 p-3">
          İş başvurusunda bulunmak için aşağıdaki formu doldurunuz. Sizinle en
          kısa sürede iletişime geçilecektir.
        </label>
      </div>
      <div
        className="row justify-content-md-between justify-content-center "
        style={{
          backgroundImage: `url(${Cv_Arka_Plan})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row align-items-center justify-content-center  col-md-6 col-12 p-4 ">
          <input
            className="input_field"
            type="text"
            placeholder="Adınız Soyadınız"
          />
          <input
            className="input_field"
            type="tel"
            placeholder="Telefon Numaranız"
          />

          <input
            className="input_field"
            type="email"
            placeholder="E-mail Adresiniz"
          />

          <div
            className="input_field d-flex column justify-content-between"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div
              className="d-flex column justify-content-between"
              style={{ width: "95%" }}
            >
              <label
                htmlFor="fileInput"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {selectedFile ? selectedFile.name : "CV'nizi yükleyiniz"}
              </label>
              <button
                className="Cv_Button"
                onClick={() => document.getElementById("fileInput").click()}
              >
                <img
                  className="Cv_ButtonSVG"
                  src={Cv_ButtonSVG}
                  alt="Cv_ButtonSVG"
                />
              </button>
            </div>

            <input
              type="file"
              id="fileInput"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>

          <textarea className="text-field" placeholder="Kısaca Hakkınızda" />
        </div>

        <div className="d-flex align-items-end justify-content-center justify-content-md-start pl-0 col-md-6 col-12 p-md-4 p-1">
          <div className="d-flex column p-3 pl-0">
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
    </div>
  );
};

export default Cv_Gonder;
