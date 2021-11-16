// Clock

const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const zeropad = (num) => (num < 10 ? "0" + num : num);

const getAndUpdateClock = () => {
  const now = new Date();

  hours.innerText = zeropad(now.getHours());
  minutes.innerText = zeropad(now.getMinutes());
  seconds.innerText = zeropad(now.getSeconds());
};

getAndUpdateClock();

setInterval(() => {
  getAndUpdateClock();
}, 1000);
