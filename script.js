
// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

menuToggle.addEventListener("click", () => {
  mainMenu.classList.toggle("active");
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (mainMenu.classList.contains("active")) {
        mainMenu.classList.remove("active");
      }
    }
  });
});

// Works Slider
const slides = document.querySelectorAll(".work-slide");
const dots = document.querySelectorAll(".slider-dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

// Auto slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// Contact Form Submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const project = document.getElementById("project").value;
  const budget = document.getElementById("budget").value;
  const message = document.getElementById("message").value;

  // In a real application, you would send this data to a server
  // For this example, we'll just show an alert
  alert(`Thank you, ${name}! Your project request has been submitted. We'll contact you at ${email} within 24 hours to discuss your ${project} project.`);

  // Reset form
  contactForm.reset();
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check for saved user preference
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  darkModeToggle.textContent = "☾";
}

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☾";
    localStorage.setItem("darkMode", "enabled");
  } else {
    darkModeToggle.textContent = "☀";
    localStorage.setItem("darkMode", "disabled");
  }
});

// Fade in elements as they scroll into view
function fadeInOnScroll() {
  const elements = document.querySelectorAll(".section-title, .about-content, .writers-grid, .works-slider, .contact-form");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    console.log("v v v v v v ");
    console.log(elementPosition);
    console.log("window height =  " + windowHeight);

    if (elementPosition.top < windowHeight - 150) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Add initial styles for fade in effect
document.querySelectorAll(".section-title, .about-content, .writers-grid, .works-slider, .contact-form").forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition = "opacity 0.99s ease, transform 0.8s ease";
});

// Listen for scroll events
window.addEventListener("scroll", fadeInOnScroll);

// Initial call to handle elements already in view
fadeInOnScroll();
