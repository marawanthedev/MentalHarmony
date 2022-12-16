import React from "react";
import "./templatev2.scss";
import SideNav from "components/sideNav/sideNav";
import AppBar from "components/appBar/appBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { tab } from "constants/tab";
import { RootState } from "redux/store";
import ViewUniStudentsTab from "container/viewUniStudentsTab/viewUniStudentsTab";

type Templatev2Props = {
  tabs: Array<tab>;
};

export default function Templatev2({ tabs }: Templatev2Props): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<tab>(tabs[0]);

  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="template-v2">
      <div className="template-v2__side-nav-container">
        <SideNav
          tabs={tabs}
          selectionCallBack={(index: number) => setSelectedTab(tabs[index])}
        />
      </div>

      <div className="template-v2__vertical">
        {selectedTab && <AppBar header={selectedTab?.text} name={user.name} />}

        {/* <div className="template-v2__main">{handleRendering()}</div> */}

        <div className="template-v2__main">
          <selectedTab.getTabComponentRender />
        </div>
      </div>
    </div>
  );
}
