import React from "react";
import "./css/BlogDetail.css";
import blog_detail_photo from "../assets/blog_detail_photo.png";

const BlogDetail = ({ Blog_Detail, all_data }) => {
  // Find the item in all_data with the id equal to Blog_Detail
  const item = all_data.find((data) => data.id === Blog_Detail);

  // Check if item is found
  if (!item) {
    return <div>Item not found</div>;
  }

  // If item is found, display its day and month
  return (
    <div className="baslik p-md-5 p-3 pt-5 pb-5">
      <div className="d-flex row">
        <div className="col-12 col-md-3">
          <div className="blog_title row justify-content-start">
            <h1 className="blog_day_title">{item.day}</h1>
            <p className="blog_month_title">{item.month}</p>
          </div>
        </div>
        <div className="col-12 col-md-9">
          <div>
            {" "}
            <img className="blog_detail_photo" src={blog_detail_photo} alt="Teknik blog_detail_photo" />
          </div>
          <div>
            <label className="blog_detail_header">{item.header}</label>
            <label className="blog_paragraf">{item.detail_content}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
