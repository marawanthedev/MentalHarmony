import React from "react";
import "./templatev2.scss";
import SideNav from "../sideNav/sideNav";
import AppBar from "../appBar/appBar";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Templatev2({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="template-v2">
      <div className="template-v2__side-nav-container">
        <SideNav
          tabs={tabs}
          selectionCallBack={(index) => setSelectedTab(tabs[index])}
        />
      </div>

      <div className="template-v2__vertical">
        <AppBar header={selectedTab.text} name={user.name} />

        <div className="template-v2__main">
          {selectedTab.tabComponent ? <selectedTab.tabComponent /> : null}
        </div>
      </div>
    </div>
  );
}
