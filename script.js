// Wait until the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // 1. Smooth scrolling functionality for anchor links
  const allLinks = document.querySelectorAll('a[href^="#"]');

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor click behavior

      const href = link.getAttribute("href"); // Get the href attribute value

      if (href === "#") return; // Skip the "#" links

      // Scroll smoothly to the target section
      document.querySelector(href).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // 2. Mobile menu toggle functionality
  const mobileNavBtn = document.querySelector(".btn-mobile-nav");
  const header = document.querySelector(".header");

  mobileNavBtn.addEventListener("click", function () {
    header.classList.toggle("nav-open"); // Toggle the 'nav-open' class
  });

  // Close mobile navigation when clicking a link (optional)
  const navLinks = document.querySelectorAll(".main-nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (header.classList.contains("nav-open")) {
        header.classList.remove("nav-open");
      }
    });
  });

  // 3. Sticky navigation
  const sectionHero = document.querySelector(".section-hero");

  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];

      if (!ent.isIntersecting) {
        document.body.classList.add("sticky"); // Add sticky class when hero section is out of view
      } else {
        document.body.classList.remove("sticky"); // Remove sticky class when hero section is in view
      }
    },
    {
      // In the viewport
      root: null,
      threshold: 0,
      rootMargin: "-80px"
    }
  );
  obs.observe(sectionHero);
});
