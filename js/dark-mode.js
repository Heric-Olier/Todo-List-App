const iconDark = document.querySelector(".fa-moon");
const iconLight = document.querySelector(".fa-sun");
const body = document.querySelector("body");

const enableDarkMode = () => {
  body.classList.add("dark");
  localStorage.setItem("darkMode", "enabled");
  iconDark.classList.toggle("active");
  iconLight.classList.toggle("active");
};

const disableDarkMode = () => {
  body.classList.remove("dark");
  localStorage.setItem("darkMode", "disabled");
    iconDark.classList.toggle("active");
    iconLight.classList.toggle("active");
};

if (localStorage.getItem("darkMode") === "enabled") {
  enableDarkMode();
}

iconDark.addEventListener("click", () => {
  enableDarkMode();
});

iconLight.addEventListener("click", () => {
  disableDarkMode();
});

