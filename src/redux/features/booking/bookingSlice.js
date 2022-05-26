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
export const getUserBooking = createAsyncThunk(
  "getUserBooking",
  async (data, thunkAPI) => {
    return await smartTryCatch(bookingService.getUserBooking, thunkAPI);
  }
);

export const acceptBooking = createAsyncThunk(
  "acceptBooking",
  async (data, thunkAPI) => {
    return await smartTryCatch(bookingService.acceptBooking, data, thunkAPI);
  }
);

export const completeBooking = createAsyncThunk(
  "completeBooking",
  async (data, thunkAPI) => {
    return await smartTryCatch(bookingService.completeBooking, data, thunkAPI);
  }
);

export const attachMeetingLink = createAsyncThunk(
  "attachMeeting",
  async (data, thunkAPI) => {
    return await smartTryCatch(
      bookingService.attachMeetingLink,
      data,
      thunkAPI
    );
  }
);

export const rateBooking = createAsyncThunk(
  "rateBooking",
  async (data, thunkAPI) => {
    return await smartTryCatch(bookingService.rateBooking, data, thunkAPI);
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
      .addCase(rateBooking.pending, (state) => {
        state.isBookingProcessLoading = true;
      })
      .addCase(rateBooking.fulfilled, (state) => {
        state.isBookingProcessLoading = false;
        state.isBookingProcessSuccess = true;
      })
      .addCase(rateBooking.rejected, (state) => {
        state.isBookingProcessLoading = false;
        state.isBookingProcessError = true;
      })
      .addCase(getUserBooking.pending, (state) => {
        state.isBookingProcessLoading = true;
      })
      .addCase(getUserBooking.rejected, (state) => {
        state.isBookingProcessLoading = false;
        state.isBookingProcessError = true;
      })
      .addCase(getUserBooking.fulfilled, (state, action) => {
        state.isBookingProcessLoading = false;
        state.isBookingProcessError = true;
        state.bookings = action.payload;
      })
      .addCase(acceptBooking.pending, (state) => {
        state.isBookingProcessLoading = true;
      })
      .addCase(acceptBooking.rejected, (state) => {
        state.isBookingProcessLoading = false;
        state.isBookingProcessError = true;
      })
      .addCase(acceptBooking.fulfilled, (state) => {
        state.isBookingProcessLoading = false;
        state.isBookingProcessSuccess = true;
      })
      .addCase(completeBooking.pending, (state) => {
        state.isBookingProcessLoading = true;
      })
      .addCase(completeBooking.rejected, (state) => {
        state.isBookingProcessLoading = false;
        state.isBookingProcessError = true;
      })
      .addCase(completeBooking.fulfilled, (state) => {
        state.isBookingProcessLoading = false;
        state.isBookingProcessSuccess = true;
      })
      .addCase(attachMeetingLink.pending, (state) => {
        state.isBookingProcessLoading = true;
      })
      .addCase(attachMeetingLink.rejected, (state) => {
        state.isBookingProcessLoading = false;
        state.isBookingProcessError = true;
      })
      .addCase(attachMeetingLink.fulfilled, (state) => {
        state.isBookingProcessLoading = false;
        state.isBookingProcessSuccess = true;
      });
  },
});

export default bookingSlice.reducer;
