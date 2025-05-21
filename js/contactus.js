// contact us
// Fungsi untuk form dummy (Kemitraan & Investor)
  function submitForm(event) {
    event.preventDefault();
    alert("Pesan Anda telah dikirim!");
    return false;
  }

  // Navigasi tab
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      contents.forEach(content => {
        content.classList.toggle("active", content.id === target);
      });
    });
  });

  // Kirim Form ke Formspree (khusus form Pertanyaan, Kemitraan, Investor)
  document.querySelectorAll("form[action^='https://formspree.io']").forEach((form) => {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const status = form.querySelector(".form-status");
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
      status.classList.remove("error");
      status.classList.add("success");
      status.innerText = "Pesan berhasil dikirim. Terima kasih!";
      form.reset();
    } else {
      status.classList.remove("success");
      status.classList.add("error");
      status.innerText = "Gagal mengirim. Silakan coba lagi.";
    }
    });
  });
