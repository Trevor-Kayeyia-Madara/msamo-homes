// mpesa.js

document.addEventListener("DOMContentLoaded", function() {
    const paymentSuccessButton = document.getElementById("payment-success");
    if (paymentSuccessButton) {
        paymentSuccessButton.addEventListener("click", function() {
            // Navigate back to dashboard.html
            window.location.href = "dashboard.html";
        });
    }
});
