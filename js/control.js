// Dark mode toggle
const toggleBtn = document.getElementById("modeToggle");
const navbar = document.querySelector(".navbar");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-light");

  if (document.body.classList.contains("bg-dark")) {
    toggleBtn.textContent = "☀️";
    navbar.classList.remove("navbar-light", "bg-light");
    navbar.classList.add("navbar-dark", "bg-dark");
  } else {
    toggleBtn.textContent = "🌙";
    navbar.classList.remove("navbar-dark", "bg-dark");
    navbar.classList.add("navbar-light", "bg-light");
  }
});

    // Fade-in effect on scroll
    const faders = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.2 });
    faders.forEach(fade => observer.observe(fade));

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    const skillsSection = document.getElementById('skills');
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          progressBars.forEach(bar => {
            bar.style.width = bar.textContent;
          });
          skillsObserver.disconnect();
        }
      });
    }, { threshold: 0.5 });
    skillsObserver.observe(skillsSection);

    // Back to top button
    const backToTop = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });