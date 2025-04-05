function validateSignup() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username.length < 3) {
      alert("Username must be at least 3 characters");
      return false;
    }
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return false;
    }
  
    alert("Registered successfully (not saved — demo only)");
    return false; // prevent actual submission
  }
  
  function validateLogin() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
  
    if (!email.includes("@")) {
      alert("Invalid email format");
      return false;
    }
  
    alert("Logged in (not validated — demo only)");
    return false; // prevent actual submission
  }
  