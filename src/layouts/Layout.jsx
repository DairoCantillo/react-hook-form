import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className="layout_content">{children}</section>
      <Footer />
    </>
  );
};

export default Layout;
