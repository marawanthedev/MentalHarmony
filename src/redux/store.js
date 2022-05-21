import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import userSlice from "./features/user/userSlice";
import dailyPopUpSlice from "./features/dailyPopUp/dailyPopUpSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    dailyPopUp: dailyPopUpSlice,
  },
});
