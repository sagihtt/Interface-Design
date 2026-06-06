document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => {
    scrollObserver.observe(el);
  });

  // --- Scroll Customizado ---
  const backToTopBtn = document.getElementById("topo");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const start = window.scrollY;
      const target = 0;
      const distance = target - start;
      const duration = 1000;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;

        const easeInOutQuad = function (t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        const run = easeInOutQuad(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      requestAnimationFrame(animation);
    });
  }

  // --- Password Strength Indicator ---
  const passwordInput = document.getElementById("passwordInput");
  const strengthFill = document.getElementById("strengthFill");
  const strengthText = document.getElementById("strengthText");

  if (passwordInput && strengthFill && strengthText) {
    passwordInput.addEventListener("input", function () {
      const val = this.value;
      let score = 0;

      if (val.length >= 4) score++;
      if (val.length >= 7) score++;
      if (/[A-Z]/.test(val)) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;

      const levels = [
        { width: "0%", color: "transparent", label: "" },
        { width: "20%", color: "#ef4444", label: "Muito fraca" },
        { width: "40%", color: "#f97316", label: "Fraca" },
        { width: "60%", color: "#eab308", label: "Razoável" },
        { width: "80%", color: "#22c55e", label: "Forte" },
        { width: "100%", color: "#ea2c75", label: "Excelente" },
      ];

      const level = levels[score];
      strengthFill.style.width = level.width;
      strengthFill.style.backgroundColor = level.color;
      strengthText.textContent = val.length > 0 ? level.label : "";
    });
  }
});
