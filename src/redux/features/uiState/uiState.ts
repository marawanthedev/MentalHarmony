import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppState = {
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
};

const initState: AppState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const reset = createAsyncThunk("uiStateReset", async () => {
  return;
});

export const uiStateSlice = createSlice({
  name: "uiState",
  initialState: initState,
  reducers: {
    setLoading: (state: AppState) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    setError: (state: AppState) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
    },
    setSuccess: (state: AppState, action: PayloadAction<any>) => {
      state.isSuccess = true;
      state.isError = false;
      state.isLoading = false;
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  extraReducers: (builder) => {
    builder.addCase(reset.fulfilled, (state) => {
      state.isError = false;
    });
  },
});

export const { setLoading, setError, setSuccess } = uiStateSlice.actions;

export default uiStateSlice.reducer;
