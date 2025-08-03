(function () {
  var hours = document.querySelector(".hours");
  var minutes = document.querySelector(".minutes");
  var seconds = document.querySelector(".seconds");

  var start = document.querySelector("#start");
  var pause = document.querySelector("#pause");
  var reset = document.querySelector("#reset");

  var countdownTimer;

  start.addEventListener("click", () => {
    if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) return;

    function startTimer() {
      start.style.display = "none";
      pause.style.display = "initial";

      countdownTimer = setInterval(() => {
        timer();
      }, 1000);
    }

    startTimer();
  });

  function endTimer(state) {
    start.innerHTML = `${state === "pause" ? "Continue" : "Start"}`;
    start.style.display = "initial";
    pause.style.display = "none";

    clearInterval(countdownTimer);
  }

  function timer() {
    if (seconds.value > 60) {
      minutes.value++;
      seconds.value = seconds.value - 60;
    }

    if (minutes.value > 60) {
      hours.value++;
      minutes.value = minutes.value - 60;
    }

    if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
      hours.value = "";
      minutes.value = "";
      seconds.value = "";
      endTimer();
    } else if (seconds.value != 0) {
      seconds.value = `${seconds.value <= 10 ? "0" : ""}${seconds.value - 1}`;
    } else if (minutes.value != 0 && seconds.value == 0) {
      seconds.value = 59;
      minutes.value = `${minutes.value <= 10 ? "0" : ""}${minutes.value - 1}`;
    } else if (hours.value != 0 && minutes.value == 0) {
      minutes.value = 60;
      hours.value = `${hours.value <= 10 ? "0" : ""}${hours.value - 1}`;
    }
  }

  pause.addEventListener("click", () => {
    endTimer("pause");
  });

  reset.addEventListener("click", () => {
    hours.value = "";
    minutes.value = "";
    seconds.value = "";
    endTimer();
  });
})();
