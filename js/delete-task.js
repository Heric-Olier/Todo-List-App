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
  const task = JSON.parse(localStorage.getItem("task")) || [];
  const taskCompleted = task.filter((item) => item.complete === true);
  taskCompleted.forEach((item) => {
    const taskCompletedIndex = task.findIndex((item) => item.complete === true);
    task.splice(taskCompletedIndex, 1);
    localStorage.setItem("task", JSON.stringify(task));
  });
  const list = document.querySelectorAll(".card-active");
  list.forEach((item) => {
    item.classList.add("delete-animation");
    item.addEventListener("transitionend", () => {
      item.remove();
      validateTask();
      validateCompletedTask();
    });
  });
};

export { deleteTask, deleteAllTask };
