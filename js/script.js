import completeTask from "./complete-task.js";
import { validateTask, checkTask } from "./validate-task.js";
import { deleteTask } from "./delete-task.js";

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
    <span class="date"> ${dayName}${","} ${day} ${monthName}${","} ${year}</span>
      </div>
    </div>
    <i class="fas fa-doutone fa-trash trashIcon icon"></i>`;
    task.innerHTML += content;
    list.appendChild(task);

    const trashIcon = task.querySelector(".trashIcon");
    trashIcon.addEventListener("click", deleteTask);

    const checkIcon = task.querySelector(".fa-regular");
    checkIcon.addEventListener("click", completeTask);
  }
  validateTask();
};

btnCreate.addEventListener("click", createTask);

// creamos la fecha
const date = new Date();
const day = date.getDate();
const dayName = date.toLocaleString("en-EN", { weekday: "short" });
const monthName = date.toLocaleString("en-EN", { month: "short" });
const year = date.getFullYear();
