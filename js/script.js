import completeTask from "./complete-task.js";
import {
  validateTask,
  checkTask,
  validateCompletedTask,
} from "./validate-task.js";
import { deleteTask } from "./delete-task.js";

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
    alert("Debes ingresar una tarea");
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
    <i class="fas fa-doutone fa-trash trashIcon icon" data-delete></i>`;
    task.innerHTML += content;
    list.appendChild(task);

    const trashIcon = task.querySelector(".trashIcon");
    trashIcon.addEventListener("click", deleteTask);

    const checkIcon = task.querySelector(".fa-regular");
    checkIcon.addEventListener("click", (event) => completeTask(event, id));
    validateTask();
    validateCompletedTask();
    

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
};
btnCreate.addEventListener("click", createTask);

// mostramos las tareas guardadas en el local storage
const showTask = () => {
  const taskList = JSON.parse(localStorage.getItem("task")) || [];
  const list = document.querySelector("[data-list]");
  taskList.forEach((task) => {
    const taskElement = document.createElement("li");
    taskElement.classList.add("card");
    const content = `<div class="content__task">
    ${checkTask().outerHTML}
    <div class="content__task-text">
    <span class="task">${task.value}</span>
    <span class="date"> ${task.dayName}${","} ${task.day} ${
      task.monthName
    }${","} ${task.year}</span>
    </div>
    </div>
    <i class="fas fa-doutone fa-trash trashIcon icon"></i>`;
    taskElement.innerHTML += content;
    list.appendChild(taskElement);



    const trashIcon = taskElement.querySelector(".trashIcon");
    trashIcon.addEventListener("click", deleteTask);
    
    const checkIcon = taskElement.querySelector(".fa-regular");
    checkIcon.addEventListener("click", (event) => completeTask(event, task.id));
    validateTask();
    validateCompletedTask();

    if (task.complete) {
      checkIcon.classList.remove("fa-regular");
      checkIcon.classList.add("fa-solid");
      taskElement.classList.add("card-active");
    } else {
      checkIcon.classList.remove("fa-solid");
      checkIcon.classList.add("fa-regular");
      taskElement.classList.remove("card-active");
    }
  });
};
showTask();



