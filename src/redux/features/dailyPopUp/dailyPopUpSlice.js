import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dailyPopUpService from "./dailyPopUpService";
import smartTryCatch from "../../../util/smartTryCatch.js";

const initState = {
  articleAttachments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  isFormSuccess: false,
  isFormError: false,
};

export const addArticleAttachment = createAsyncThunk(
  "articleAttachment",
  async (data, thunkAPI) => {
    return await smartTryCatch(
      dailyPopUpService.addArticleAttachment,
      data,
      thunkAPI
    );
  }
);

export const getArticles = createAsyncThunk(
  "getArticles",
  async (data, thunkAPI) => {
    return await smartTryCatch(dailyPopUpService.getArticles, thunkAPI);
  }
);
export const submitFeeling = createAsyncThunk(
  "submitFeeling",
  async (feeling, thunkAPI) => {
    return await smartTryCatch(
      dailyPopUpService.submitFeeling,
      feeling,
      thunkAPI
    );
  }
);
export const dailyPopUpSlice = createSlice({
  name: "dailyPopUp",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addArticleAttachment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addArticleAttachment.fulfilled, (state) => {
        state.isLoading = false;
        state.isFormSuccess = true;
      })
      .addCase(addArticleAttachment.rejected, (state) => {
        state.isLoading = false;
        state.isFormError = true;
      })
      .addCase(getArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.articleAttachments = action.payload;
      })
      .addCase(getArticles.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.articleAttachments = [];
      })
      .addCase(submitFeeling.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitFeeling.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(submitFeeling.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default dailyPopUpSlice.reducer;
