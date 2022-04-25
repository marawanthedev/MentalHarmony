import React from "react";
import "./template.scss";
import SideNav from "../sideNav/sideNav";
import AppBar from "../appBar/appBar";
import { useState } from "react";
export default function Templatev2({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="template-v2">
      <SideNav
        tabs={tabs}
        selectionCallBack={(index) => setSelectedTab(tabs[index])}
      />

      <div className="template-v2__vertical">
        <AppBar header={selectedTab.text} name="Marwan Mostafa " />

        <div className="template-v2__main">
          {selectedTab.tabComponent ? <selectedTab.tabComponent /> : null}
        </div>
      </div>
    </div>
  );
}
