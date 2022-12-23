import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";
import userService from "./userService";
import smartTryCatch from "util/smartTryCatch";
import { userState } from "./constant";

const initState: userState = {
  filteredUsers: [],
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const getUsersByType = createAsyncThunk(
  "filter:type",
  async (type:string, thunkAPI) => {
    return await smartTryCatch({
      callback: userService.getUsersByType,
      callbackParams: type,
      thunkObject: thunkAPI,
    });
  }
);

export const getUser = createAsyncThunk("getUser:id", async (thunkAPI) => {
  return await smartTryCatch({
    callback: userService.getUser,
    thunkObject: thunkAPI,
  });
});

export const updateUser = createAsyncThunk(
  "updateUser:id",
  // todo be typed properly 
  async (data:any, thunkAPI) => {
    return await smartTryCatch({
      callback: userService.updateUser,
      callbackParams: data,
      thunkObject: thunkAPI,
    });
  }
);
export const deleteUser = createAsyncThunk(
  "deleteUser:id",
  async (id:number, thunkAPI) => {
    return await smartTryCatch({
      callback: userService.deleteUser,
      callbackParams: id,
      thunkObject: thunkAPI,
    });
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersByType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsersByType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filteredUsers = action.payload;
      })
      .addCase(getUsersByType.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.filteredUsers = [];
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
