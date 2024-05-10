import React from "react";
import "./css/Kapasite.css";


const Kapasite = () => {

  

  return (
    <div className="baslik p-md-5 p-3 pt-0 pb-0">
        <div className="d-flex flex-row justify-content-center header_1">
            <div className="each_header d-flex flex-column justify-content-end ">
                <label className="kapasite_label">Tesis Kapasitesi</label>
                <label className="kapasite_band" style={{ zIndex: 1 }}>50.000 Ton</label>
            </div>
            <div className="each_header d-flex flex-column  justify-content-end ">
                <label className="kapasite_label">Fabrika Yüzölçümü</label>
                <label className="kapasite_band" style={{ zIndex: 2 }}>10.000 m2</label>
            </div>
            <div className="each_header d-flex flex-column justify-content-end ">
                <label className="kapasite_label">İhracat</label>
                <label className="kapasite_band" style={{ zIndex: 3 }}>10 Ülke</label>
            </div>
            <div className="each_header d-flex flex-column justify-content-end ">
                <label className="kapasite_label">Çalışan Sayısı</label>
                <label className="kapasite_band" style={{ zIndex: 4 }}>100</label>
            </div>
        </div>
    </div>
  );
};

export default Kapasite;
