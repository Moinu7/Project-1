
  // Navigation Menu Toggle
  const barIcon = document.querySelector(".bar_icon");
  const navigation = document.querySelector(".navigation");
  barIcon.addEventListener("click", () => {
    navigation.classList.toggle("active");
  });

  // Scroll-to-Top Button
  const scrollBtn = document.createElement("div");
  scrollBtn.innerHTML = "&#8679;";
  scrollBtn.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; 
    background: #ffc066; color: white; 
    font-size: 24px; padding: 10px 15px; 
    border-radius: 50%; cursor: pointer; 
    display: none; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  `;
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Hero Button Interaction
  const exploreBtn = document.querySelector(".explore_btn");
  exploreBtn.addEventListener("click", () => {
    window.scrollTo({
      top: document.querySelector(".menu").offsetTop - 50,
      behavior: "smooth",
    });
  });

  // Add a simple fade-in animation when scrolling
  const features = document.querySelectorAll(".feature");
  window.addEventListener("scroll", () => {
    features.forEach((feature) => {
      const rect = feature.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        feature.style.transform = "translateY(0)";
        feature.style.opacity = "1";
      }
    });
  });
  // Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // 1. Dynamic Theme Toggle (Light/Dark Mode)
    function setupThemeToggle() {
      const toggleButton = document.createElement("button");
      toggleButton.innerText = "Dark Mode";
      toggleButton.style.cssText = `
        position: fixed; top: 20px; right: 20px; z-index: 1000;
        background-color: #149f39; color: white; padding: 10px 15px;
        border: none; cursor: pointer; border-radius: 5px;
      `;
      document.body.appendChild(toggleButton);
  
      let darkModeEnabled = false;
  
      toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeEnabled = !darkModeEnabled;
        toggleButton.innerText = darkModeEnabled ? "Light Mode" : "Dark Mode";
      });
    }
  
    // 2. Image Zoom Effect on Hover
    function setupImageZoom() {
      const gridImages = document.querySelectorAll(".grid-image");
      gridImages.forEach((image) => {
        image.addEventListener("mouseenter", () => {
          image.style.transform = "scale(1.1)";
          image.style.transition = "transform 0.3s ease-in-out";
        });
  
        image.addEventListener("mouseleave", () => {
          image.style.transform = "scale(1)";
        });
      });
    }
  
    // 3. Shrink Header on Scroll
    function setupHeaderShrink() {
      const nav = document.querySelector("nav");
  
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          nav.style.padding = "5px 10px";
          nav.style.transition = "padding 0.3s ease";
          nav.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        } else {
          nav.style.padding = "10px 20px";
          nav.style.boxShadow = "none";
        }
      });
    }
  
    // Initialize all functions
    setupThemeToggle();
    setupImageZoom();
    setupHeaderShrink();
  });
  

