import React from "react";
import "./admin.scss";
import Templatev2 from "../../components/templatev2/templatev2";
// import { ReactComponent as addPlus } from "../../assets/svg/Add_Plus.svg";
import addPlus from "../../assets/svg/Add_Plus.svg";
import Minus from "../../assets/svg/Remove_Minus.svg";
import eye from "../../assets/images/visibility.png";
import attach from "../../assets/svg/File_Add.svg";
import AddServiceProviderForm from "../../container/addServiceProviderTab/addServiceProviderTab";
import AttachUsefulArticles from "../../container/attachUsefulArticles/attachUsefulArticles";
import ViewUniStudentsTab from "../../container/viewUniStudentsTab/viewUniStudentsTab";
export default function Admin() {
  const tabs = [
    {
      text: "Add service provider",
      icon: addPlus,
      tabComponent: AddServiceProviderForm,
    },
    {
      text: "Remove service provider",
      icon: Minus,
    },
    {
      text: "View University students",
      icon: eye,
      tabComponent: ViewUniStudentsTab,
    },
    {
      text: "Attach useful articles",
      icon: attach,
      tabComponent: AttachUsefulArticles,
    },
  ];
  return (
    <>
      <Templatev2 tabs={tabs} />
    </>
  );
}
