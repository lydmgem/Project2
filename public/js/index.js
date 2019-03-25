$(document).ready(function() {

  // Add event listeners for sign-up and login buttons
  $(document).on("click", "#signUp", createUser);
  $(document).on("click", "#login", loginUser);
});

// This function 