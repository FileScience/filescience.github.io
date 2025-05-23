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
  
      // Cache elements for later
      var formElements = form.querySelectorAll("input, button, select, textarea");
      var submitButton = form.querySelector("button[type='submit']");
  
      // Disable and hide original button + show loading icon
      formElements.forEach(el => el.disabled = true);
      if (submitButton) {
        submitButton.style.display = "none";
        var loadingSVG = document.createElement("img");
        loadingSVG.src = "https://filescience.io/media/loading.svg";
        loadingSVG.alt = "Loading...";
        loadingSVG.className = "loading-icon";
        submitButton.parentNode.insertBefore(loadingSVG, submitButton);
      }
  
      // Grab the email
      var emailInput = form.querySelector("input[name='email']");
      if (!emailInput) {
        console.error("Email input not found.");
        return restoreForm("Unexpected error: email field missing.");
      }
      var email = emailInput.value.trim();
      console.log("Captured email:", email);
  
      // Send it off
      var formData = new FormData();
      formData.append("email", email);
  
      fetch("https://cgnew.wpengine.com/apis/filescience/subscribe/", {
        method: "POST",
        body: formData
      })
      .then(response => response.text())
      .then(responseText => {
        console.log("Response received:", responseText);
  
        // Handle specific error messages
        if (responseText.includes("Invalid")) {
          return restoreForm("Invalid email address. Please try again.");
        }
        if (responseText.includes("Please use a work email")) {
          return restoreForm("Please use a work email.");
        }
  
        // Success path
        var thankYouMsg = document.createElement("p");
        thankYouMsg.className = "thank-you";
        thankYouMsg.textContent = responseText; // e.g. "Thank you for your interest in FileScience!"
        form.parentNode.insertBefore(thankYouMsg, form.nextSibling);
        form.style.display = "none";
      })
      .catch(error => {
        console.error("Error during fetch:", error);
        restoreForm("An error occurred. Please try again later.");
      });
  
      // Helper to reset form state and show a single error message
      function restoreForm(message) {
        // Remove loading icon
        var loadingIcon = form.querySelector(".loading-icon");
        if (loadingIcon) loadingIcon.remove();
  
        // Show submit button again
        if (submitButton) submitButton.style.display = "";
  
        // Re-enable all fields
        formElements.forEach(el => el.disabled = false);
  
        // Remove any existing error messages
        var existingErrors = form.parentNode.querySelectorAll(".error-message");
        existingErrors.forEach(err => err.remove());
  
        // Insert one fresh error message
        var errorMsg = document.createElement("p");
        errorMsg.className = "error-message";
        errorMsg.textContent = message;
        form.parentNode.insertBefore(errorMsg, form.nextSibling);
      }
    });
  }
  
  // Initialize on page load
  document.addEventListener("DOMContentLoaded", initSubscriptionForm);
  
  
  // Start the check
  //initSubscriptionForm();
  
  
  (function() {
    // Function to parse URL parameters into an object
    function getAllUrlParams() {
      const params = {};
      const queryString = window.location.search.slice(1);
      const regex = /([^&=]+)=?([^&]*)/g;
      let match;
      while ((match = regex.exec(queryString))) {
        const key = decodeURIComponent(match[1].replace(/\+/g, ' '));
        const value = decodeURIComponent(match[2].replace(/\+/g, ' '));
        params[key] = value;
      }
      return params;
    }
  
    // Function to create hidden input
    function createHiddenInput(name, value) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = `tr_${name}`;
      input.value = value;
      return input;
    }
  
    // Capture parameters
    const params = getAllUrlParams();
  
    // Append hidden inputs to all forms
    document.addEventListener('DOMContentLoaded', () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        for (const [key, value] of Object.entries(params)) {
          const hiddenInput = createHiddenInput(key, value);
          form.appendChild(hiddenInput);
        }
      });
    });
  })();
  