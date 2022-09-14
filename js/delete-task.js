import { validateTask, validateCompletedTask } from "./validate-task.js";

// borramos las tareas
const deleteTask = (event, id) => {
  const element = event.target;
  const task = JSON.parse(localStorage.getItem("task")) || [];
  const taskCompletedIndex = task.findIndex((item) => item.id === id);
  task.splice(taskCompletedIndex, 1);
  localStorage.setItem("task", JSON.stringify(task));
  element.parentElement.classList.add("delete-animation");
  element.parentElement.addEventListener("transitionend", () => {
    element.parentElement.remove();
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
