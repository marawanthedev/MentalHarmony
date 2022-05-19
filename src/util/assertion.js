//@Assertion
//@Assure that there are valid data
//@access Public

function assert(assertionFactor, dataToBeReturned, errorMessage, res) {
  if (
    assertionFactor !== undefined &&
    assertionFactor !== null &&
    assertionFactor !== "" &&
    assertionFactor !== [] &&
    assertionFactor !== {}
  ) {
    console.log("passed");
    console.log(dataToBeReturned);
    return dataToBeReturned;
  } else {
    res.status(400);
    throw new Error(errorMessage);
  }
}

module.exports = assert;
