// ユーザー情報の表示
document.getElementById("ua").textContent = navigator.userAgent;
document.getElementById("datetime").textContent = new Date().toLocaleString();

// クエリパラメータからカード番号を取得
const params = new URLSearchParams(window.location.search);
const card = params.get("card") || "（未取得）";
document.getElementById("card-number").textContent = card;

// IPアドレス取得（外部API使用）
fetch("https://api.ipify.org?format=json")
.then(res => res.json())
.then(data => {
    document.getElementById("ip").textContent = data.ip;
})
.catch(() => {
    document.getElementById("ip").textContent = "取得失敗";
});

// タイマー（15分）
const timerElement = document.getElementById("timer");
let remaining = 60 * 60; // 秒単位

function updateTimer() {
    const min = String(Math.floor(remaining / 60)).padStart(2, "0");
    const sec = String(remaining % 60).padStart(2, "0");
    timerElement.textContent = `${min}:${sec}`;
    remaining--;
    if (remaining >= 0) {
        setTimeout(updateTimer, 1000);
    } else {
        timerElement.textContent = "期限切れ";
    }
}

updateTimer();