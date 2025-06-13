let i = 0;
const emojis = ["🎁", "🎉", "📱", "🍀", "⭐", "💥"];
const slot = document.getElementById("slot");

function spin() {
    i++;
    slot.textContent =
    emojis[Math.floor(Math.random() * emojis.length)] + " " +
    emojis[Math.floor(Math.random() * emojis.length)] + " " +
    emojis[Math.floor(Math.random() * emojis.length)];
    if (i < 25) {
        setTimeout(spin, 100);
    } else {
        window.location.href = "../winner";
    }
}

spin();