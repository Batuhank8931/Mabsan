import React, { useState, useEffect } from "react";

import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import BlogDetail from "../components/BlogDetail";

import Main_Data from "../components/DB_converter";


const SektorItems = Main_Data.SektorItems;

const Blog_Detail_Page = ({ change_page , Blog_Detail }) => {

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Fetch the blog data
    fetch("https://a.neomani.com/data.php")
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const blogDetailId = parseInt(Blog_Detail);

  return (
    <>
      <SubNavbar change_page={change_page} sectorLabel={"Blog"} SektorItems={SektorItems} />
      <BlogDetail Blog_Detail={blogDetailId} />
      <Footer change_page={change_page}/>
    </>
  );
};

export default Blog_Detail_Page;
