document.addEventListener("DOMContentLoaded", function () {
  // --- ANIMATIONS ---
  gsap.registerPlugin(TextPlugin, ScrollTrigger);

  // 1. Hero Section Animation
  const heroTimeline = gsap.timeline();
  heroTimeline
    .from(".profile-image", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    })
    .to(
      "#animated-name",
      { duration: 1.5, text: "Ali Raza", ease: "none" },
      "-=0.5"
    )
    .from(
      ".subtitle",
      { duration: 1, y: 20, opacity: 0, ease: "power3.out" },
      "-=1"
    )
    .from(
      ".download-resume",
      { duration: 1, y: 20, opacity: 0, ease: "power3.out" },
      "-=0.7"
    )
    .from(
      "nav a",
      { duration: 0.5, y: 20, opacity: 0, ease: "power3.out", stagger: 0.1 },
      "-=0.5"
    );

  // 2. Section Title Animations
  gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.from(title, {
      duration: 1,
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: title,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });

  // 3. Staggered Project Card Animation
  gsap.from(".project-card", {
    duration: 0.8,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#projects-grid",
      start: "top 80%",
    },
  });

  // --- CUSTOM CURSOR ---
  const cursor = document.getElementById("cursor");
  const links = document.querySelectorAll(".link-hover");

  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: "power1.out",
    });
  });

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => cursor.classList.add("grow"));
    link.addEventListener("mouseleave", () => cursor.classList.remove("grow"));
  });

  // --- CONTACT FORM SUBMISSION ---
  const form = document.getElementById("actualForm");
  const status = document.getElementById("status");
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxnhDEcojOh0dh6M2rU7EcQC4aRb-nPQ7YlQbRrEik0WSEYoE_nq2Vkg0B9rd5PUApo/exec"; // Your provided URL

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "Sending...";
    status.style.color = "#e0e0e0";

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        status.textContent = "Message sent successfully!";
        status.style.color = "var(--primary-color)";
        form.reset();
      })
      .catch((error) => {
        console.error("Error!", error.message);
        status.textContent = "An error occurred. Please try again.";
        status.style.color = "red";
      });
  });
});
