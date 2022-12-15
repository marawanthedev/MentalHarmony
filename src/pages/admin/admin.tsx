import React from "react";
import Templatev2 from "components/templatev2/templatev2";
import Minus from "assets/svg/Remove_Minus.svg";
import eye from "assets/images/visibility.webp";
import attach from "assets/svg/File_Add.svg";
import AttachUsefulArticles from "container/attachUsefulArticles/attachUsefulArticles";
import ViewUniStudentsTab from "container/viewUniStudentsTab/viewUniStudentsTab";
import RemoveServiceProvider from "container/removeServiceProvider/removeServiceProvider";
import ManageServiceProviderApprovalRequests from "container/manageServiceProviderApprovalRequests/manageServiceProviderApprovalRequests";
import ManageApprovalRequestsIcon from "assets/images/contract.webp";
import Protected from "util/protected";

export default function Admin() {
  const tabs: any = [
    {
      text: "Remove service provider",
      icon: Minus,
      getTabComponent: () => RemoveServiceProvider,
    },
    {
      text: "View University students",
      icon: eye,
      getTabComponent: () => ViewUniStudentsTab,
    },
    {
      text: "Attach useful articles",
      icon: attach,
      getTabComponent: () => AttachUsefulArticles,
    },
    {
      text: "Manage Pending Service provider Request",
      icon: ManageApprovalRequestsIcon,
      getTabComponent: () => ManageServiceProviderApprovalRequests,
    },
  ];
  return (
    <>
      <Protected userType="admin">
        <Templatev2 tabs={tabs} />
      </Protected>
    </>
  );
}
