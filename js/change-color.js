const navBurguer = document.querySelector(".nav__burguer");
const navMenu = document.querySelector(".nav__menu");
const navBurguerLine1 = document.querySelector(".nav__burguer-line-1");
const navBurguerLine2 = document.querySelector(".nav__burguer-line-2");
const navBurguerLine3 = document.querySelector(".nav__burguer-line-3");
const themeButtons = document.querySelectorAll(".theme-btn");

const showNav = () => {
  navMenu.classList.toggle("active");
  navBurguerLine1.classList.toggle("active");
  navBurguerLine2.classList.toggle("active");
  navBurguerLine3.classList.toggle("active");
  navBurguer.classList.toggle("active");
};

navBurguer.addEventListener("click", showNav);

const saveColor = (color) => {
  localStorage.setItem("color", color);
};

const changeColor = (color) => {
  document.querySelector(":root").style.setProperty("--main-color", color);
};

const changeColorTheme = (event) => {
  const color = event.target.dataset.color;
  changeColor(color);
  saveColor(color);
};

themeButtons.forEach((button) => {
  button.addEventListener("click", changeColorTheme);
});

const loadColor = () => {
  const color = localStorage.getItem("color");
  if (color) {
    changeColor(color);
  }
};

loadColor();
