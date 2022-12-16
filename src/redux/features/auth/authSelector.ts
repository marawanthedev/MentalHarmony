import type { RootState } from "redux/store";
import type { authState } from "./constant";

export const selectAuthState = (state: RootState): authState => {
  return state.auth;
};

// const initState: authState = {
//     user: user,
//     isError: false,
//     isSuccess: false,
//     isLoading: false,
//     successAlternativeMessage: null,
//   };
