import assert from "util/assertion";
import { request } from "util/axios";
import { AxiosMethods } from "constants/Axios";

const BASE_URL = `/booking`;

// todo gotta figure out what the fuck is it doing here
const addBooking = async (data: any) => {
  const res = await request({
    endpoint: `${BASE_URL}`,
    method: AxiosMethods.POST,
    data,
  });
  return assert(res, res.data, "Add booking failed", res);
};

const getUserBooking = async () => {
  const res = await request({
    endpoint: `${BASE_URL}/currentUser`,
    method: AxiosMethods.GET,
  });
  return assert(res, res.data, "Retrieval failed", res);
};

const acceptBooking = async (bookingId: any) => {
  const res = await request({
    endpoint: `${BASE_URL}/accept`,
    method: AxiosMethods.POST,
    data: { bookingId },
  });
  return assert(res, res.data, "Booking acceptance failed", res);
};

const attachMeetingLink = async ({ bookingId, meeting_link }: any) => {
  const res = await request({
    endpoint: `${BASE_URL}/attachLink`,
    method: AxiosMethods.POST,
    data: { bookingId, meeting_link },
  });
  return assert(res, res.data, "attaching link failed", res);
};

const completeBooking = async (bookingId: any) => {
  const res = await request({
    endpoint: `${BASE_URL}/complete`,
    method: AxiosMethods.POST,
    data: { bookingId },
  });
  return assert(res, res.data, "Booking completion failed", res);
};
const rateBooking = async ({ bookingId, rate }: any) => {
  const res = await request({
    endpoint: `${BASE_URL}/rate`,
    method: AxiosMethods.POST,
    data: { bookingId, rate },
  });
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
