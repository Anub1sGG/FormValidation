const form = document.querySelector(".form");
const inputFields = form.getElementsByClassName("form-control");

for (const item of inputFields) {
  item.addEventListener("blur", (event) => {
    validateForm(event);
  });
}

const setError = (element, messege) => {
  const errorSection = element.parentElement.querySelector(".error");
  errorSection.textContent = messege;
  element.classList.add("invalid");
  element.classList.remove("valid");
};

const setValid = (element) => {
  const errorSection = element.parentElement.querySelector(".error");
  errorSection.textContent = "";
  element.classList.remove("invalid");
  element.classList.add("valid");
};

const validateEmail = (emailField) => {
  const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

  if (emailField.value === "") {
    setError(emailField, "Email is required");
  } else if (!regex.test(emailField.value)) {
    setError(emailField, "Email is incorrect");
  } else {
    setValid(emailField);
  }
};

const validatePassword = (password) => {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (password.value === "") {
    setError(password, "Password is required");
  } else if (!regex.test(password.value)) {
    setError(
      password,
      "Password must contain at least 8 symbols, one digit and one special character"
    );
  } else {
    setValid(password);
  }
};

const validatePasswordConfirm = (passwordConfirm) => {
  if (passwordConfirm.value === "") {
    setError(passwordConfirm, "Confirmation password is required");
  } else if (passwordConfirm.value !== password.value) {
    setError(passwordConfirm, "Password doesn't match!");
  } else {
    setValid(passwordConfirm);
  }
};

const validateForm = (event) => {
  switch (event.target.id) {
    case "email":
      validateEmail(event.target);
      break;
    case "password":
      validatePassword(event.target);
      break;
    case "passwordConfirm":
      validatePasswordConfirm(event.target);
      break;
    default:
      alert("Validation error!");
  }
};
