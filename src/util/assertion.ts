// @Assertion
// @Assure that there are valid data
// @access Public

//* Assert guide, (assertionFactor,DataToBeReturned,errorMessage,res object)
export default function assert(
  assertionFactor: any,
  dataToBeReturned: any,
  errorMessage: string,
  resObject?: any
) {
  if (assertionFactor && assertionFactor !== null) {
    return dataToBeReturned;
  }
  throw new Error(errorMessage);
}
