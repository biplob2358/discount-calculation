function getInputFieldValue(inputId) {
  const inputFieldValue = document.getElementById(inputId);
  const inputFieldValueString = inputFieldValue.value;
  const inputValue = parseFloat(inputFieldValueString);

  return inputValue;
}

// function getTotalElement(inputId) {
//   const totalElement = document.getElementById(inputId);
//   const totalElementValueString = totalElement.innerText;
//   const previousTotalValue = parseFloat(totalElementValueString);
//   return previousTotalValue;
// }

function setUpdateElementValue(elementId, newValue) {
  const previousTextElement = document.getElementById(elementId);
  previousTextElement.innerText = newValue;
}

function getResetFieldById(inputId) {
  const inputFieldValue = document.getElementById(inputId);
  inputFieldValue.value = "";
}
function getResetElementById(elementId) {
  const previousTextElement = document.getElementById(elementId);
  previousTextElement.innerText = "00";
}
