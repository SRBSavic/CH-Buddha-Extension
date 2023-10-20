"use strict";
const registrationEmail = document.getElementById("email");
const registrationPassword = document.getElementById("regPass");
const registrationRepeatPassword = document.getElementById("repeatregPass");
const loginEmail = document.getElementById("loginEmail");
const loginPass = document.getElementById("loginPass");
const forgotPaswordEmail = document.getElementById("forgotPaswordEmail");
const resetPassword = document.getElementById("ResetPassowrd");

(function () {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(event);
        function throwError(element, text) {
          console.log(element);
          console.log(text);
          element.classList.remove("is-valid");
          element.classList.add("is-invalid");
          element.style.backgroundImage =
            "url('../resourses/images/invalidIcon.svg')";
          element.classList.add("border", "border-danger");
          element.nextElementSibling.innerText = text;
        }
        function deleteError(element) {
          element.classList.remove("is-invalid");
          element.classList.add("is-valid");
          element.style.backgroundImage = "";
          element.classList.remove("border", "border-danger");
        }
        function clearErrors() {
          let inputs = document.getElementsByTagName("input");
          let inputsList = Array.prototype.slice.call(inputs);
          inputsList.forEach((i) => {
            deleteError(i);
          });
        }
        clearErrors();

        function validateForm() {
          form.classList.add("was-validated");
        }

        if (!form.checkValidity()) {
          validateForm();
        } else {
          switch (form.id) {
            case "loginform":
              console.log("toos");
              chrome.runtime.sendMessage(
                {
                  msg: "login",
                  email: loginEmail.value,
                  pass: loginPass.value,
                },
                function (res) {
                  console.log(res);
                  if (res.success) {
                    alert(
                      "Success! You're logged in\nYou can close this page and,\ncheck your extension :)"
                    );
                    clearErrors();
                  } else {
                    if (res.errorCode.includes("password")) {
                      throwError(loginPass, res.errorMessage);
                    } else throwError(loginEmail, res.errorMessage);
                  }
                }
              );
              break;
            case "regform":
              if (
                registrationPassword.value != registrationRepeatPassword.value
              ) {
                // passwords do not match
                throwError(
                  registrationRepeatPassword,
                  "Passwords do not match"
                );
              } else {
                chrome.runtime.sendMessage(
                  {
                    msg: "register",
                    email: registrationEmail.value,
                    pass: registrationPassword.value,
                  },
                  function (res) {
                    if (res.success) {
                      alert(
                        `Success!\nAn confirmation email has been sent to:\n${registrationEmail.value}\nPlease verify your e-mail address`
                      );
                      clearErrors();
                    } else {
                      throwError(registrationEmail, res.errorMessage);
                    }
                  }
                );
              }

              break;
            case "forgotpassform":
              chrome.runtime.sendMessage(
                { msg: "forgotPass", email: forgotPaswordEmail.value },
                function (res) {
                  console.log(res);
                  if (res.success) {
                    alert(
                      `Reset password email sent to:\n${forgotPaswordEmail.value}`
                    );
                  } else {
                    throwError(forgotPaswordEmail, res.errorMessage);
                  }
                }
              );
              break;
          }
        }
        // if (formIsValid) validateForm();
      },
      false
    );
  });
})();
