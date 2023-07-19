function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("message");
  
    if (password !== confirmPassword) {
      message.innerHTML = "Passwords do not match.";
    } else if (password.length < 10) {
      message.innerHTML = "Weak password.";
    } else {
      message.innerHTML = "Success!";
    }
  }