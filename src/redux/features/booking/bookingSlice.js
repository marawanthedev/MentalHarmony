import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookingService from "./bookingService.js";
import smartTryCatch from "../../../util/smartTryCatch.js";
const initState = {
  bookings: [],
  isBookingProcessError: false,
  isBookingProcessSuccess: false,
  isBookingProcessLoading: false,
};

export const addBooking = createAsyncThunk(
  "addBooking",
  async (data, thunkAPI) => {
    return await smartTryCatch(bookingService.addBooking, data, thunkAPI);
  }
);

export const bookingSlice = createSlice({
  name: "dailyPopUp",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBooking.pending, (state) => {
        state.isBookingProcessLoading = true;
      })
      .addCase(addBooking.fulfilled, (state) => {
        state.isBookingProcessLoading = false;
        state.isBookingProcessSuccess = true;
      })
      .addCase(addBooking.rejected, (state) => {
        state.isBookingProcessLoading = false;
        state.isBookingProcessError = true;
      });
  },
});

export default bookingSlice.reducer;
