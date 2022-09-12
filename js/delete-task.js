import { validateTask, validateCompletedTask } from "./validate-task.js";

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

export { deleteTask, deleteAllTask };
