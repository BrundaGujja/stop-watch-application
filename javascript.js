let timer;
let seconds = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            document.getElementById("display").innerText = formatTime(seconds);
        }, 1000);
        isRunning = true;
    }
}

function pause() {
    clearInterval(timer);
    isRunning = false;
}

function reset() {
    clearInterval(timer);
    seconds = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("laps").innerHTML = "";
    isRunning = false;
}

function lap() {
    if (isRunning) {
        const lapTime = formatTime(seconds);
        const lapList = document.getElementById("laps");
        const lapItem = document.createElement("li");
        lapItem.innerText = lapTime;
        lapList.appendChild(lapItem);
    }
}

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return $
    {String(hrs).padStart(2, '0')}:$
    {String(mins).padStart(2, '0')}:$
    {String(secs).padStart(2, '0')};
}