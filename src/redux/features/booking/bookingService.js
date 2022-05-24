import { http } from "../../../util/restAPI";
import assert from "../../../util/assertion";

const BASE_URL = "http://localhost:5000/bookings";

const addBooking = async (data) => {
  console.log(data);
  const res = await http.post(`${BASE_URL}`, data);
  return assert(res, res.data, "Retrieval failed", res);
};

const bookingService = {
  addBooking,
};

export default bookingService;
