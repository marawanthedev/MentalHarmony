import { Id } from "react-toastify";

export type bookingStructure = {
  _id?: Id;
  requestStatus: string;
  //todo update later
  student: any;
  //todo update later
  serviceProvider: any;
  meeting_link: string;
  rate: number;
};
