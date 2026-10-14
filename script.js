const form = document.getElementById("contact-form");
const errorBox = document.getElementById("form-error");

// Run validateForm after "Send" is clicked on contact page
form.addEventListener("submit", validateForm);

function validateForm(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const camp = document.getElementById("camp").value;
  const message = document.getElementById("message").value.trim();

  // If any field is empty, stop the form & raise error
  if (name === "" || email === "" || message === "") {
    event.preventDefault();
    errorBox.textContent = "Please fill in all fields.";
    return;
  }

  // No option selected 
  if (camp === "") {
    event.preventDefault();
    errorBox.textContent = "Please choose a camp.";
    return;
  }

  // email check
  if (!email.includes("@") || !email.includes(".", email.indexOf("@"))) {
    event.preventDefault();
    errorBox.textContent = "Please enter a valid email address.";
    return;
  }
  errorBox.textContent = "";
}
