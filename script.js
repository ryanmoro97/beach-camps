// Find the form and the place where error messages will show
const form = document.getElementById("contact-form");
const errorBox = document.getElementById("form-error");

// Run validateForm every time someone clicks "Send"
form.addEventListener("submit", validateForm);

function validateForm(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const camp = document.getElementById("camp").value;
  const message = document.getElementById("message").value.trim();

  // If any field is empty, stop the form from sending and show an error
  if (name === "" || email === "" || message === "") {
    event.preventDefault();
    errorBox.textContent = "Please fill in all fields.";
    return;
  }

  // The first dropdown option has an empty value, so "" means nothing was picked
  if (camp === "") {
    event.preventDefault();
    errorBox.textContent = "Please choose a camp.";
    return;
  }

  // Basic email check: must contain an @ and a dot after it
  if (!email.includes("@") || !email.includes(".", email.indexOf("@"))) {
    event.preventDefault();
    errorBox.textContent = "Please enter a valid email address.";
    return;
  }

  // Everything checks out, so clear any old error and let the form send
  errorBox.textContent = "";
}
