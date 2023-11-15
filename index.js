let input = document.getElementById("start");
let countdownInterval;

input.addEventListener("click", (e) => {
  e.preventDefault();

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  let totalSeconds = choice.value * 60;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let affichage = document.getElementById("countdownDisplay");

  affichage.innerHTML = `${minutes}:${seconds}`;

  countdownInterval = setInterval(function () {
    if (seconds > 0 || minutes > 0) {
      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        minutes--;
        seconds = 59;
      }

      affichage.innerHTML = `${minutes}:${seconds}`;
    } else {
      clearInterval(countdownInterval);
    }
  }, 1000);
});
