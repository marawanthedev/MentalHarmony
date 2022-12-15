import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookingService from "./bookingService";
import smartTryCatch from "util/smartTryCatch";
import { bookingState } from "./constants";

const initState: bookingState = {
  bookings: [],
  isBookingProcessError: false,
  isBookingProcessSuccess: false,
  isBookingProcessLoading: false,
};

export const addBooking = createAsyncThunk(
  "addBooking",
  async (
    data: {
      serviceProvider: number;
    },
    thunkAPI
  ) => {
    return await smartTryCatch({
      callback: bookingService.addBooking,
      callbackParams: data,
      rejectionObject: thunkAPI,
    });
  }
);
export const getUserBooking = createAsyncThunk(
  "getUserBooking",
  async (data, thunkAPI) => {
    return await smartTryCatch({
      callback: bookingService.getUserBooking,
      rejectionObject: thunkAPI,
    });
  }
);

export const acceptBooking = createAsyncThunk(
  "acceptBooking",
  async (id: number, thunkAPI) => {
    return await smartTryCatch({
      callback: bookingService.acceptBooking,
      callbackParams: id,
      rejectionObject: thunkAPI,
    });
  }
);

export const completeBooking = createAsyncThunk(
  "completeBooking",
  async (id: number, thunkAPI) => {
    return await smartTryCatch({
      callback: bookingService.completeBooking,
      callbackParams: id,
      rejectionObject: thunkAPI,
    });
  }
);

// dispatch(attachMeetingLink({ bookingId: selectedBookingId, meeting_link }));

export const attachMeetingLink = createAsyncThunk(
  "attachMeeting",
  async (data: { bookingId: number; meeting_link: string }, thunkAPI) => {
    return await smartTryCatch({
      callback: bookingService.attachMeetingLink,
      callbackParams: data,
      rejectionObject: thunkAPI,
    });
  }
);

export const rateBooking = createAsyncThunk(
  "rateBooking",
  async (data: { bookingId: number; rate: number }, thunkAPI) => {
    return await smartTryCatch({
      callback: bookingService.rateBooking,
      callbackParams: data,
      rejectionObject: thunkAPI,
    });
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
