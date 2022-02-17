// ===========All input Number retune function====================
function inputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value;
  const inputNumber = parseFloat(inputValue);

  return inputNumber;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  calculate();
});
document.getElementById("save-btn").addEventListener("click", function () {
  saveMoneyCalculate();
});
/* 
=============Calculatle Function 
*/
function calculate() {
  const income = inputValue("income-input");
  const foodNumber = inputValue("food-input");
  const RentNumber = inputValue("rent-input");
  const ClothesNumber = inputValue("clothes-input");

  const totalExpenses = foodNumber + RentNumber + ClothesNumber;
  const totalBalance = income - totalExpenses;

  document.getElementById("total-expenses").innerText = totalExpenses;
  document.getElementById("total-balance").innerText = totalBalance;
}
/* 
=============Save money function 
*/
function saveMoneyCalculate() {
  const totalBalance = document.getElementById("total-balance").innerText;
  const saveMoneyParcent = inputValue("save-input");
  const income = inputValue("income-input");

  const saveAmount = (income * saveMoneyParcent) / 100;
  const RemainingBalance = parseFloat(totalBalance) - saveAmount;
  //====text Vavlue
  document.getElementById("save-amount").innerText = saveAmount;
  document.getElementById("remaining-balance").innerText = RemainingBalance;
  document.getElementById("total-balance").innerText = totalBalance;
}
