import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Header from "../Components/Header";
import Cult from "../Pages/Cult";
import MainPage from "../Pages/MainPage";
import Care from "../Pages/Care";
import Mind from "../Pages/Mind";
import Store from "../Pages/Store";
import Sports from "../Pages/Sports";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div>
      <div className="md:block hidden">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Routes>
        <Route path="/cult" element={<Cult />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/care" element={<Care />} />
      </Routes>
      <Routes>
        <Route path="/mind" element={<Mind />} />
      </Routes>
      <Routes>
        <Route path="/store" element={<Store />} />
      </Routes>
      <Routes>
        <Route path="/sports" element={<Sports />} />
      </Routes>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
