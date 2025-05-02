document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      // Remove active from all links
      navLinks.forEach(l => l.classList.remove("active"));
      // Add active to clicked link
      this.classList.add("active");
    });
  });
});
