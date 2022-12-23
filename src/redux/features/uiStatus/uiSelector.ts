import type { RootState } from "redux/store";
import type { UIStatus } from "./uiStatus";

export const SeelectUiStatusState = (state: RootState): UIStatus => state.uiStatus;
