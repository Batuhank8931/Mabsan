import React, { useEffect, useState } from "react"; // Import useState from React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import useNavigate

import backgroundSVG from "./assets/HeaderBackground.svg";

import MainPage from "./pages/Main_Page";

import BlogDetailPage from "./pages/Blog_Detail_Page";
import BlogPage from "./pages/Blog_Page";
import IletisimPage from "./pages/Iletisim_Page";
import KariyerPage from "./pages/Kariyer_Page";
import KurumsalPage from "./pages/Kurumsal_Page";
import Sektorler_Page from "./pages/Sektorler_Page";
import SurdurulebilirlikPage from "./pages/Surdurulebilirlik_Page";
import UretimPage from "./pages/Uretim_Page";
import UrunlerPage from "./pages/Urunler_Page";
import Blog_User_Page from "./pages/Blog_User_Page";

import Main_Data from "./components/DB_converter";

import "./App.css"; // Import the CSS file

const SektorItems = Main_Data.SektorItems;

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [loaderSize, setLoaderSize] = useState(250);
  const [finishLoading, setFinishLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(false);
    }, 3500);

    const finish_loading = setTimeout(() => {
      setLoaderSize(0.001);
    }, 3350);

    const timeout_make_bigger = setTimeout(() => {
      setLoaderSize(400);
    }, 2050);

    return () => clearTimeout(timeout, timeout_make_bigger, finish_loading);
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

  const routes = SektorItems.map((item) => (
    <Route
      key={item.way} // Provide a unique key for each route
      path={`/${item.way}`}
      element={
        <Sektorler_Page change_page={change_page} sektor_item={item.name} />
      }
    />
  ));

  return (
    <Router basename="/">
      <div
        className="App-container"
        style={{
          position: "relative",
          backgroundImage: `url(${backgroundSVG})`,
        }}
      >
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
              path="/surdurulebilirlik"
              element={<SurdurulebilirlikPage change_page={change_page} />}
            />
            <Route
              path="/iletisim"
              element={<IletisimPage change_page={change_page} />}
            />
            <Route
              path="/Blog_User_Page"
              element={<Blog_User_Page/>}
            />
            {routes}
          </Routes>
        </div>

        <div className={`loading_bar ${showLoading ? "" : "hidden"}`}>
          <div
            className={`spinner-container ${finishLoading ? "" : "hidden"}`}
            style={{
              width: `${loaderSize}px`,
              height: `${loaderSize}px`,
            }}
          >
            <div className="spinner">
              <div className="spinner">
                <div className="spinner">
                  <div className="spinner">
                    <div className="spinner">
                      <div className="spinner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
