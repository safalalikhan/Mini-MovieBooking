// Store the wallet amount to your local storage with key "amount"
let amount = JSON.parse(localStorage.getItem("amount")) || 0;
document.getElementById("wallet").innerText = amount;
function addToWallet() {
  amount += Number(document.getElementById("amount").value);
  document.getElementById("wallet").innerText = amount;
  localStorage.setItem("amount", JSON.stringify(amount));
}
