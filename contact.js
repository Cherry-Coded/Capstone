/* menu */
const nav = document.getElementsByClassName("nav-items");
document.querySelector(".socialmedia").addEventListener("click", () => {
  for (let i = 0; i <= 3; i++) {
    nav[i].classList.toggle("show-social");
  }
});

/* form validation */
// Defining a function to display error message
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm() {
  // Retrieving the values of form elements
  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var message = document.contactForm.message.value;

  // Defining error variables with a default value
  var nameErr = (emailErr = messageErr = true);

  // Validate name
  if (name == "") {
    printError("nameErr", "Please enter your name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Please enter a valid name");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }
  }

  // Validate email address
  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  // Validate message
  if (message == "") {
    printError("messageErr", "Please enter your message");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("messageErr", "Please enter a valid message");
    } else {
      printError("messageErr", "");
      messageErr = false;
    }
  }

  // Prevent the form from being submitted if there are any errors
  if ((nameErr || emailErr || messageErr) == true) {
    return false;
  }
}

// Defining a function to validate form
function validateEForm() {
  // Retrieving the values of form elements
  var email = document.currentForm.subemail.value;

  // Defining error variables with a default value
  var emailErr = true;

  // Validate email address
  if (email == "") {
    printError("subemailErr", "Please enter your email address");
  } else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("subemailErr", "Please enter a valid email address");
    } else {
      printError("subemailErr", "");
      emailErr = false;
    }
  }

  // Prevent the form from being submitted if there are any errors
  if (emailErr == true) {
    return false;
  }
}
