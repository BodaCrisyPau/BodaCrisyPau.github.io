const [firstSection, secondSection] = document.querySelectorAll("seccion");
const button = document.querySelector("botoncancion");

button.addEventListener("click", function() {
  firstSection.toggleAttribute("hidden");
  secondSection.toggleAttribute("hidden");
  button.toggleAttribute("hidden");
});