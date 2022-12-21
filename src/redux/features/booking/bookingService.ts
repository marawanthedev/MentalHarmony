import assert from "util/assertion";
import { request } from "util/axios";
import { AxiosMethods } from "constants/Axios";

const BASE_URL = `/booking`;

// todo gotta figure out what the fuck is it doing here
const addBooking: Function = async (data: { serviceProvider: string }) => {
  const res = await request({
    endpoint: `${BASE_URL}`,
    method: AxiosMethods.POST,
    data,
  });
  return assert(res, res.data, "Add booking failed", res);
};

const getUserBooking: Function = async () => {
  const res = await request({
    endpoint: `${BASE_URL}/currentUser`,
    method: AxiosMethods.GET,
  });
  return assert(res, res.data, "Retrieval failed", res);
};

const acceptBooking: Function = async (bookingId: string) => {
  const res = await request({
    endpoint: `${BASE_URL}/accept`,
    method: AxiosMethods.POST,
    data: { bookingId },
  });
  return assert(res, res.data, "Booking acceptance failed", res);
};

const attachMeetingLink: Function = async ({
  bookingId,
  meeting_link,
}: {
  bookingId: string;
  meeting_link: string;
}) => {
  const res = await request({
    endpoint: `${BASE_URL}/attachLink`,
    method: AxiosMethods.POST,
    data: { bookingId, meeting_link },
  });
  return assert(res, res.data, "attaching link failed", res);
};

const completeBooking: Function = async (bookingId: string) => {
  const res = await request({
    endpoint: `${BASE_URL}/complete`,
    method: AxiosMethods.POST,
    data: { bookingId },
  });
  return assert(res, res.data, "Booking completion failed", res);
};
const rateBooking: Function = async ({
  bookingId,
  rate,
}: {
  bookingId: string;
  rate: string;
}) => {
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
