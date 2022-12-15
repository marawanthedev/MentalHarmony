import React, { ReactComponentElement } from "react";
import "./templatev2.scss";
import SideNav from "components/sideNav/sideNav";
import AppBar from "components/appBar/appBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { tab } from "constants/tab";
import { RootState } from "redux/store";

type Templatev2Props = {
  tabs: Array<tab>;
};

const handleRendering = (selectedTab: tab): Function | null => {
  if (selectedTab && selectedTab.getTabComponentRender) {
    // eslint-disable-next-line
    return selectedTab.getTabComponentRender();
  }
  return null;
};

export default function Templatev2({ tabs }: Templatev2Props): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<tab>(tabs && tabs[0]);
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

        <div className="template-v2__main">{handleRendering(selectedTab)}</div>
      </div>
    </div>
  );
}
