import React from "react";
import "./templatev2.scss";
import SideNav from "interface/sideNav/sideNav";
import AppBar from "interface/appBar/appBar";
import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { tab } from "constants/tab";
import { RootState } from "redux/store";
import { selectAuthState } from "redux/features/auth/authSelector";

function mapState(state: RootState) {
  return { ...selectAuthState(state) };
}

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends Partial<PropsFromRedux> {
  tabs: Array<tab>;
}
function Templatev2({ tabs, user, isLoading }: Props): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<tab>(tabs[0]);

  return (
    <div className="template-v2">
      <div className="template-v2__side-nav-container">
        <SideNav
          tabs={tabs}
          selectionCallBack={(index: number) => setSelectedTab(tabs[index])}
        />
      </div>

      <div className="template-v2__vertical">
        {selectedTab && user && (
          <AppBar header={selectedTab?.text} name={user?.name} user={user} />
        )}

        {/* <div className="template-v2__main">{handleRendering()}</div> */}

        <div className="template-v2__main">
          <selectedTab.getTabComponentRender />
        </div>
      </div>
    </div>
  );
}

export { Templatev2 }; // un-connected version
export default connector(Templatev2); // connected version
