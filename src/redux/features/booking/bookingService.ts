import { http } from "util/restAPI";
import assert from "util/assertion";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/booking`;

// todo gotta figure out what the fuck is it doing here
const addBooking = async (data: any) => {
  const res = await http.post(`${BASE_URL}`, data);
  return assert(res, res.data, "Add booking failed", res);
};

const getUserBooking = async () => {
  const res = await http.get(`${BASE_URL}/currentUser`);
  return assert(res, res.data, "Retrieval failed", res);
};

const acceptBooking = async (bookingId: any) => {
  const res = await http.post(`${BASE_URL}/accept`, { bookingId });
  return assert(res, res.data, "Booking acceptance failed", res);
};

const attachMeetingLink = async ({ bookingId, meeting_link }: any) => {
  const res = await http.post(`${BASE_URL}/attachLink`, {
    bookingId,
    meeting_link,
  });
  return assert(res, res.data, "attaching link failed", res);
};

const completeBooking = async (bookingId: any) => {
  const res = await http.post(`${BASE_URL}/complete`, { bookingId });
  return assert(res, res.data, "Booking completion failed", res);
};
const rateBooking = async ({ bookingId, rate }: any) => {
  const res = await http.post(`${BASE_URL}/rate`, { bookingId, rate });
  return assert(res, res.data, "Booking Rating failed", res);
};

const bookingService = {
  addBooking,
  getUserBooking,
  acceptBooking,
  attachMeetingLink,
  completeBooking,
  rateBooking,
};

export default bookingService;
