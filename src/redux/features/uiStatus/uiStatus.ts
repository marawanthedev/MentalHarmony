import { createSlice } from "@reduxjs/toolkit";

export type UIStatus = {
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
};

const initState: UIStatus = {
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const uiStatusSlice = createSlice({
  name: "uiStatus",
  initialState: initState,
  reducers: {
    setLoading: (state: UIStatus) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    setError: (state: UIStatus) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
    },
    setSuccess: (state: UIStatus) => {
      state.isSuccess = true;
      state.isError = false;
      state.isLoading = false;
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  extraReducers: () => {},
});

export const { setLoading, setError, setSuccess } = uiStatusSlice.actions;

export default uiStatusSlice.reducer;
