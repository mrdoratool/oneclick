// カウントダウン処理（30分）
let minutes = 30;
let seconds = 0;
const timerElem = document.getElementById("timer");

function updateTimer() {
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }
    if (minutes < 0) {
        timerElem.innerText = "終了しました";
        return;
    }
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");
    timerElem.innerText = `${m}:${s}`;
    setTimeout(updateTimer, 1000);
}

updateTimer();