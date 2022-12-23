import {
  setLoading,
  setError,
  setSuccess,
} from "redux/features/uiStatus/uiStatus";
// ui status handler slice actions

//* smartTryCatch guide, (callback,callbackParams,thunk object)

type smartTryCatchProp = {
  callback: Function;
  callbackParams?: any;
  thunkObject: any;
};
export default async function smartTryCatch({
  callback,
  callbackParams,
  thunkObject,
}: smartTryCatchProp) {
  try {
    thunkObject.dispatch(setLoading()); // triggering loading state across application

    const callbackResult = await callback(
      callbackParams ? callbackParams : null
    );

    thunkObject.dispatch(setSuccess()); // triggering success if callback was successfully executed

    return callbackResult;
  } catch (error: any) {
    const message =
      (error.response && error.res.data && error.res.data.message) ||
      error.message ||
      error.toString();

    thunkObject.dispatch(setError()); // triggering error state

    if (thunkObject) return thunkObject.rejectWithValue(message);

    return message;
  }
}
