const btnCreate = document.querySelector("[data-form-btn]");

// creamos las tareas
const createTask = (event) => {
  event.preventDefault();
  const formInput = document.querySelector("[data-form-input]");
  const value = formInput.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  if (value === "") {
    alert("Debes ingresar una tarea");
  } else {
    task.classList.add("card");
    formInput.value = "";
    const content = `<div class="content__task">
    ${checkTask().outerHTML}
    <div class="content__task-text">
    <span class="task">${value}</span>
    <span class="date"> ${dayName}${','} ${day} ${monthName}${','} ${year}</span>
      </div>
    </div>
    <i class="fas fa-doutone fa-trash trashIcon icon"></i>`;
    task.innerHTML += content;
    list.appendChild(task);

    const trashIcon = task.querySelector(".trashIcon");
    trashIcon.addEventListener("click", deleteTask);

    const checkIcon = task.querySelector(".fa-regular");
    checkIcon.addEventListener("click", () => {
      checkIcon.classList.toggle("fa-solid");
      if (checkIcon.classList.contains("fa-solid")) {
        task.classList.add("card-active");
      } else {
        task.classList.remove("card-active");
      }
      validateCompletedTask();
    });
  }
  validateTask();
};

btnCreate.addEventListener("click", createTask);

// creamos el icono de check
const i = document.createElement("i");
const checkTask = () => {
  i.classList.add("fa-regular", "fa-circle-check", "icon");
  return i;
};

// borramos las tareas
const deleteTask = (event) => {
  const task = event.target.parentElement;
  task.classList.add("delete-animation");
  task.addEventListener("transitionend", () => {
    task.remove();
    validateTask();
    validateCompletedTask();
  });
};

// validamos el numero de tareas
const validateTask = () => {
  const task = document.querySelectorAll(".card");
  const taskNumber = document.querySelector("[data-task-number]");
  taskNumber.innerHTML = task.length;
};

// validamos el numero de tareas completadas
const validateCompletedTask = () => {
  const task = document.querySelectorAll(".card-active");
  const taskNumber = document.querySelector("[data-task-completed]");
  taskNumber.innerHTML = task.length;
  console.log(task.length);
};

// borramos todas las tareas completadas
const deleteAllTask = () => {
  const task = document.querySelectorAll(".card-active");
  task.forEach((element) => {
    element.classList.add("delete-animation");
    element.addEventListener("transitionend", () => {
      element.remove();
      validateTask();
      validateCompletedTask();
    });
  });
};

const btnDeleteAll = document.querySelector("[data-delete-all]");
const taskCompletedNumber = document.querySelector(
  "task-number__text--completed"
);
btnDeleteAll.addEventListener("click", deleteAllTask);

// creamos la fecha
const date = new Date();
const day = date.getDate();
const dayName = date.toLocaleString("en-EN", { weekday: "short" });
const month = date.getMonth();
const monthName = date.toLocaleString("en-EN", { month: "short" });
const year = date.getFullYear();