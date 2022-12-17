import type { RootState } from "redux/store";
import type { bookingState } from "./constants";

export const selectBookingState = (state: RootState): bookingState =>
  state.bookings;
