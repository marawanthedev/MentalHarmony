import React from "react";
import Navbar from "../../container/navbar/navbar";
import MobileNavBar from "../../container/mobileNavBar/mobileNavBar";
import Footer from "../../container/footer/footer";
import "./template.scss";
export default function Template(props) {
  return (
    <div className="template">
      <header>
        <div className="desktop-navbar-container">
          <Navbar />
        </div>
        <div className="mobile-navbar-container">
          <MobileNavBar />
        </div>
      </header>

      <main>{props.children}</main>

      <Footer />
    </div>
  );
}
