import { http } from "../../../util/restAPI";
import assert from "../../../util/assertion";

const BASE_URL = "http://localhost:5000/booking";

const addBooking = async (data) => {
  const res = await http.post(`${BASE_URL}`, data);
  return assert(res, res.data, "Add booking failed", res);
};

const getUserBooking = async () => {
  const res = await http.get(`${BASE_URL}/currentUser`);
  return assert(res, res.data, "Retrieval failed", res);
};

const acceptBooking = async (bookingId) => {
  const res = await http.post(`${BASE_URL}/accept`, { bookingId });
  return assert(res, res.data, "Booking acceptance failed", res);
};

const attachMeetingLink = async ({ bookingId, meeting_link }) => {
  const res = await http.post(`${BASE_URL}/attachLink`, {
    bookingId,
    meeting_link,
  });
  return assert(res, res.data, "attaching link failed", res);
};

const completeBooking = async (bookingId) => {
  const res = await http.post(`${BASE_URL}/complete`, { bookingId });
  return assert(res, res.data, "Booking completion failed", res);
};
const rateBooking = async ({ bookingId, rate }) => {
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
