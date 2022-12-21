import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import smartTryCatch from "util/smartTryCatch";
import { authState } from "./constant";
import { IRegisterUser } from "constants/IRegisterUser";
import { ILoginUser } from "constants/ILoginUser";

// get user from local storage if it exists

const userLocalStorageItem = localStorage.getItem("user");

const user = userLocalStorageItem ? JSON.parse(userLocalStorageItem) : null;

const initState: authState = {
  user: user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  successAlternativeMessage: null,
};

// Register User
// async thunk takes route, then async function with params passed by func user
export const register = createAsyncThunk(
  "auth/register",
  async (user: IRegisterUser, thunkAPI) => {
    return await smartTryCatch({
      callback: authService.register,
      callbackParams: user,
      rejectionObject: thunkAPI,
    });
  }
);

// login User
// async thunk takes route, then async function with params passed by func user
export const login = createAsyncThunk(
  "auth/login",
  async (user: ILoginUser, thunkAPI) => {
    return await smartTryCatch({
      callback: authService.login,
      callbackParams: user,
      rejectionObject: thunkAPI,
    });
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  // reducers can not be async
  reducers: {
    resetAuth: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
    resetSuccessAlternativeMessage: (state) => {
      state.successAlternativeMessage = null;
    },
  },
  // extra reducers can be async
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.successAlternativeMessage = action.payload.message;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      });
  },
});

// exporting a singular function
export const { resetAuth, resetSuccessAlternativeMessage } = authSlice.actions;

export default authSlice.reducer;
