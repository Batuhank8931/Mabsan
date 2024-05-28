import React from "react";

import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import Blog from "../components/Blog";

import Main_Data from "../components/DB_converter";

const reversedBlogData = Main_Data.reversedBlogData;
const SektorItems = Main_Data.SektorItems;

const Blog_Page = ({change_page, change_blog}) => {
  return (
    <>
      <SubNavbar change_page={change_page} sectorLabel={"Blog"} SektorItems={SektorItems} />
      <Blog blogData={reversedBlogData} change_blog={change_blog} />
      <Footer />
    </>
  );
};

export default Blog_Page;
