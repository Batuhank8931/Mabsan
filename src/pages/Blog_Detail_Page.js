import React from "react";

import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import BlogDetail from "../components/BlogDetail";

import Main_Data from "../components/DB_converter";

const blogData = Main_Data.blogData;
const SektorItems = Main_Data.SektorItems;

const Blog_Detail_Page = ({ change_page , Blog_Detail }) => {

  console.log( "ananınamı");
  console.log(Blog_Detail);
  const blogDetailId = parseInt(Blog_Detail);

  return (
    <>
      <SubNavbar change_page={change_page} sectorLabel={"Blog"} SektorItems={SektorItems} />
      <BlogDetail Blog_Detail={blogDetailId} all_data={blogData} />
      <Footer change_page={change_page}/>
    </>
  );
};

export default Blog_Detail_Page;
