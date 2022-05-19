import React from "react";
import StickyHeadTable from "../../components/StickyHeadTable/StickyHeadTable";
import AvatarText from "../../components/avatarText/avatarText";
import CustomButton from "../../components/button/button";
import DialogPopUp from "../../components/dialogPopUp/dialogPopUp";
import StatusPopUp from "../../components/statusPopUp/statusPopUp";
import { useState } from "react";

const columns = [
  { id: "details", label: "Details", minWidth: 100 },
  {
    id: "speciality",
    label: "Speciality",
    minWidth: 120,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "mobileNumber",
    label: " Mobile number",
    minWidth: 120,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "location",
    label: "Location",
    minWidth: 120,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

const dataRows = [
  {
    details: <AvatarText text="Tom Cruise" />,
    speciality: "Depression",
    mobileNumber: "01559178830",
    location: "Skuadi",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    speciality: "Depression",
    mobileNumber: "01559178830",
    location: "Skuadi",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    speciality: "Depression",
    mobileNumber: "01559178830",
    location: "Skuadi",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    speciality: "Depression",
    mobileNumber: "01559178830",
    location: "Skuadi",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    speciality: "Depression",
    mobileNumber: "01559178830",
    location: "Skuadi",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    speciality: "Depression",
    mobileNumber: "01559178830",
    location: "Skuadi",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    speciality: "Depression",
    mobileNumber: "01559178830",
    location: "Skuadi",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    speciality: "Depression",
    mobileNumber: "01559178830",
    location: "Skuadi",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    speciality: "Depression",
    mobileNumber: "01559178830",
    location: "Skuadi",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    speciality: "Depression",
    mobileNumber: "01559178830",
    location: "Skuadi",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    speciality: "Depression",
    mobileNumber: "01559178830",
    location: "Skuadi",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    speciality: "Depression",
    mobileNumber: "01559178830",
    location: "Skuadi",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    speciality: "Depression",
    mobileNumber: "01559178830",
    location: "Skuadi",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    speciality: "Depression",
    mobileNumber: "01559178830",
    location: "Skuadi",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    speciality: "Depression",
    mobileNumber: "01559178830",
    location: "Skuadi",
  },
];

export default function RemoveServiceProvider() {
  const [showDialog, setShowDialog] = useState(false);
  const [blurTable, setBlurTable] = useState(false);
  const [showConfirmPopUp, setShowConfirmPopUp] = useState(false);

  const generateRows = () => {
    let rows = [];

    dataRows.forEach((row, index) => {
      rows[index] = {
        ...row,
        action: (
          <CustomButton
            type={"button"}
            backGroundColor="#FB4B4B"
            innerText="REMOVE"
            color={"white"}
            displayType={"block"}
            width="100%"
            height="4rem"
            fontWeight="600"
            fontSize="1.1rem"
            borderRadius="2.5rem"
            onClick={() => {
              setShowDialog(true);
              setBlurTable(true);
            }}
          />
        ),
      };
    });
    return rows;
  };

  return (
    <>
      {showDialog ? (
        <DialogPopUp
          cancelCallBack={() => {
            setShowDialog(false);
            setBlurTable(false);
          }}
          confirmCallBack={() => {
            setShowConfirmPopUp(true);
            setShowDialog(false);
          }}
        />
      ) : null}
      {showConfirmPopUp ? (
        <StatusPopUp
          closeBtnOnClick={() => {
            setShowDialog(false);
            setBlurTable(false);
            setShowConfirmPopUp(false);
          }}
          success={true}
        />
      ) : null}

      <StickyHeadTable blur={blurTable} rows={generateRows()} cols={columns} />
    </>
  );
}
