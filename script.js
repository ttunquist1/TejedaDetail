// Simple form submission mockup
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // You can connect this to EmailJS or Formspree later
      message.textContent = "Thank you! Your booking request has been sent.";
      message.style.color = "green";

      form.reset();
    });
  }
});
