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

  function initSubscriptionForm() {
    var form = document.querySelector(".footer .footer_form");
    if (!form) {
      console.log("Form not found. Retrying in 1 second...");
      setTimeout(initSubscriptionForm, 1000);
      return;
    }
    console.log("Form found. Attaching event listener.");
    
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      console.log("Form submitted.");
      
      // Disable all form elements to prevent multiple submissions
      var formElements = form.querySelectorAll("input, button, select, textarea");
      formElements.forEach(function(el) {
        el.disabled = true;
      });
      
      // Hide the submit button immediately
      var submitButton = form.querySelector("button[type='submit']");
      if (submitButton) {
        submitButton.style.display = "none";
        // Insert a loading SVG above the submit button location
        var loadingSVG = document.createElement("img");
        loadingSVG.src = "https://filescience.io/media/loading.svg"; // Adjust the path as needed
        loadingSVG.alt = "Loading...";
        loadingSVG.className = "loading-icon";
        submitButton.parentNode.insertBefore(loadingSVG, submitButton);
      }
      
      var emailInput = form.querySelector("input[name='email']");
      if (!emailInput) {
        console.error("Email input not found.");
        return;
      }
      var email = emailInput.value.trim();
      console.log("Captured email:", email);
      
      var formData = new FormData();
      formData.append("email", email);
      
      fetch("https://cgnew.wpengine.com/apis/filescience/subscribe/", {
        method: "POST",
        body: formData
      })
      .then(function(response) {
        return response.text();
      })
      .then(function(responseText) {
        console.log("Response received:", responseText);
        var thankYouMsg = document.createElement("p");
        thankYouMsg.className = "p thank you";
        thankYouMsg.textContent = responseText; // Expected: "Thank you for your interest in FileScience!"
        form.parentNode.insertBefore(thankYouMsg, form.nextSibling);
        
        // Hide the entire form upon successful submission
        form.style.display = "none";
      })
      .catch(function(error) {
        console.error("Error during fetch:", error);
      });
    });
  }
  
  // Start the check
  initSubscriptionForm();
  
  