document.addEventListener("DOMContentLoaded", function() {
    // Get all links with hash (#) within the nav
    const navLinks = document.querySelectorAll("nav a[href^='#']");
    
    // Smooth scrolling function
    function scrollToElement(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
    
    // Attach smooth scrolling to each nav link
    navLinks.forEach(function(navLink) {
      navLink.addEventListener("click", scrollToElement);
    });
  });
  