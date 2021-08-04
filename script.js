"use strict";

const showMessage = function (message) {
    document.querySelector(".message").textContent = `${message}`;
};
//////////////////////////////////////////////////////////////////////////////////////////////
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
//////////////////////////////////////////////////////////////////////////////////////////////
btnCheck.addEventListener("click", function () {
    const valueGuess = Number(document.querySelector(".guess").value);

    // whene there is no input
    if (!valueGuess) {
        showMessage("⛔ یه عددی وارد کن");
    }

    // whene player is wins
    else if (valueGuess === randomNumber) {
        showMessage("🎉 برررررردی");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = randomNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }

    // whene player is loose
    else if (valueGuess !== randomNumber) {
        if (score > 1) {
            valueGuess > randomNumber
                ? showMessage("⏬ کمتره!")
                : showMessage("⏫ بیشتره!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            showMessage("💥 ای بابا بازی رو باختی که!");
            document.querySelector(".score").textContent = "0";
        }
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////
btnAgain.addEventListener("click", function () {
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".guess").value = "";
    showMessage("شروع حدس زدن ...");
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
});
