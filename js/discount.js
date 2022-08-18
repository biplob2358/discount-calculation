document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalAmount = getInputFieldValue("amount-field");
  const discount = getInputFieldValue("discount-field");

  const calculate = (discount / 100) * totalAmount;
  const payAble = totalAmount - calculate;
  const totalPayAble = payAble.toFixed(2);
  if (isNaN(totalPayAble)) {
    alert("Please Enter The Valid Amount and Discount");
    return;
  }

  setUpdateElementValue("total-element", totalPayAble);
});

document.getElementById("reset-btn").addEventListener("click", function () {
  getResetFieldById("discount-field");
  getResetFieldById("amount-field");
  getResetElementById("total-element");
});
document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});
