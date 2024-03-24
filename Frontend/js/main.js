document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var password = document.getElementById("password").value;
    var errorDiv = document.getElementById("er_pass");

    // Check password
    if (password !== "correctpassword") { // Change "correctpassword" to your actual correct password
      errorDiv.style.display = "block";
    } else {
      errorDiv.style.display = "none";
      // Proceed with your login logic
      console.log("Login successful!");
    }
  });