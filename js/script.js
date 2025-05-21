fetch('../components/navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    console.log("haloo")

    // Mobile menu toggle
    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    console.log(menuButton)
    console.log(mobileMenu)

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", function () {
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  });
}

    // Navbar scroll effect
const navbar = document.querySelector('.navbar');
if (navbar) {
  navbar.style.backgroundColor = 'rgb(6, 6, 19)';
  navbar.style.boxShadow = '0 0 5px var(--neon-purple)';
}


  const dropdown = document.querySelector(".dropdown");
  const menu = dropdown.querySelector(".dropdown-menu");

  let timeout;

  dropdown.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    menu.style.display = "block";
  });

  dropdown.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      menu.style.display = "none";
    }, 150);
  });

  });


  

// Load Hero
fetch("components/hero.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("hero").innerHTML = data;
  });

// Load Footer
fetch('../components/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

// Particle Animation & Service Card
document.addEventListener('DOMContentLoaded', () => {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    createParticle();
  }

  function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 5 + 1;
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    const color = getRandomColor();

    Object.assign(particle.style, {
      width: `${size}px`,
      height: `${size}px`,
      left: `${posX}px`,
      top: `${posY}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      backgroundColor: color
    });

    particlesContainer.appendChild(particle);

    setTimeout(() => {
      particle.remove();
      createParticle();
    }, duration * 1000);
  }

  function getRandomColor() {
    const colors = ['#ff2079', '#00f0ff', '#b300ff', '#00ff9d'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Inject keyframe animation
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes rotate {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
    @keyframes rotate-reverse {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(-360deg); }
    }
  `;
  document.head.appendChild(style);

  // Service Card Glow Effect
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const colors = ['#ff2079', '#00f0ff', '#b300ff', '#00ff9d'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      card.style.setProperty('--neon-blue', randomColor);
    });
  });
});
