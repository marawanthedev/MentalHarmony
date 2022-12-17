import type { RootState } from "redux/store";
import type { ServiceProviderState } from "./constant";

export const selectServiceProviderState = (state: RootState): ServiceProviderState =>
  state.serviceProviderApprovalRequest;
