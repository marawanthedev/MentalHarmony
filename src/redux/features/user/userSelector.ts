import type { RootState } from "redux/store";
import type { userState } from "./constant";

export const selectUserState = (state: RootState): userState =>
  state.user;
