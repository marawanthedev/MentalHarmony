import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import approvalRequestsService from "./serviceProviderApprovalRequestsService";
import smartTryCatch from "util/smartTryCatch";
import { ServiceProviderState } from "./constant";

const initState: ServiceProviderState = {
  approvalRequests: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const acceptApprovalRequest = createAsyncThunk(
  "acceptApprovalRequest",
  async (id:number, thunkAPI) => {
    return await smartTryCatch({
      callback: approvalRequestsService.acceptApprovalRequest,
      callbackParams: id,
      rejectionObject: thunkAPI,
    });
  }
);

export const getApprovalRequests = createAsyncThunk(
  "getApprovalRequests",
  async (isApproved:boolean, thunkAPI) => {
    return await smartTryCatch({
      callback: approvalRequestsService.getApprovalRequests,
      callbackParams: isApproved,
      rejectionObject: thunkAPI,
    });
  }
);

export const serviceProviderApprovalRequestsSlice = createSlice({
  name: "dailyPopUp",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApprovalRequests.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getApprovalRequests.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.approvalRequests = action.payload;
      })
      .addCase(getApprovalRequests.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(acceptApprovalRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(acceptApprovalRequest.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(acceptApprovalRequest.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default serviceProviderApprovalRequestsSlice.reducer;
