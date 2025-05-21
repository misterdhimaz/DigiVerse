document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const companyName = document.getElementById('company-name').value.trim();
    const contactName = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const file = document.getElementById('business-doc').files[0];

    if (!companyName || !contactName || !email || !phone || !file) {
      alert("Please fill in all required fields.");
      return;
    }

    // Fake submit animation
    const button = form.querySelector('button');
    button.disabled = true;
    button.innerText = "Submitting...";

    setTimeout(() => {
      alert("Application submitted successfully!");
      button.innerText = "Submit Application";
      button.disabled = false;
      form.reset();
    }, 2000);
  });
});