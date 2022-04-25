import React from "react";
import StickyHeadTable from "../StickyHeadTable/StickyHeadTable";
import AvatarText from "../../components/avatarText/avatarText";

const columns = [
  { id: "details", label: "Details", minWidth: 170 },
  {
    id: "speciality",
    label: "Speciality",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "mobileNumber",
    label: " Mobile number",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "location",
    label: "Location",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

// function createData(details, speciality, mobileNumber, location) {
//   return { details, speciality, mobileNumber, location };
// }

const rows = [
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

export default function ViewUniStudentsTab() {
  return (
    <>
      <StickyHeadTable rows={rows} cols={columns} />
    </>
  );
}
