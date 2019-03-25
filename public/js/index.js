$(document).ready(function() {
  // Get references to the username input and password input
  var username = $("#username");
  var password = $("#password");

  // Add event listeners for sign-up and login buttons
  $(document).on("click", "#signUp", createUser);
  $(document).on("click", "#login", loginUser);
});

// This function creates a new user
function createUser(event) {
  event.preventDefault();

  // Don't do anything if the input fields are empty
  if (!username.val().trim() || !password.val().trim()) {
    return;
  } 
  
}