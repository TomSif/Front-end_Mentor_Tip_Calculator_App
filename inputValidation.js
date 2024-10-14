/// #### Input value Limiter
// Function to limit the inputBill value in it to only alphanumerical et . and not > 999999
inputBill.addEventListener("keydown", function (event) {
  const key = event.key;

  // check key to allow
  if (
    !/^[0-9\.]$/.test(key) &&
    key !== "Backspace" &&
    key !== "Tab" &&
    key !== "ArrowLeft" &&
    key !== "ArrowRight" &&
    key !== "Delete"
  ) {
    event.preventDefault(); // - & + forbidden
  }
});

inputBill.addEventListener("input", function () {
  const regex = /^(?!.*[^\d.])([0-9]*\.?[0-9]{0,2})?$/; // no letter or symbol and no number shorter than 0.01;
  const value = inputBill.value;

  if (!regex.test(value)) {
    inputBill.value = value.slice(0, -1);
  }

  const numericValue = parseFloat(inputBill.value); //limit number to 999999
  if (numericValue > 999) {
    inputBill.value = value.slice(0, -1);
  }
});

// Function to limit the inputBill value in it to only alphanumerical et . and not > 999999
peopleCount.addEventListener("keydown", function (event) {
  const key = event.key;
  if (
    !/^[0-9\.]$/.test(key) &&
    key !== "Backspace" &&
    key !== "Tab" &&
    key !== "ArrowLeft" &&
    key !== "ArrowRight" &&
    key !== "Delete"
  ) {
    event.preventDefault(); // - & + forbidden
  }
});

peopleCount.addEventListener("input", function () {
  const regex = /^(?!.*[^\d.])([0-9]*\.?[0-9])?$/; // no letter or symbol and no number shorter than 0;
  const value = peopleCount.value;

  if (!regex.test(value)) {
    peopleCount.value = value.slice(0, -1);
  }

  const numericValue = parseFloat(peopleCount.value); //limit number to 999
  if (numericValue > 999) {
    peopleCount.value = value.slice(0, -1);
  }
});
// Function to limit the customTip value in it to only alphanumerical et . and not > 999
customTip.addEventListener("keydown", function (event) {
  const key = event.key;

  // check key to allow
  if (
    !/^[0-9\.]$/.test(key) &&
    key !== "Backspace" &&
    key !== "Tab" &&
    key !== "ArrowLeft" &&
    key !== "ArrowRight" &&
    key !== "Delete"
  ) {
    event.preventDefault(); // - & + forbidden
  }
});

customTip.addEventListener("input", function () {
  const regex = /^(?!.*[^\d.])([0-9]*\.?[0-9])?$/; // no letter or symbol and no number shorter than 0;
  const value = customTip.value;

  if (!regex.test(value)) {
    customTip.value = value.slice(0, -1);
  }

  const numericValue = parseFloat(customTip.value); //limit number to 999
  if (numericValue > 999) {
    customTip.value = value.slice(0, -1);
  }
});
