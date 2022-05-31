import React from "react";
import Navbar from "../../container/navbar/navbar";
import "./template.scss";
import Footer from "../../container/footer/footer";
export default function Template(props) {
  return (
    <div className="template">
      <div className="template__inner">
        <header>
          <div className="desktop-navbar-container">
            <Navbar isMobile={false} />
          </div>
          <div className="mobile-navbar-container">
            <Navbar isMobile={true} />
          </div>
        </header>

        <main>{props.children}</main>
      </div>

      <Footer />
    </div>
  );
}
