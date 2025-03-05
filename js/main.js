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


  document.addEventListener("DOMContentLoaded", function() {
    // Log that DOMContentLoaded fired
    console.log("DOM fully loaded. Running subscription script.");
    
    // Select the form element using its class
    var form = document.querySelector(".footer_form");
    
    if (!form) {
        console.error("Form element with class '.footer_form' was not found.");
        return;
    } else {
        console.log("Form found:", form);
    }
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();  // Prevent default form submission
        console.log("Form submitted.");
        
        // Grab the email value from the form
        var emailInput = form.querySelector("input[name='email']");
        if (!emailInput) {
            console.error("Email input not found.");
            return;
        }
        var email = emailInput.value.trim();
        console.log("Email captured:", email);
        
        // Prepare the data to send (only the email field)
        var formData = new FormData();
        formData.append("email", email);
        
        // Send the AJAX POST request to the PHP endpoint
        fetch("https://cgnew.wpengine.com/apis/filescience/subscribe/", {
            method: "POST",
            body: formData
        })
        .then(function(response) {
            return response.text();
        })
        .then(function(responseText) {
            console.log("Response received:", responseText);
            // Create a new paragraph element to display the thank-you message
            var thankYouMsg = document.createElement("p");
            thankYouMsg.className = "p thank you";
            thankYouMsg.textContent = responseText; // Expected: "Thank you for your interest in FileScience!"
            
            // Insert the thank-you message directly after the form
            form.parentNode.insertBefore(thankYouMsg, form.nextSibling);
        })
        .catch(function(error) {
            console.error("Error during fetch:", error);
        });
    });
});
  