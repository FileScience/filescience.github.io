document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
  
    // Prevent initial unwanted animation on nav-links.
    navLinks.classList.add('no-transition');
    setTimeout(() => {
      navLinks.classList.remove('no-transition');
    }, 50);
  
    burger.addEventListener('click', function() {
      // Toggle the menu state and disable/enable page scrolling.
      const menuActive = navLinks.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
  
      // Start the first half: over 0.5s, rotate 0° to 180° and fade out.
      burger.style.transition = "transform 0.4s ease, opacity 0.4s ease";
      burger.style.transform = "rotate(180deg)";
      burger.style.opacity = "0";
  
      // At 0.5s, swap the icon source and continue the rotation.
      setTimeout(() => {
        
        burger.src = menuActive ? "https://filescience.io/media/close.svg" : "https://filescience.io/media/burger.svg";
        
        // Now animate from 180° to 360° while fading back in over the next 0.5s.
        burger.style.transition = "transform 0.4s ease, opacity 0.4s ease";
        burger.style.transform = "rotate(360deg)";
        burger.style.opacity = "1";
  
        // After the full animation (total 1s), clear inline styles.
        setTimeout(() => {
          burger.style.transition = "";
          burger.style.transform = "";
        }, 500);
      }, 500);
    });
  });
  