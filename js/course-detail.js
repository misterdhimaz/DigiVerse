// Data kursus, sesuaikan dengan yang di halaman utama
const courses = {
    uiux: {
    title: "Dasar UI/UX",
    image: "../images/uiux2.jpg",
    description: "Belajar dasar desain antarmuka dan pengalaman pengguna dengan studi kasus nyata.",
    price: "Rp1.200.000",
    duration: "4 minggu",
    startDate: "15 Juni 2025",
    content: `
        <h2>Deskripsi Kursus</h2>
        <p>Kursus ini membekali peserta dengan pengetahuan menyeluruh tentang prinsip desain antarmuka pengguna (UI) dan pengalaman pengguna (UX). Dengan kombinasi teori dan latihan langsung, peserta akan memahami bagaimana menciptakan desain yang tidak hanya menarik tetapi juga fungsional dan efisien.</p>
        <h2>Materi Pembelajaran</h2>
        <ul>
        <li>Prinsip dan elemen desain UI/UX modern</li>
        <li>User flow, wireframing, dan prototyping</li>
        <li>Studi kasus aplikasi populer</li>
        <li>Implementasi desain dengan Figma dan Adobe XD</li>
        </ul>
        <h2>Instruktur</h2>
        <p>Seorang desainer senior yang telah menangani lebih dari 50 proyek desain aplikasi dari startup hingga korporat global.</p>
    `
},
    webdev: {
    title: "Web Development Pemula",
    image: "../images/wd2.jpg",
    description: "Pelajari HTML, CSS, dan JavaScript dari nol hingga bisa membuat website sendiri.",
    price: "Rp1.500.000",
    duration: "6 minggu",
    startDate: "1 Juli 2025",
    content: `
        <h2>Deskripsi Kursus</h2>
        <p>Kursus ini ditujukan untuk pemula yang ingin memahami dasar-dasar pembuatan website. Mulai dari struktur HTML, tata letak dengan CSS, hingga menambahkan interaksi dengan JavaScript, semua akan dibahas secara menyeluruh dan praktikal.</p>
        <h2>Materi Pembelajaran</h2>
        <ul>
        <li>HTML5 dan semantic structure</li>
        <li>Responsive design dengan Flexbox dan Grid</li>
        <li>DOM manipulation dan event handling</li>
        <li>Mini project: Website portofolio pribadi</li>
        </ul>
        <h2>Instruktur</h2>
        <p>Web developer bersertifikasi dengan pengalaman mengembangkan situs untuk UKM, institusi pendidikan, dan e-commerce.</p>
    `
    },
    figma: {
    title: "Figma for Beginner",
    image: "../images/figma2.jpg",
    description: "Pelajari cara mendesain prototype interaktif menggunakan Figma.",
    price: "Rp900.000",
    duration: "3 minggu",
    startDate: "20 Juni 2025",
    content: `
        <h2>Deskripsi Kursus</h2>
        <p>Kursus ini fokus pada penggunaan Figma sebagai alat utama untuk membuat wireframe, UI kit, dan prototype interaktif. Tidak diperlukan pengalaman desain sebelumnya.</p>
        <h2>Materi Pembelajaran</h2>
        <ul>
        <li>Mengenal workspace Figma dan tools dasar</li>
        <li>Membuat layout dan komponen reusable</li>
        <li>Mendesain dan menguji prototype interaktif</li>
        </ul>
        <h2>Instruktur</h2>
        <p>Instruktur adalah praktisi UI designer yang telah mengajar lebih dari 500 peserta di berbagai pelatihan digital design nasional.</p>
    `
    },
    marketing: {
    title: "Digital Marketing Dasar",
    image: "../images/dm2.jpg",
    description: "Optimasi media sosial, SEO, dan campaign iklan digital.",
    price: "Rp1.000.000",
    duration: "5 minggu",
    startDate: "10 Juli 2025",
    content: `
        <h2>Deskripsi Kursus</h2>
        <p>Kursus ini dirancang untuk memberikan pemahaman menyeluruh tentang cara menjalankan strategi digital marketing yang efektif. Cocok untuk pemilik bisnis kecil, freelancer, maupun mahasiswa.</p>
        <h2>Materi Pembelajaran</h2>
        <ul>
        <li>Pengenalan digital marketing dan audiens target</li>
        <li>Optimasi SEO dan penggunaan Google Analytics</li>
        <li>Strategi konten untuk media sosial</li>
        <li>Pembuatan dan analisis campaign Facebook & Instagram Ads</li>
        </ul>
        <h2>Instruktur</h2>
        <p>Seorang digital marketer yang telah sukses mengelola kampanye pemasaran untuk berbagai brand fashion dan edukasi.</p>
    `
    },
    workshop: {
    title: "Workshop: Coding 1 Hari",
    image: "../images/wc2.jpg",
    description: "Pelatihan coding intensif selama 1 hari penuh. Cocok untuk pemula.",
    price: "Rp450.000",
    duration: "1 hari",
    startDate: "Setiap Sabtu",
    content: `
        <h2>Deskripsi Kursus</h2>
        <p>Sesi intensif satu hari untuk kamu yang ingin mencicipi dunia coding. Peserta akan dipandu membuat aplikasi sederhana sambil mempelajari logika dasar pemrograman.</p>
        <h2>Materi Pembelajaran</h2>
        <ul>
        <li>Logika pemrograman dan syntax dasar</li>
        <li>Latihan membuat kalkulator atau game sederhana</li>
        <li>Simulasi error dan debugging</li>
        </ul>
        <h2>Instruktur</h2>
        <p>Seorang mentor dari coding bootcamp ternama yang dikenal dengan pendekatan mengajar yang fun dan mudah dipahami.</p>
    `
    },
    microsoftexcel: {
    title: "Microsoft Excel Basic to Advanced",
    image: "../images/me2.jpg",
    description: "Pelajari Excel dari fungsi dasar hingga analisis data lanjutan.",
    price: "Rp750.000",
    duration: "3 minggu",
    startDate: "24 Juni 2025",
    content: `
        <h2>Deskripsi Kursus</h2>
        <p>Kuasai Microsoft Excel dari level dasar seperti formula sederhana, hingga fitur lanjutan seperti PivotTable, VLOOKUP, dan dashboard visual.</p>
        <h2>Materi Pembelajaran</h2>
        <ul>
        <li>Formula dasar dan pengolahan data</li>
        <li>Fungsi logika dan lookup</li>
        <li>Pembuatan grafik dan dashboard</li>
        <li>Studi kasus analisis keuangan</li>
        </ul>
        <h2>Instruktur</h2>
        <p>Trainer Excel bersertifikasi Microsoft dengan pengalaman korporat di bidang data reporting.</p>
    `
    },
    dataanalyst: {
    title: "Data Analyst untuk Pemula",
    image: "../images/da2.jpg",
    description: "Langkah awal menjadi data analyst dengan tools populer dan studi kasus nyata.",
    price: "Rp1.350.000",
    duration: "4 minggu",
    startDate: "1 Agustus 2025",
    content: `
        <h2>Deskripsi Kursus</h2>
        <p>Kursus ini memberikan fondasi dalam analisis data menggunakan Excel, SQL, dan tools visualisasi. Peserta akan belajar cara membaca data, membersihkannya, dan menarik insight bisnis darinya.</p>
        <h2>Materi Pembelajaran</h2>
        <ul>
        <li>Konsep dasar analisis data dan data cleaning</li>
        <li>Query SQL dasar untuk manipulasi data</li>
        <li>Visualisasi dengan Google Data Studio</li>
        <li>Studi kasus: analisis penjualan retail</li>
        </ul>
        <h2>Instruktur</h2>
        <p>Data analyst dari perusahaan teknologi yang telah bekerja dengan ribuan baris data per hari.</p>
    `
    },
    akuntansi: {
    title: "Akuntansi Dasar dengan Software",
    image: "../images/ata2.jpg",
    description: "Pelajari akuntansi dasar dan pencatatan keuangan digital.",
    price: "Rp800.000",
    duration: "3 minggu",
    startDate: "5 Agustus 2025",
    content: `
        <h2>Deskripsi Kursus</h2>
        <p>Cocok untuk pelaku UMKM atau mahasiswa, kursus ini membahas akuntansi dasar serta penggunaan software akuntansi populer untuk pencatatan digital.</p>
        <h2>Materi Pembelajaran</h2>
        <ul>
        <li>Konsep dasar debit-kredit dan jurnal umum</li>
        <li>Penggunaan aplikasi akuntansi (misal: Accurate, Jurnal)</li>
        <li>Simulasi laporan keuangan sederhana</li>
        </ul>
        <h2>Instruktur</h2>
        <p>Akuntan publik dan konsultan UMKM yang telah membina lebih dari 300 bisnis kecil menengah.</p>
    `
    },
    toefl: {
    title: "TOEFL Preparation Course",
    image: "../images/toefl2.jpg",
    description: "Persiapan TOEFL intensif: reading, listening, speaking, dan writing.",
    price: "Rp1.100.000",
    duration: "4 minggu",
    startDate: "10 Agustus 2025",
    content: `
        <h2>Deskripsi Kursus</h2>
        <p>Kursus ini dirancang untuk membantu peserta mempersiapkan tes TOEFL secara maksimal dengan latihan soal, tips strategi menjawab, dan simulasi ujian.</p>
        <h2>Materi Pembelajaran</h2>
        <ul>
        <li>Strategi membaca cepat dan efisien</li>
        <li>Latihan listening dan pengenalan aksen</li>
        <li>Speaking practice dan peer feedback</li>
        <li>Essay writing dan grammar review</li>
        </ul>
        <h2>Instruktur</h2>
        <p>Pengajar bahasa Inggris berpengalaman dan certified TOEFL instructor yang telah membantu ratusan siswa mencapai skor tinggi.</p>
    `
    }
};


    // Ambil query param ?id=...
    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    // Render course detail
    function renderCourseDetail() {
      const id = getQueryParam('id');
      const container = document.getElementById('course-detail');

      if (!id || !courses[id]) {
        container.innerHTML = `<h2>Kursus tidak ditemukan</h2><p>Maaf, kursus yang Anda cari tidak tersedia.</p>`;
        return;
      }

      const course = courses[id];
      container.innerHTML = `
        <h1>${course.title}</h1>
        <img src="${course.image}" alt="${course.title}" class="course-image" />
        <p>${course.description}</p>
        ${course.content}
      `;
    }

    renderCourseDetail();


        // Update fungsi renderCourseDetail untuk menampilkan detail harga, durasi, tanggal mulai, dan tombol daftar:
    function renderCourseDetail() {
    const id = getQueryParam('id');
    const container = document.getElementById('course-detail');

    if (!id || !courses[id]) {
        container.innerHTML = `<h2>Kursus tidak ditemukan</h2><p>Maaf, kursus yang Anda cari tidak tersedia.</p>`;
        return;
    }

    const course = courses[id];
    container.innerHTML = `
    <h1>${course.title}</h1>
    <img src="${course.image}" alt="${course.title}" class="course-image" />
    <p class="lead">${course.description}</p>

    <div class="course-info-box">
        <div><strong>💰 Harga:</strong> ${course.price}</div>
        <div><strong>⏱️ Durasi:</strong> ${course.duration}</div>
        <div><strong>📅 Tanggal Mulai:</strong> ${course.startDate}</div>
    </div>

    ${course.content}

    <button id="btn-daftar" class="btn-back btn-glow">Daftar Sekarang</button>

    <div id="modal-form" class="modal hidden">
        <div class="modal-overlay"></div>
        <div class="modal-content animate-pop">
        <span id="close-modal" class="close-btn">&times;</span>
        <h2>Daftar Kursus: <span>${course.title}</span></h2>
        <form id="registration-form" class="form-group">
            <label for="name">Nama Lengkap</label>
            <input type="text" id="name" name="name" required placeholder="Contoh: Fajar Akbar" />

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="Contoh: fajar@email.com" />

            <label for="phone">No. Telepon</label>
            <input type="tel" id="phone" name="phone" required placeholder="08xxxxxxxxxx" />

            <label for="payment">Metode Pembayaran</label>
            <select id="payment" name="payment" required>
            <option value="" disabled selected>Pilih metode pembayaran</option>
            <option value="transfer">Transfer Bank</option>
            <option value="ewallet">E-Wallet (OVO, GoPay, Dana)</option>
            <option value="creditcard">Kartu Kredit</option>
            </select>

            <button type="submit" class="btn-back">Kirim Pendaftaran</button>
        </form>
        </div>
    </div>
    `;


  const btnDaftar = document.getElementById('btn-daftar');
  const modal = document.getElementById('modal-form');
  const closeModal = document.getElementById('close-modal');
  const form = document.getElementById('registration-form');

  btnDaftar.addEventListener('click', () => {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

//   notifikasi pendaftaran
form.addEventListener('submit', e => {
  e.preventDefault();

  // Reset dan tutup modal
  form.reset();
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';

  // Tampilkan notifikasi
  const toast = document.getElementById('toast');
  toast.textContent = `Terima kasih, ${form.name.value}! Pendaftaran "${course.title}" berhasil.`;
  toast.classList.remove('hidden');
  toast.classList.add('show');

  // Sembunyikan otomatis setelah 4 detik
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 400); // waktu transisi agar smooth
  }, 4000);
});
}

