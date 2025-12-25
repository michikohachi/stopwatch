// Stopwatch logic
const timeEl = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let startTime = 0;
let elapsed = 0; // ms
let timerId = null;

function formatTime(ms){
  const totalCentiseconds = Math.floor(ms / 10);
  const centi = totalCentiseconds % 100;
  const totalSeconds = Math.floor(totalCentiseconds / 100);
  const sec = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const min = totalMinutes % 60;
  const hrs = Math.floor(totalMinutes / 60);
  const pad = (n, d=2)=>String(n).padStart(d,'0');
  return `${pad(hrs)}:${pad(min)}:${pad(sec)}.${pad(centi)}`;
}

function updateDisplay(){
  timeEl.textContent = formatTime(elapsed);
}

function tick(){
  elapsed = Date.now() - startTime;
  updateDisplay();
}

function start(){
  // start or resume
  startTime = Date.now() - elapsed;
  timerId = setInterval(tick, 10);
  // button states: start disabled, stop enabled, reset enabled
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}

function stop(){
  if (timerId){
    clearInterval(timerId);
    timerId = null;
  }
  // stop allows resume -> enable start, disable stop
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
}

function reset(){
  if (timerId){
    clearInterval(timerId);
    timerId = null;
  }
  elapsed = 0;
  startTime = 0;
  updateDisplay();
  // return to initial state: start enabled, stop disabled, reset disabled
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}

// wire buttons
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

// initialize display
updateDisplay();
