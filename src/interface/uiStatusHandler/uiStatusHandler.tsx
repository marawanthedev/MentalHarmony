import React from "react";
import Spinner from "interface/spinner/spinner";
import { connect, ConnectedProps } from "react-redux";
import { SeelectUiStatusState } from "redux/features/uiStatus/uiSelector";
import { RootState } from "redux/store";
import { toast } from "react-toastify";

function mapProps(state: RootState) {
  return { ...SeelectUiStatusState(state) };
}

const connector = connect(mapProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const successNotification = (message = "Success") => {
  toast.success(message, {
    toastId: "success-notification",
  });
};
const errorNotification = (message = "Failure!") => {
  toast.error(message, { toastId: "error-notification" });
};

function UiStatusHandler({ isError, isLoading, isSuccess }: PropsFromRedux) {
  const handleRendering = () => {
    if (isLoading) return <Spinner />;
    if (isSuccess) successNotification();
    if (isError) errorNotification();
  };

  return <>{handleRendering()}</>;
}

export { UiStatusHandler };

export default connector(UiStatusHandler);
