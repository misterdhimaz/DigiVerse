 // Add light beams animation
        document.addEventListener('DOMContentLoaded', function() {
            const heroSection = document.querySelector('.hero-section');
            
            // Create additional light beams
            for (let i = 0; i < 5; i++) {
                const beam = document.createElement('div');
                beam.className = 'light-beam';
                beam.style.top = Math.random() * 100 + '%';
                beam.style.left = Math.random() * 100 + '%';
                beam.style.animationDelay = Math.random() * 5 + 's';
                beam.style.animationDuration = 5 + Math.random() * 10 + 's';
                heroSection.appendChild(beam);
            }
            
            // Tab change animation
            const tabLinks = document.querySelectorAll('.nav-link');
            tabLinks.forEach(link => {
                link.addEventListener('click', function() {
                    const tabUnderline = document.querySelector('.category-tabs::after');
                    if (tabUnderline) {
                        tabUnderline.style.left = this.offsetLeft + 'px';
                        tabUnderline.style.width = this.offsetWidth + 'px';
                    }
                });
            });
            
            // Add floating icons to all tab panes
            const tabPanes = document.querySelectorAll('.tab-pane');
            tabPanes.forEach(pane => {
                const floatingIcons = document.createElement('div');
                floatingIcons.className = 'floating-icons';
                
                for (let i = 0; i < 10; i++) {
                    const icon = document.createElement('i');
                    const icons = ['fa-microchip', 'fa-memory', 'fa-headphones', 'fa-battery-full', 'fa-hdd', 'fa-usb', 'fa-ethernet', 'fa-wifi', 'fa-bluetooth', 'fa-gamepad'];
                    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
                    icon.className = `fas ${randomIcon} floating-icon`;
                    icon.style.left = Math.random() * 100 + '%';
                    icon.style.animationDelay = Math.random() * 15 + 's';
                    icon.style.animationDuration = 10 + Math.random() * 20 + 's';
                    floatingIcons.appendChild(icon);
                }
                
                pane.appendChild(floatingIcons);
            });
        });