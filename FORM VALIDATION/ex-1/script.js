const username = document.getElementById("username");
const email = document.getElementById("mail");
const password = document.getElementById("psw");
const password2 = document.getElementById("psw2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

const checkInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (!usernameValue) {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (!emailValue) {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (!passwordValue) {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password to short");
  } else if (!passwordValue.match(re)) {
    setErrorFor(password, "it have to contains a upper, lower and a number");
  } else {
    setSuccessFor(password);
  }

  if (!password2Value) {
    setErrorFor(password2, "write again your password");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "does not match");
  } else {
    setSuccessFor(password2);
  }
};

const setErrorFor = (input, message) => {
  const formControl = input.parentElement; //this is the .form-control
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
};

const setSuccessFor = (input) => {
  const formControl = input.parentElement; //this is the .form-control

  formControl.className = "form-control success";
};

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
