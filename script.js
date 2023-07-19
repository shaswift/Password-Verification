function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("message");
  
    if (password !== ''){ 
      if (confirmPassword !== ''){
        if (password !== confirmPassword) {
          message.innerHTML = "Passwords do not match.";
          message.style.color = "red"
        } else if (password.length < 10) {
          message.innerHTML = "Weak password.";
          message.style.color = "yellow"
        } else {
          message.innerHTML = "Success!";
          message.style.color = "green"
        }
   } else {
    message.innerHTML = "confirm your password";
    message.style.color = "yellow"
   }
    }
    else{
      message.innerHTML = "Fill in your password";
      message.style.color = "yellow"  
    }
  }