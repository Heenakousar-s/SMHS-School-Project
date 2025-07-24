const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li a");

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("block");
    navMenu.classList.toggle("hidden");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("block")) {
        navMenu.classList.remove("block");
        navMenu.classList.add("hidden");
      }
    });
  });
}
