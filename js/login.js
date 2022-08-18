document.getElementById("login-btn").addEventListener("click", function () {
  const emailFieldElement = document.getElementById("email-field");
  const userEmail = emailFieldElement.value;

  const passwordFieldElement = document.getElementById("password-field");
  const userPassword = passwordFieldElement.value;

  emailFieldElement.value = "";
  passwordFieldElement.value = "";

  if (userEmail === "admin@gmail.com" && userPassword == "admin") {
    window.location.href = "home.html";
  } else {
    alert("Worng User mail or password");
  }
});
