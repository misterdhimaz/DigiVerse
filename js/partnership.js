document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const orgName = document.getElementById('org-name').value.trim();
    const contactPerson = document.getElementById('contact-person').value.trim();
    const email = document.getElementById('email').value.trim();
    const file = document.getElementById('proposal').files[0];

    if (!orgName || !contactPerson || !email || !file) {
      alert("Please complete all fields before submitting.");
      return;
    }

    const button = form.querySelector('button');
    button.disabled = true;
    button.innerText = "Sending...";

    setTimeout(() => {
      alert("Thank you for your proposal! Our team will review it shortly.");
      button.innerText = "Send Proposal";
      button.disabled = false;
      form.reset();
    }, 2000);
  });
});
