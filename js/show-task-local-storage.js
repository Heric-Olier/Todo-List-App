import completeTask from "./complete-task.js";
import {
  validateTask,
  checkTask,
  validateCompletedTask,
} from "./validate-task.js";
import { deleteTask, deleteAllTask } from "./delete-task.js";
import {
  filterCompletedTask,
  filterActiveTask,
  filterAllTask,
} from "./filter-task.js";

export const createTaskElement = (task) => {
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
      <i class="fa-solid fa-xmark trashIcon icon"></i>`;
  taskElement.innerHTML += content;
  return taskElement;
};

export const showTask = () => {
  const taskList = JSON.parse(localStorage.getItem("task")) || [];
  const list = document.querySelector("[data-list]");
  taskList.forEach((task) => {
    const taskElement = createTaskElement(task);
    list.appendChild(taskElement);

    const trashIcon = taskElement.querySelector(".trashIcon");
    trashIcon.addEventListener("click", (event) => deleteTask(event, task.id));

    const checkIcon = taskElement.querySelector(".fa-regular");
    checkIcon.addEventListener("click", (event) =>
      completeTask(event, task.id)
    );

    const btnDeleteAll = document.querySelector("[data-delete-all]");
    btnDeleteAll.addEventListener("click", deleteAllTask);

    if (task.complete) {
      checkIcon.classList.remove("fa-regular");
      checkIcon.classList.add("fa-solid");
      taskElement.classList.add("card-active");
    } else {
      checkIcon.classList.remove("fa-solid");
      checkIcon.classList.add("fa-regular");
      taskElement.classList.remove("card-active");
    }

    validateTask();
    validateCompletedTask();
  });
};

showTask();
filterCompletedTask();
filterActiveTask();
filterAllTask();
