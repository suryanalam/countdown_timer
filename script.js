const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let timerId;

function timer() {
  if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
    resetTimer();
    alert('Time UP !!');
  } else if (seconds.value != 0) {
    seconds.value = `${seconds.value <= 10 ? "0" : ""}${seconds.value - 1}`;
  } else if (minutes.value != 0) {
    minutes.value = `${minutes.value <= 10 ? "0" : ""}${minutes.value - 1}`;
    seconds.value = 59;
  } else if (hours.value != 0) {
    hours.value = `${hours.value <= 10 ? "0" : ""}${hours.value - 1}`;
    minutes.value = 60;
  }
}

function startTimer() {
  if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
    alert("Set the duration to start timer !!");
    return;
  }

  resetBtn.style.display = "block";
  pauseBtn.style.display = "block";
  startBtn.style.display = "none";

  if(seconds.value > 60){
    minutes.value = parseInt(minutes.value) + 1;
    seconds.value = parseInt(seconds.value) - 59;
  }

  if(minutes.value > 60){
    hours.value = parseInt(hours.value) + 1;
    minutes.value = parseInt(minutes.value) - 60;
  }

  timerId = setInterval(() => {
    timer();
  }, 1000);
}

function pauseTimer() {
  // Clear the interval to pause the timer
  clearInterval(timerId);
  pauseBtn.style.display = "none";

  startBtn.style.display = "block";
  startBtn.innerText = "Continue";
}

function resetTimer() {
  // Clear the interval to pause the timer execution
  clearInterval(timerId);
  resetBtn.style.display = "none";
  pauseBtn.style.display = "none";
  startBtn.style.display = "block";
  startBtn.innerText = "Start";

  // Reset the input values
  hours.value = "";
  minutes.value = "";
  seconds.value = "";
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
