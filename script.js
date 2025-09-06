document.addEventListener("DOMContentLoaded", function () {
  // Toggle menu mobile
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".nav");

  if (mobileToggle && nav) {
    mobileToggle.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
      mobileToggle.classList.toggle("open");
    });
  }

  // Marquer la page active dans le menu
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath || (href.includes("#") && currentPath === "")) {
      link.classList.add("active");
    }
  });

  // Smooth scroll pour liens ancrés internes
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Animation hover légère sur les project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.03)";
      card.style.boxShadow = "0 8px 16px rgba(20, 184, 166, 0.3)";
      card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "none";
      card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
      card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    });
  });



// Sélectionne uniquement les blocs compétences
const skillBoxes = document.querySelectorAll('.skills-box');

skillBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    box.style.transform = 'translateY(-5px)';
    box.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.15)';
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'translateY(0)';
    box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.05)';
  });
});
  

  
  const buttons = document.querySelectorAll("button, a.btn-view, a.btn-download, button.btn-send");
  buttons.forEach((btn) => {
    btn.addEventListener("focus", () => {
      btn.style.outline = "3px solid #14b8a6";
      btn.style.outlineOffset = "3px";
    });
    btn.addEventListener("blur", () => {
      btn.style.outline = "none";
      btn.style.outlineOffset = "0";
    });
  });
});