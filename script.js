//declared variables and referenced them to the password & confirm password inputs

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

//added an event listener to the confirm password input to run the validatePassword function when the user inputs a key

confirmPassword.addEventListener("keyup", validatePassword);

//created the validatePassword function

function validatePassword() {

// if the values in the password input and confirm password input do not match the alert message will be 'passwords must match' and it will appear in red text. the background of both inputs will become red and the submit button will become disabled. 
  
if (password.value != confirmPassword.value) {
  document.getElementById("alertMsg").style.color = "red";
  document.getElementById("alertMsg").innerHTML = "Passwords must match!"
  password.style.backgroundColor = "#ff5959";
  confirmPassword.style.backgroundColor = "#ff5959";
  document.getElementById("submitBtn").disabled = true;
}

  // if the values in the password input and confirm password input do match the alert message will be 'passwords match' and it will appear in green text. the background of both inputs will become green and the submit button will become enabled. 
  
if (password.value === confirmPassword.value) {
  document.getElementById("alertMsg").style.color = "green";
  document.getElementById("alertMsg").innerHTML = "Passwords match."
  password.style.backgroundColor = "lightgreen";
  confirmPassword.style.backgroundColor = "lightgreen";
  document.getElementById("submitBtn").disabled = false;
}

  // if the values in the password input or confirm password input become empty the alert message will be erased and the background of both inputs will return to its original form.
  
if (password.value ==='' ||
    confirmPassword.value==='') {
  document.getElementById("alertMsg").innerHTML = " "
  password.style.backgroundColor = "white";
  confirmPassword.style.backgroundColor = "white";
  document.getElementById("submitBtn").disabled = true;
}
}