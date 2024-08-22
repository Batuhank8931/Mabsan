import React, { useState } from "react";
import axios from "axios";

import "./css/Cv_Gonder.css";
import Right_Arrow from "../assets/right_arrow.svg";
import Cv_Arka_Plan from "../assets/Cv_Arka_Plan.svg";
import Cv_ButtonSVG from "../assets/CV_Button.svg";

const Cv_Gonder = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await axios.post(
          "https://a.neomani.com/upload.php",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.error("No file selected");
    }
  };

  return (
    <div className="baslik p-md-5 p-3 pt-md-1 pb-md-1 ">
      <div>
        <label className="basvuru_title pt-4 pb-4 pl-0 pr-0 p-3">
          Sen de bir Mabsanlı olmak istiyorsan, formu doldurarak bizimle
          iletişime geçebilirsin.
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
        <div className="row align-items-center justify-content-center col-md-6 col-12 p-4">
          <input
            className="input_field"
            type="text"
            placeholder="Ad-Soyad"
          />
          <input
            className="input_field"
            type="tel"
            placeholder="Telefon"
          />
          <input
            className="input_field"
            type="email"
            placeholder="E-mail"
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
                {selectedFile ? selectedFile.name : "CV"}
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

          <textarea className="text-field" placeholder="Kendinden kısaca bahseder misin?" />
        </div>

        <div className="d-flex align-items-end justify-content-center justify-content-md-start pl-0 col-md-6 col-12 p-md-4 p-1">
          <div className="d-flex column p-3 pl-0">
            <button
              className="cv_work_button d-flex justify-content-between"
              onClick={handleSubmit}
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
              <img className="h-100 mr-4" src={Right_Arrow} alt="Right Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv_Gonder;
