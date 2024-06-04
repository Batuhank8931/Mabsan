import React, { useState, useEffect } from "react";

import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import Blog from "../components/Blog";

import Main_Data from "../components/DB_converter";

const SektorItems = Main_Data.SektorItems;

const Blog_Page = ({ change_page, change_blog }) => {
  
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


  function reverseBlogData(blogData) {
    // Create a reversed copy of the array
    const reversedArray = blogData.slice().reverse();
  
    // Adjust the ids
    const reversedWithAdjustedIds = reversedArray.map((item, index) => ({
      ...item,
      id: blogData.length - index, // Adjusted id
    }));
  
    return reversedWithAdjustedIds;
  }
  
  const reversedBlogData = reverseBlogData(blogData);

  return (
    <>
      <SubNavbar
        change_page={change_page}
        sectorLabel={"Blog"}
        SektorItems={SektorItems}
      />
      <Blog blogData={reversedBlogData} change_blog={change_blog} />
      <Footer />
    </>
  );
};

export default Blog_Page;
