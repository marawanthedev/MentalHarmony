import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import userSlice from "./features/user/userSlice";
import dailyPopUpSlice from "./features/dailyPopUp/dailyPopUpSlice";
import uiStateSlice from "./features/uiState/uiState";
import serviceProviderApprovalRequestsSlice from "./features/serviceProviderApprovalRequests/serviceProviderApprovalRequestsSlice";
import bookingSlice from "./features/booking/bookingSlice";
import { useDispatch } from "react-redux";



export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    dailyPopUp: dailyPopUpSlice,
    serviceProviderApprovalRequest: serviceProviderApprovalRequestsSlice,
    bookings: bookingSlice,
    uiState: uiStateSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; //
