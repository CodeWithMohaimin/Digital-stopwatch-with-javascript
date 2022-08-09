
let minute = document.getElementById('minute');
let second = document.getElementById('second');

let start = document.getElementById('start');
let reset = document.getElementById('reset');
let pause = document.getElementById('pause');



let min;
let sec = 0;
let timer = null;
let watchIsRunning = false;

function startFunction() {
    if (!watchIsRunning) {
        watchIsRunning = true;

        timer = setInterval(function () {
        sec++;

        let { min, seconds } = getTime(sec);
        
        minute.textContent = min < 10 ? ('0' + min) : min;
        second.textContent = seconds < 10 ? ('0' + seconds) : seconds;
            
    },1000)
   }
}
function resetFunction() {
    watchIsRunning = false;
    clearInterval(timer);
    min = 0;
    sec = 0;
    minute.textContent = '00';
    second.textContent = '00';
}
function pauseFunction() {
    watchIsRunning = false;
    clearInterval(timer);

}

// get times from the function arguments
function getTime(sec) {
    min = parseInt(sec / 60);
    seconds = parseInt(sec % 60);

    return {
        min,
        seconds,
    }
}

start.addEventListener('click', startFunction);
reset.addEventListener('click', resetFunction);
pause.addEventListener('click', pauseFunction);