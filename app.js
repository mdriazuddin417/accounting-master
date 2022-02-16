function inputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value;
  const inputNumber = parseFloat(inputValue);

  return inputNumber;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  calculate();
});
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
