window.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });

        // Add a class to the target section to center its content
        targetElement.classList.add("centered-section");

        // Remove the class after a delay to revert the centering effect
        setTimeout(() => {
          targetElement.classList.remove("centered-section");
        }, 1000);
      }
    });
  });
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");

  if (window.scrollY > 0) {
    header.style.backgroundColor = "#0c1022"; /* Update the background color */
  } else {
    header.style.backgroundColor = "rgba(0, 0, 0, 0)"; /* Reset to transparent background */
  }
});

