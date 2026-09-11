document.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  // Subtilno pojavljanje vsebine ob scrollanju
  const revealElements = document.querySelectorAll(
    ".product-row, .story-left, .story-right, .contact-container"
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });


  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


  revealElements.forEach((element) => {
    observer.observe(element);
  });

});