 // Data layanan
        const services = {
            consultation: {
                icon: "bi-phone",
                title: "Konsultasi Gadget",
                desc: "Dapatkan saran ahli untuk memilih gadget yang tepat sesuai kebutuhan Anda, mulai dari smartphone hingga smart home.",
                detail: `<ul>
                    <li>Konsultasi gratis dengan tim ahli DigiVerse</li>
                    <li>Rekomendasi produk terbaru & sesuai budget</li>
                    <li>Bantuan membandingkan fitur dan spesifikasi</li>
                    <li>Panduan penggunaan awal gadget</li>
                </ul>`,
                img: "../images/konsultasi.jpg"
            },
            repair: {
                icon: "bi-tools",
                title: "Perbaikan & Perawatan",
                desc: "Layanan perbaikan dan perawatan profesional untuk gadget Anda, agar selalu dalam performa terbaik.",
                detail: `<ul>
                    <li>Perbaikan hardware & software berbagai perangkat</li>
                    <li>Penggantian sparepart original</li>
                    <li>Pembersihan & perawatan berkala</li>
                    <li>Garansi layanan resmi DigiVerse</li>
                </ul>`,
                img: "../images/reparasi.jpg"
            },
            software: {
                icon: "bi-cloud-arrow-down",
                title: "Instalasi Software",
                desc: "Instalasi dan pengaturan software, aplikasi, serta update sistem terbaru untuk semua perangkat Anda.",
                detail: `<ul>
                    <li>Instalasi aplikasi & sistem operasi</li>
                    <li>Update software & firmware</li>
                    <li>Pengaturan aplikasi sesuai kebutuhan</li>
                    <li>Pembersihan aplikasi tidak perlu</li>
                </ul>`,
                img: "../images/installation.webp"
            },
            security: {
                icon: "bi-shield-lock",
                title: "Solusi Keamanan",
                desc: "Lindungi data dan privasi Anda dengan solusi keamanan canggih, termasuk antivirus dan enkripsi perangkat.",
                detail: `<ul>
                    <li>Instalasi & update antivirus terbaik</li>
                    <li>Enkripsi data & perangkat</li>
                    <li>Pengaturan keamanan jaringan</li>
                    <li>Konsultasi keamanan digital</li>
                </ul>`,
                img: "../images/security.jpg"
            },
            support: {
                icon: "bi-headset",
                title: "Dukungan Pelanggan",
                desc: "Dukungan pelanggan 24/7 untuk membantu segala permasalahan gadget Anda, baik online maupun offline.",
                detail: `<ul>
                    <li>Bantuan troubleshooting jarak jauh</li>
                    <li>Live chat & call center 24 jam</li>
                    <li>Panduan penggunaan & solusi masalah umum</li>
                    <li>Kunjungan teknisi ke lokasi (syarat berlaku)</li>
                </ul>`,
                img: "../images/customer.jpg"
            },
            upgrade: {
                icon: "bi-lightning-charge",
                title: "Upgrade & Trade-In",
                desc: "Upgrade gadget lama Anda melalui program trade-in dan dapatkan teknologi terbaru dengan nilai terbaik.",
                detail: `<ul>
                    <li>Penilaian gadget lama secara adil & transparan</li>
                    <li>Trade-in ke produk terbaru DigiVerse</li>
                    <li>Diskon & promo khusus upgrade</li>
                    <li>Bantuan migrasi data ke perangkat baru</li>
                </ul>`,
                img: "../images/trade-in.jpg"
            }
        };

        // Render detail sesuai query string
        document.addEventListener("DOMContentLoaded", function() {
            const params = new URLSearchParams(window.location.search);
            const key = params.get("service");
            const s = services[key] || services.consultation;

            document.getElementById("detail-icon").className = "detail-icon bi " + s.icon;
            document.getElementById("detail-title").textContent = s.title;
            document.getElementById("detail-desc").textContent = s.desc;
            document.getElementById("detail-content").innerHTML = s.detail;
            document.getElementById("service-img").src = s.img;
            document.getElementById("service-img").alt = s.title;

            if (key === "repair") {
                document.getElementById("kerusakan-group").style.display = "block";
            }
            if (key === "software") {
                document.getElementById("software-group").style.display = "block";
            }
            if (key === "support" || key === "security") {
                document.getElementById("keluhan-group").style.display = "block";
            }
            if (key === "upgrade") {
                document.getElementById("tradein-group").style.display = "block";
            }

            const labelSpesifikasi = document.getElementById("label-spesifikasi");
            if (key !== "consultation" && key !== "upgrade") {
                labelSpesifikasi.textContent = "Spesifikasi Saat Ini";
            } else {
                labelSpesifikasi.textContent = "Spesifikasi yang diinginkan";
            }

            const btnBottom = document.getElementById("main-action-btn-bottom");
            if (btnBottom) {
                if (key === "consultation" || key === "upgrade") {
                    btnBottom.textContent = "Ajukan";
                } else if (key === "software") {
                    btnBottom.textContent = "Instal";
                } else {
                    btnBottom.textContent = "Laporkan";
                }
            }

            // --- Bagian validasi dan notifikasi ---
            const form = document.querySelector("form");

            function isFormValid() {
                const visibleFields = form.querySelectorAll("input:not([type=hidden]):not([disabled]), select:not([disabled]), textarea:not([disabled])");
                for (const field of visibleFields) {
                    if (field.offsetParent === null) continue;
                    if (!field.value.trim()) return false;
                }
                return true;
            }

            function updateButtonState() {
                btnBottom.disabled = !isFormValid();
            }

            form.addEventListener("input", updateButtonState);
            form.addEventListener("change", updateButtonState);
            updateButtonState();

            btnBottom.addEventListener("click", function(e) {
                e.preventDefault();
                if (!isFormValid()) {
                    btnBottom.classList.add("shake");
                    setTimeout(() => btnBottom.classList.remove("shake"), 400);
                    // Tampilkan alert peringatan
                    showAlert("Harap lengkapi semua data terlebih dahulu!", "danger");
                    return;
                }
                let notif = "Laporan berhasil diajukan!";
                if (key === "consultation" || key === "upgrade") {
                    notif = "Permintaan Anda berhasil diajukan!";
                } else if (key === "software") {
                    notif = "Permintaan instalasi berhasil diajukan!";
                }
                showAlert(notif, "success");
                btnBottom.disabled = true;
                setTimeout(() => {
                    window.location.reload();
                }, 1700);
            });

            form.addEventListener("submit", function(e) {
                e.preventDefault();
                btnBottom.click();
            });

            // Fungsi alert Bootstrap
            function showAlert(msg, type) {
                // Hapus alert lama jika ada
                const old = document.getElementById("form-alert");
                if (old) old.remove();
                const alert = document.createElement("div");
                alert.id = "form-alert";
                alert.className = `alert alert-${type} position-fixed top-0 start-50 translate-middle-x mt-4 shadow`;
                alert.style.zIndex = 9999;
                alert.innerHTML = msg;
                document.body.appendChild(alert);
                setTimeout(() => {
                    alert.remove();
                }, 1500);
            }
        });