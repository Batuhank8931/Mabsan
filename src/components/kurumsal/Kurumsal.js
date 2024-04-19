import React from "react";
import Video_1 from "./video_1";
import Left_Header from "./Left_Header";
import Right_Header from "./Right_Header";
import Carousel from "./Carousel";
import Pager from "./Pager";
import Timeline from "./Timeline";
import Footer from "./Footer";

const Main_page = () => {
  return (
    <div>
      <Video_1 />
      <Left_Header sectorLabel={"Sektörler"} />{" "}
      {/* Pass the label text as prop */}
      <Carousel />
      <Right_Header sectorLabel={"Üretim"} />{" "}
      {/* Pass the label text as prop */}
      <Pager />
      <Left_Header sectorLabel={"Yolculuğumuz"} />{" "}
      {/* Pass the label text as prop */}
      <Timeline />
      <Footer />
    </div>
  );
};

export default Main_page;
