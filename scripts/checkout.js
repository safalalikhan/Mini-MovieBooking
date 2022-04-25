// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount = JSON.parse(localStorage.getItem("amount")) || 0;
document.getElementById("wallet").innerText = amount;
let movie = JSON.parse(localStorage.getItem("movie"));
document.getElementById("poster").src = movie.Poster;
document.getElementById("title").innerText = movie.Title;


function confirm() {
  let name = document.getElementById("user_name").value;
  let seats = Number(document.getElementById("number_of_seats").value);
  if (seats <= amount / 100) {
    amount -= seats * 100;
    localStorage.setItem("amount", JSON.stringify(amount));
    document.getElementById("wallet").innerText = amount;
    alert("Booking Successful!");
    window.location.href = "index.html";
  } else {
    alert("Insufficient Balance!");
  }
}
