import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  const path = location.pathname;
  console.log(path);
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
