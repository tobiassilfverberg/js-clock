// Countdown
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const congrats = document.querySelector("#done");
let secondsCounter = 14;
let timer;

minutes.innerText = "00";

const stopTimer = () => {
  clearInterval(timer);
};

const startTimer = () => {
  timer = setInterval(() => {
    minutes.innerText = "00";
    console.log(secondsCounter);
    seconds.innerText = secondsCounter;
    if (secondsCounter < 10) {
      seconds.innerText = "0" + secondsCounter;
    }
    if (secondsCounter === 0) {
      clearInterval(timer);
      congrats.classList.remove("hidden");
    }
    secondsCounter--;
  }, 1000);
};
