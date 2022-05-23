import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import approvalRequestsService from "./serviceProviderApprovalRequestsService.js";
import smartTryCatch from "../../../util/smartTryCatch.js";

const initState = {
  approvalRequests: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const acceptApprovalRequest = createAsyncThunk(
  "acceptApprovalRequest",
  async (id, thunkAPI) => {
    return await smartTryCatch(
      approvalRequestsService.acceptApprovalRequest,
      id,
      thunkAPI
    );
  }
);

export const getApprovalRequests = createAsyncThunk(
  "getApprovalRequests",
  async (data, thunkAPI) => {
    return await smartTryCatch(
      approvalRequestsService.getApprovalRequests,
      data,
      thunkAPI
    );
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
