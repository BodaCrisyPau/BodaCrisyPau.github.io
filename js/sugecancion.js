const [firstSection, secondSection] = document.querySelectorAll("main");
const button = document.querySelector("botoncancion");

button.addEventListener("click", function() {
  firstSection.toggleAttribute("hidden");
  secondSection.toggleAttribute("hidden");
  button.toggleAttribute("hidden");
});
