import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
  TelegramIcon,
  shareContent
} from "react-share";
import "./css/BlogDetail.css";
import blog_detail_photo from "../assets/blog_detail_photo.png";

import share_logo from "../assets/share_icon.svg";

const BlogDetail = ({ Blog_Detail}) => {

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

  const all_data = blogData;
  console.log(Blog_Detail);
  console.log(all_data);
  console.log( "cacaa");

  const item = all_data.find((data) => data.id === String(Blog_Detail));


  console.log(item);

  if (!item) {
    return <div>Item not found</div>;
  }

  const shareUrl = window.location.href;
  const shareContent = item.detail_content;
  const shareImage = window.location.origin + blog_detail_photo;

  return (
    <div className="baslik p-md-5 p-3 pt-5 pb-5">
      <Helmet>
        <meta name="description" content={item.header} />
      </Helmet>
      <div className="d-flex row">
        <div className="col-12 col-md-3">
          <div className="blog_title row justify-content-start">
            <h1 className="blog_day_title">{item.day}</h1>
            <p className="blog_month_title">{item.month}</p>
          </div>
        </div>
        <div className="col-12 col-md-9">
          <div>
            <img
              className="blog_detail_photo"
              src={blog_detail_photo}
              alt="Blog Detail"
            />
          </div>
          <div className="blog_frame">
            <label className="blog_detail_header">{item.header}</label>
            <label className="blog_paragraf">{item.detail_content}</label>
            <div className="share_button_container p-3">
              <div
                className="all_buttons d-flex justify-content-between"
                style={{ backgroundColor: "black"}}
              >
                <FacebookShareButton url={shareUrl} quote={shareContent}>
                  <FacebookIcon size={"50px"} round />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={shareContent}>
                  <TwitterIcon size={50} round />
                </TwitterShareButton>
                <LinkedinShareButton
                  url={shareUrl}
                  title={item.header}
                  summary={shareContent}
                  source="Your Website Name"
                >
                  <LinkedinIcon size={50} round />
                </LinkedinShareButton>
                <WhatsappShareButton url={shareUrl} title={shareContent}>
                  <WhatsappIcon size={50} round />
                </WhatsappShareButton>
                <TelegramShareButton url={shareUrl} title={shareContent}>
                  <TelegramIcon size={50} round />
                </TelegramShareButton>
                <EmailShareButton
                  url={shareUrl}
                  subject={item.header}
                  body={shareContent}
                >
                  <EmailIcon size={50} round />
                </EmailShareButton>
              </div>
              <div
                className="share_button"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              > 
                <button
                  className="d-flex column"
                  style={{
                    backgroundColor: "grey",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                  onClick={() => console.log("Share button clicked")}
                >
                  <img src={share_logo} alt="Share"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
