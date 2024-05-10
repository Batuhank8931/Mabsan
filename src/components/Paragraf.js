import React from "react";
import "./css/Paragraf.css";



const Paragraf = ({ paragraf_metni }) => {
  return (
    <div className="baslik p-md-5 p-3 pt-5 pb-5 ">
      <label className="paragraf">{paragraf_metni}</label>
    </div>
  );
};

export default Paragraf;
