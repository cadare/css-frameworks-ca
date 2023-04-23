"use strict";

var navbarToggler = document.querySelector('.navbar-toggler');
var navbarCollapse = document.querySelector('.navbar-collapse');
navbarToggler.addEventListener('click', function () {
  navbarCollapse.classList.toggle('show');
});
window.addEventListener("DOMContentLoaded", function () {
  // Sign-up form validation
  var signupForm = document.querySelector("#signup-form");
  signupForm.addEventListener("submit", function (event) {
    // Prevent form submission
    event.preventDefault(); // Reset validation feedback

    var formControls = document.querySelectorAll(".form-control");
    formControls.forEach(function (formControl) {
      formControl.classList.remove("is-invalid");
    });
    var invalidFeedback = document.querySelectorAll(".invalid-feedback");
    invalidFeedback.forEach(function (feedback) {
      feedback.style.display = "none";
    }); // Validate name

    var nameInput = document.querySelector("#name");

    if (nameInput.value.trim() === "") {
      nameInput.classList.add("is-invalid");
      var nameFeedback = document.querySelector("#name-feedback");
      nameFeedback.style.display = "block";
    } // Validate email


    var emailInput = document.querySelector("#email");

    if (emailInput.value.trim() === "") {
      emailInput.classList.add("is-invalid");
      var emailFeedback = document.querySelector("#email-feedback");
      emailFeedback.style.display = "block";
    } // Validate password


    var passwordInput = document.querySelector("#password");

    if (passwordInput.value.trim() === "" || passwordInput.value.length < 8) {
      passwordInput.classList.add("is-invalid");
      var passwordFeedback = document.querySelector("#password-feedback");
      passwordFeedback.style.display = "block";
    } // Validate sign in attribute


    var signInInput = document.querySelector("#sign-in");

    if (signInInput.value.trim() === "") {
      signInInput.classList.add("is-invalid");
      var signInFeedback = document.querySelector("#sign-in-feedback");
      signInFeedback.style.display = "block";
    }
  });
});