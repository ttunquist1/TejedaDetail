document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      emailjs.sendForm(
        "service_kusmtog",    // e.g. service_abcd123
        "template_egml402",   // e.g. template_xyz789
        "#bookingForm"
      )
      .then(() => {
        message.textContent = "✅ Your booking request has been sent!";
        message.style.color = "green";
        form.reset();
      }, (error) => {
        message.textContent = "❌ Failed to send. Please try again.";
        message.style.color = "red";
        console.error("EmailJS Error:", error);
      });
    });
  }
});
