import type { RootState } from "redux/store";
import type { DailyPopUpState } from "./constant";

export const selectDailyPopupState = (state: RootState): DailyPopUpState =>
  state.dailyPopUp;
