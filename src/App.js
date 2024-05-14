import React, { useEffect, useState } from "react"; // Import useState from React
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom"; // Import useNavigate

import backgroundSVG from "./assets/HeaderBackground.svg";

import Main_Page from "./pages/Main_Page";

import Blog_Detail_Page from "./pages/Blog_Detail_Page";
import Blog_Page from "./pages/Blog_Page";
import Iletisim_Page from "./pages/Iletisim_Page";
import Kariyer_Page from "./pages/Kariyer_Page";
import Kurumsal_Page from "./pages/Kurumsal_Page";
import Perakende_Page from "./pages/Perakende_Page";
import Surdurulebilirlik_Page from "./pages/Surdurulebilirlik_Page";
import Uretim_Page from "./pages/Uretim_Page";
import Urunler_Page from "./pages/Urunler_Page";

import "./App.css"; // Import the CSS file

const App = () => {
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
            <Route path="/" element={<Main_Page change_page={change_page} />} />
            <Route
              path="/kurumsal"
              element={<Kurumsal_Page change_page={change_page} />}
            />
            <Route
              path="/uretim"
              element={<Uretim_Page change_page={change_page} />}
            />
            <Route
              path="/urunler"
              element={<Urunler_Page change_page={change_page} />}
            />
            <Route
              path="/kariyer"
              element={<Kariyer_Page change_page={change_page} />}
            />
            <Route
              path="/blog"
              element={
                <Blog_Page
                  change_page={change_page}
                  change_blog={change_blog}
                />
              }
            />
            <Route
              path="/blog/:blog_id"
              element={
                <Blog_Detail_Page
                  change_page={change_page}
                  Blog_Detail={blog_id}
                />
              }
            />
            <Route
              path="/perakende"
              element={<Perakende_Page change_page={change_page} />}
            />
            <Route
              path="/surdurulebilirlik"
              element={<Surdurulebilirlik_Page change_page={change_page} />}
            />
            <Route
              path="/iletisim"
              element={<Iletisim_Page change_page={change_page} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
