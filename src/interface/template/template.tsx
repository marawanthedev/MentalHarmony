import React from "react";
import Navbar from "interface/navbar/navbar";
import "./template.scss";
import Footer from "interface/footer/footer";
import { ReactNode } from "constants/reactNode";



type ITemplate = {
  children: ReactNode;
};

export default function Template(props: ITemplate): JSX.Element {
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
