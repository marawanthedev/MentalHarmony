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
export const getBooking = createAsyncThunk(
  "getBooking",
  async (data, thunkAPI) => {
    return await smartTryCatch(bookingService.getBooking, thunkAPI);
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
      })
      .addCase(getBooking.pending, (state) => {
        state.isBookingProcessLoading = true;
      })
      .addCase(getBooking.rejected, (state) => {
        state.isBookingProcessLoading = false;
        state.isBookingProcessError = true;
      })
      .addCase(getBooking.fulfilled, (state, action) => {
        state.isBookingProcessLoading = false;
        state.isBookingProcessError = true;
        state.bookings = action.payload;
      });
  },
});

export default bookingSlice.reducer;
