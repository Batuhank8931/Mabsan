import React, { useState } from "react";
import backgroundSVG from "../assets/HeaderBackground.svg";
import MabsanLogo from "../assets/mabsan-logo-menu.svg";
import MenuButton from "../assets/MenuButton.svg";
import bayrak from "../assets/bayrak.svg";
import politika from "../assets/politika.svg";
import "./NavBar.css"; // Importing the CSS file

const NavBar = ({ showButtonsAgain }) => {
  const [showNavbar, setShowNavbar] = useState(true); // State to control the visibility of the navbar

  // Function to toggle the visibility of the navbar
  const hideNavbar = () => {
    setShowNavbar((prevShowNavbar) => !prevShowNavbar);
  };
  return (
    <div>
      {showNavbar && (
        <div
          className="bg-cover bg-fixed p-md-5 p-3 pt-5 pb-5"
          style={{ backgroundImage: `url(${backgroundSVG})` }}
        >
          <div className="d-flex align-items-stretch justify-content-between">
            <div className="col-2">
              <img
                src={MabsanLogo}
                alt="Mabsan Logo"
                className="mabsan-logo "
              />
            </div>

            <div class="d-flex flex-column col-8">
              <div className="d-flex flex-md-row flex-column align-items-start justify-content-between w-100 h-50 p-md-5 p-3 pt-0 m-5 m-md-0 ">
                <button className="text-white mx-2 button mt-2 mb-4">
                  Kurumsal
                </button>
                <button className="text-white mx-2 button mt-2 mb-4">
                  Üretim
                </button>
                <button className="text-white mx-2 button mt-2 mb-4">
                  Ürünler
                </button>
                <button className="text-white mx-2 button mt-2 mb-4">
                  Kariyer
                </button>
                <button className="text-white mx-2 button mt-2 mb-4">
                  Kariyer Blog
                </button>
                <button className="text-white mx-2 button mt-2">
                  İletişim
                </button>
              </div>
              <div className="d-flex align-items-stretch justify-content-between w-100 p-md-5 p-1 pt-5 pb-0 pb-md-0 h-100 ">
                <div className="d-flex align-items-end w-50">
                  <img src={politika} alt="politika" className="politika" />
                </div>
              </div>
            </div>

            <div className="menu d-flex flex-column align-items-end justify-content-end col-2">
              <button
                className="btn p-0 position-relative"
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
                <div className="overlay"></div> {/* Semi-transparent overlay */}
              </button>
              <div
                className="d-flex align-items-end"
                style={{ height: "100%" }}
              >
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center justify-content-center  col-4">
                    <img src={bayrak} alt="bayrak" className="bayrak" />
                  </div>

                  <button className="text-white mx-2 button col-4">TR</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
