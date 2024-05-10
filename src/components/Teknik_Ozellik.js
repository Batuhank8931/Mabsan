import React from "react";
import "./css/Teknik_Ozellik.css";
import teknik_kutu from "../assets/teknik_kutu.png";
import acik_kutu from "../assets/acik_kutu.png";
import yapiskanli from "../assets/yapiskanli.svg";
import katlama from "../assets/katlama.svg";
import pim from "../assets/pim.svg";

const Teknik_Ozellik = () => {
  return (
    <div className="baslik p-0 p-md-0 pt-md-5 pb-md-5">
      <div className="flex-d row m-0 p-0">
        <div className="col-12 col-md-6 row left_box align-items-center m-0">
          <img className="kutu_ozellik" src={teknik_kutu} alt="Teknik Kutu" />
        </div>
        <div className="col-12 col-md-6 row right_box align-items-center m-0 pt-4">
          <div className="header_box pl-5">
            <label className="Teknik_Header">Teknik Özellikler</label>
          </div>
          <div className="p-5 pt-0 pb-0">
            <div className="d-flex justify-content-between pt-3 pb-3 list_line">
              <label className="Teknik_List_1st">Lorem</label>
              <label className="Teknik_List_2nd">32</label>
            </div>
            <div className="d-flex justify-content-between pt-3 pb-3 list_line">
              <label className="Teknik_List_1st">Lorem</label>
              <label className="Teknik_List_2nd">32</label>
            </div>
            <div className="d-flex justify-content-between pt-3 pb-3 list_line">
              <label className="Teknik_List_1st">Lorem</label>
              <label className="Teknik_List_2nd">32</label>
            </div>
            <div className="d-flex justify-content-between pt-3 pb-3 list_line">
              <label className="Teknik_List_1st">Lorem</label>
              <label className="Teknik_List_2nd">32</label>
            </div>
            <div className="d-flex justify-content-between pt-3 pb-3 list_line">
              <label className="Teknik_List_1st">Lorem</label>
              <label className="Teknik_List_2nd">32</label>
            </div>
          </div>
          <div className="d-flex column justify-content-around pb-3">
            <div>
              <div className="d-flex justify-content-center align-items-end">
                <img
                  className="teknik_simge"
                  src={yapiskanli}
                  alt="Yapışkanlı"
                />
              </div>
              <div className="d-flex justify-content-center">
                <label className="simge_text">Yapışkanlı</label>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center align-items-end">
                <img className="teknik_simge" src={katlama} alt="Katlama" />
              </div>
              <div className="d-flex justify-content-center">
                <label className="simge_text">Katlama</label>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center align-items-end">
                <img className="teknik_simge" src={pim} alt="Pim" />
              </div>
              <div className="d-flex justify-content-center">
                <label className="simge_text">Pim</label>
              </div>
            </div>
          </div>
        </div>
        <div className="acik_kutu">
          <img className="acik_kutu" src={acik_kutu} alt="Teknik Kutu" />
        </div>
      </div>
    </div>
  );
};

export default Teknik_Ozellik;
