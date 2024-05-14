import React, { useEffect, useState } from "react"; // Import useState from React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import useNavigate

import backgroundSVG from "./assets/HeaderBackground.svg";

import MainPage from "./pages/Main_Page";

import BlogDetailPage from "./pages/Blog_Detail_Page";
import BlogPage from "./pages/Blog_Page";
import IletisimPage from "./pages/Iletisim_Page";
import KariyerPage from "./pages/Kariyer_Page";
import KurumsalPage from "./pages/Kurumsal_Page";
import PerakendePage from "./pages/Perakende_Page";
import SurdurulebilirlikPage from "./pages/Surdurulebilirlik_Page";
import UretimPage from "./pages/Uretim_Page";
import UrunlerPage from "./pages/Urunler_Page";

import "./App.css"; // Import the CSS file

const App = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(false);
    }, 1000); // Adjust the duration (in milliseconds) as needed

    return () => clearTimeout(timeout);
  }, []);

  const [Subheader, setSubheader] = useState(true);
  const [BigHeader, setBigHeader] = useState("");
  const [blog_id, setBlogId] = useState("");

  useEffect(() => {
    const savedBlogId = localStorage.getItem("blog_id");
    if (savedBlogId) {
      setBlogId(savedBlogId);
    }
  }, []);

  const change_blog = (label, blog) => {
    console.log("Changing blog:", label); // Add this line to log the label
    setBlogId(label);
    setBigHeader(blog);
    localStorage.setItem("blog_id", label);
  };

  const change_page = (label) => {
    if (!Subheader) {
      setBigHeader(label);
    } else {
      setSubheader((prevSubheader) => !prevSubheader);
      setBigHeader(label);
    }
  };

  return (
    <Router basename="/">
      <div
        className="App-container"
        style={{
          position: "relative",
          backgroundImage: `url(${backgroundSVG})`,
        }}
      >
        {/* Wrap everything with the container */}
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage change_page={change_page} />} />
            <Route
              path="/kurumsal"
              element={<KurumsalPage change_page={change_page} />}
            />
            <Route
              path="/uretim"
              element={<UretimPage change_page={change_page} />}
            />
            <Route
              path="/urunler"
              element={<UrunlerPage change_page={change_page} />}
            />
            <Route
              path="/kariyer"
              element={<KariyerPage change_page={change_page} />}
            />
            <Route
              path="/blog"
              element={
                <BlogPage change_page={change_page} change_blog={change_blog} />
              }
            />
            <Route
              path="/blog/:blog_id"
              element={
                <BlogDetailPage
                  change_page={change_page}
                  Blog_Detail={blog_id}
                />
              }
            />
            <Route
              path="/perakende"
              element={<PerakendePage change_page={change_page} />}
            />
            <Route
              path="/surdurulebilirlik"
              element={<SurdurulebilirlikPage change_page={change_page} />}
            />
            <Route
              path="/iletisim"
              element={<IletisimPage change_page={change_page} />}
            />
          </Routes>
        </div>
        <div className={`loading_bar ${showLoading ? "" : "hidden"}`}>
          <div class="progress-loader">
            <div class="progress"></div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
