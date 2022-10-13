import completeTask from "./complete-task.js";
import {
  validateTask,
  checkTask,
  validateCompletedTask,
} from "./validate-task.js";
import { deleteTask, deleteAllTask } from "./delete-task.js";
import { showTask } from "./show-task-local-storage.js";
import { alert } from "./alerts.js";

const btnCreate = document.querySelector("[data-form-btn]");


// creamos la fecha
const date = new Date();
const day = date.getDate();
const dayName = date.toLocaleString("en-EN", { weekday: "short" });
const monthName = date.toLocaleString("en-EN", { month: "short" });
const year = date.getFullYear();

// creamos las tareas
export const createTask = (event) => {
  event.preventDefault();
  const taskList = JSON.parse(localStorage.getItem("task")) || [];
  const formInput = document.querySelector("[data-form-input]");
  const list = document.querySelector("[data-list]");
  const value = formInput.value;
  const task = document.createElement("li");
  const id = Date.now();
  if (value === "") {
    alert();
  } else {
    task.classList.add("card");
    formInput.value = "";
    const content = `<div class="content__task">
    ${checkTask(task.id).outerHTML}
    <div class="content__task-text">
    <span class="task">${value}</span>
    <span class="date"> ${dayName}${","} ${day} ${monthName}${","} ${year}</span>
    </div>
    </div>
    <i class="fa-solid fa-xmark trashIcon icon" data-delete></i>`;
    task.innerHTML += content;
    list.appendChild(task);

    const trashIcon = task.querySelector(".trashIcon");
    trashIcon.addEventListener("click", (event) => deleteTask(event, id));

    const checkIcon = task.querySelector(".fa-regular");
    checkIcon.addEventListener("click", (event) => completeTask(event, id));

    const btnDeleteAll = document.querySelector("[data-delete-all]");
    btnDeleteAll.addEventListener("click", deleteAllTask);

    const complete = false;
    const taskObject = {
      id,
      complete,
      value,
      dayName,
      day,
      monthName,
      year,
    };

    taskList.push(taskObject);
    localStorage.setItem("task", JSON.stringify(taskList));
  }
  validateTask();
  validateCompletedTask();
};
btnCreate.addEventListener("click", createTask);
