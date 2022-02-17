//Button Event Handle
document.getElementById("calculate-btn").addEventListener("click", function () {
  calculate();
});
document.getElementById("save-btn").addEventListener("click", function () {
  saveMoneyCalculate();
});

// ===========All input Number retune function====================
function inputValue(inputId) {
  const inputField = document.getElementById(inputId + "-input");
  const inputValue = inputField.value;

  //===============Check input Value =================
  if (isNaN(inputValue)) {
    cleck("toast", inputId, "valid");
  } else if (inputValue < 0) {
    cleck("toast", inputId, "Positive");
  } else {
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
  }
}

//==================Check Function===============
function cleck(toastId, inputId, check) {
  const toast = document.getElementById(toastId);
  toast.classList.add("show");
  const ToastBody = document.getElementById(toastId + "-text");
  ToastBody.innerText = `Please Enter a ${inputId} ${check} Number !!`;
}
/* 
=============Calculatle Function ===========
*/
function calculate() {
  const income = inputValue("income");
  const foodNumber = inputValue("food");
  const RentNumber = inputValue("rent");
  const ClothesNumber = inputValue("clothes");

  const totalExpenses = foodNumber + RentNumber + ClothesNumber;
  const totalBalance = income - totalExpenses;
  if (totalExpenses > totalBalance) {
    cleck("toast", "TotalExpenses amount more than your Balance account", "");
  }
  document.getElementById("total-expenses").innerText = totalExpenses;
  document.getElementById("total-balance").innerText = totalBalance;
}
/* 
=============Save money function ==========
*/
function saveMoneyCalculate() {
  const totalBalance = document.getElementById("total-balance").innerText;
  const saveMoneyParcent = inputValue("save");
  const income = inputValue("income");

  const saveAmount = (income * saveMoneyParcent) / 100;
  const RemainingBalance = parseFloat(totalBalance) - saveAmount;
  if (saveAmount > totalBalance) {
    cleck("toast", "amount more than your savings account balance", "");
  }
  //====text Vavlue
  document.getElementById("save-amount").innerText = saveAmount;
  document.getElementById("remaining-balance").innerText = RemainingBalance;
  document.getElementById("total-balance").innerText = totalBalance;
}
