import Typed from 'typed.js';

// Toggle button logic
const togglebtn = document.querySelector(".togglebtn");
const nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// Typed.js initialization
const typed = new Typed(".input", {
    strings: ["Web Developer"],   // Full string to type
    typeSpeed: 150,               // Speed of typing each character
    backSpeed: 150,               // Speed of deleting each character
    backDelay: 1000,             // Delay before deleting starts
    startDelay: 500,             // Delay before typing starts initially
    loop: true,                  // Ensures the animation loops
    smartBackspace: false        // Forces full deletion and retyping
});
