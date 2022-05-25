import { http } from "../../../util/restAPI";
import assert from "../../../util/assertion";

const BASE_URL = "http://localhost:5000/booking";

const addBooking = async (data) => {
  const res = await http.post(`${BASE_URL}`, data);
  return assert(res, res.data, "Add booking failed", res);
};

const getBooking = async () => {
  const res = await http.get(`${BASE_URL}`);
  return assert(res, res.data, "Retrieval failed", res);
};

const bookingService = {
  addBooking,
  getBooking,
};

export default bookingService;
