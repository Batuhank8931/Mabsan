import React, { useState } from "react";
import backgroundSVG from "../assets/HeaderBackground.svg";
import MabsanLogo from "../assets/MERS LOGO PNG.png";
import MenuButton from "../assets/MenuButton.svg";
import bayrak from "../assets/bayrak.svg";
import politika from "../assets/politika.svg";
import "./css/NavBar.css"; // Importing the CSS file

import { Link } from "react-router-dom";

const NavBar = ({ showButtonsAgain, change_page, SektorItems }) => {
  const [showNavbar, setShowNavbar] = useState(true); // State to control the visibility of the navbar

  // Function to toggle the visibility of the navbar
  const hideNavbar = () => {
    setShowNavbar((prevShowNavbar) => !prevShowNavbar);
  };
  return (
    <div>
      {showNavbar && (
        <div
          className="bg-cover bg-fixed p-md-5 p-3 pt-5 pb-5 navbar_all"
        >
          <div className="d-flex">
            <div className="col-3 col-md-1" style={{ height: "200px" }}>
              <button
                className="mabsan-logo"
                onClick={() => {
                  change_page("Main");
                }}
              >
                {" "}
                <Link to={"/"}>
                  <img src={MabsanLogo} alt="Mabsan Logo" />
                </Link>
              </button>
            </div>

            <div className="flex-column col-7 col-md-10">
              <div className="d-md-flex flex-md-row flex-column align-items-start justify-content-around p-md-2 p-3 pt-0 m-md-0 ml-0 mb-5 button_container ">
                <button
                  className="buttons mx-2 mt-2 mb-4"
                  onClick={() => {
                    change_page("Kurumsal");
                  }}
                >
                  <Link to={"/kurumsal"}>Kurumsal</Link>
                </button>
                <button
                  className="mx-2 buttons mt-2 mb-3"
                  onClick={() => {
                    change_page("Üretim");
                  }}
                >
                  <Link to={"/uretim"}>Üretim</Link>
                </button>

                <div className="dropdown">
                  <button className="mx-2 buttons urunler_button mt-2 mb-3">
                    Ürünler
                  </button>
                  <div className="dropdown_content">
                    {/* Map through SektorItems array to generate dropdown items */}
                    {SektorItems.map((item, index) => (
                      <button
                        className="dropdown_item"
                        key={index}
                        onClick={() => change_page(item.way)}
                      >
                        <Link to={`/${item.way}`}>{item.name}</Link>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  className="mx-2 buttons mt-2 mb-4"
                  onClick={() => {
                    change_page("Kariyer");
                  }}
                >
                  <Link to={"/kariyer"}>Kariyer</Link>
                </button>
                <button
                  className="mx-2 buttons mt-2 mb-4"
                  onClick={() => {
                    change_page("Blog");
                  }}
                >
                  <Link to={"/blog"}>Blog</Link>
                </button>
                {/* Map through SektorItems array to generate dropdown items 
                <button
                  className="mx-2 buttons mt-2 mb-4"
                  onClick={() => {
                    change_page("Perakende");
                  }}
                >
                  <Link to={"/perakende"}>Sektöler</Link>
                </button>
                */}
                <button
                  className="mx-2 buttons mt-2 mb-4"
                  onClick={() => {
                    change_page("iletisim");
                  }}
                >
                  <Link to={"/iletisim"}>İletişim</Link>
                </button>
              </div>
              <div
                className="d-flex align-items-stretch"
                style={{ height: "68%" }}
              >
                {" "}
                <div className="underline_0 d-none d-md-flex align-items-end">
                  <button
                    onClick={() => {
                      change_page("Sürdürülebilirlik");
                    }}
                  >
                    <Link to={"/surdurulebilirlik"}>
                      {" "}
                      <img
                        src={politika}
                        style={{ width: "60%", float: "left" }}
                        alt="politika"
                        className="politika buttontrs"
                      />{" "}
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column col-2 col-md-1">
              <div className="d-flex flex-column align-items-end menu_button">
                {" "}
                <button
                  className="p-0"
                  onClick={() => {
                    hideNavbar();
                    showButtonsAgain();
                  }}
                >
                  <img
                    src={MenuButton}
                    alt="Menu Button"
                    className="menu-button"
                  />
                </button>
              </div>

              <div
                className="d-flex align-items-end"
                style={{ height: "100%" }}
              >
                <div className="underline_1">
                  <button className="mx-2 buttontrs d-flex align-items-center justify-content-center">
                    <img src={bayrak} alt="bayrak" className="bayrak" />
                    TR
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="underline_2">
            {" "}
            {
              // SADECE TELEFONDA GÖZÜKEN ALT SATIR
            }
            <div className="d-flex justify-content-between">
              <button
                className="d-flex align-items-end"
                style={{ width: "45%", marginLeft: "20px" }}
                onClick={() => {
                  change_page("Sürdürülebilirlik");
                }}
              >
                <Link to={"/surdurulebilirlik"}>
                  {" "}
                  <img
                    src={politika}
                    alt="politika"
                    className="politika buttontrs"
                  />{" "}
                </Link>
              </button>
              <div className="d-flex align-items-center">
                <button className="mx-2 buttontrs d-flex align-items-center justify-content-center">
                  <img src={bayrak} alt="bayrak" className="bayrak" />
                  TR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
