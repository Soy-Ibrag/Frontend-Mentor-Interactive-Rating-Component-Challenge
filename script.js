"use strict";

const btns = document.querySelectorAll(".btn");
const submitBtn = document.querySelector(".submit");
const card = document.querySelector(".card");
const thankYouCard = document.querySelector(".thank-you");
const rateText = document.querySelector(".rate");

let rating;
btns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    rating = index + 1;
    btns.forEach((b) => {
      b.style.backgroundColor = "";
      b.style.color = "";
    });
    btn.style.backgroundColor = "hsl(25, 97%, 53%)";
    btn.style.color = "hsl(216, 12%, 8%)";
  });
});

submitBtn.addEventListener("click", function () {
  if (rating) {
    card.style.display = "none";
    thankYouCard.style.visibility = "visible";
    rateText.textContent = `You selected ${rating} out of 5`;
  } else {
    alert("Please select a rating before submitting.");
  }
});
