//dropdown menu na header

const mainMenu = document.getElementById("main-menu");
const toggleButton = document.createElement("button");
toggleButton.textContent = "Menu";
toggleButton.classList.add("menu-toggle");

mainMenu.parentNode.insertBefore(toggleButton, mainMenu);

toggleButton.addEventListener("click", function () {
  if (mainMenu.classList.contains("show")) {
    mainMenu.classList.remove("show");
  } else {
    mainMenu.classList.add("show");
  }
});