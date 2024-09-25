//dropdown menu na header

const mainMenu = document.getElementById("main-menu");
const toggleButton = document.createElement("button");
toggleButton.textContent = "Menu";
toggleButton.classList.add("menu-toggle");

mainMenu.parentNode.insertBefore(toggleButton, mainMenu);

toggleButton.addEventListener("click", function () {
  mainMenu.classList.toggle("show");

  toggleButton.classList.toggle("clicked");
});


// swipper