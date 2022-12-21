//* smartTryCatch guide, (callback,callbackParams,rejectionObject)

type smartTryCatchProp = {
  callback: Function;
  callbackParams?: any;
  rejectionObject: any;
};
export default async function smartTryCatch({
  callback,
  callbackParams,
  rejectionObject,
}: smartTryCatchProp) {
  try {
    return await callback(callbackParams ? callbackParams : null);
  } catch (error: any) {
    const message =
      (error.response && error.res.data && error.res.data.message) ||
      error.message ||
      error.toString();

    if (rejectionObject) return rejectionObject.rejectWithValue(message);

    return message;
  }
}
