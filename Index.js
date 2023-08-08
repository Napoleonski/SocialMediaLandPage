const socialButton = document.getElementById("socialButton");
const socialIcons = document.querySelector(".socials");

socialButton.addEventListener("click", function () {
  socialIcons.classList.toggle("show");
});
