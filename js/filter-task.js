import completeTask from "./complete-task.js";
import { validateTask, validateCompletedTask } from "./validate-task.js";
import { deleteTask, deleteAllTask } from "./delete-task.js";
import { showTask, createTaskElement } from "./show-task-local-storage.js";

const filterCompleted = document.querySelector("[data-filter-completed]");
console.log(filterCompleted, "filterCompleted");
const filterActive = document.querySelector("[data-filter-active]");
const filterAll = document.querySelector("[data-filter-all]");

const filterAllTask = () => {
  filterAll.addEventListener("click", () => {
    filterAll.classList.add("active");
    filterActive.classList.remove("active");
    filterCompleted.classList.remove("active");
    const list = document.querySelector("[data-list]");
    list.innerHTML = "";
    showTask();
  });
};

const filterActiveTask = () => {
  filterActive.addEventListener("click", () => {
    filterActive.classList.add("active");
    filterAll.classList.remove("active");
    filterCompleted.classList.remove("active");
    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    const list = document.querySelector("[data-list]");
    list.innerHTML = "";
    taskList.forEach((task) => {
      if (!task.complete) {
        const taskElement = createTaskElement(task);
        list.appendChild(taskElement);

        const trashIcon = taskElement.querySelector(".trashIcon");
        trashIcon.addEventListener("click", (event) =>
          deleteTask(event, task.id)
        );

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
      }
    });
  });
};

const filterCompletedTask = () => {
  filterCompleted.addEventListener("click", () => {
    filterCompleted.classList.add("active");
    filterActive.classList.remove("active");
    filterAll.classList.remove("active");
    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    const list = document.querySelector("[data-list]");
    list.innerHTML = "";
    taskList.forEach((task) => {
      if (task.complete) {
        const taskElement = createTaskElement(task);
        list.appendChild(taskElement);

        const trashIcon = taskElement.querySelector(".trashIcon");
        trashIcon.addEventListener("click", (event) =>
          deleteTask(event, task.id)
        );

        const checkIcon = taskElement.querySelector(".fa-regular");
        checkIcon.addEventListener("click", (event) =>
          completeTask(event, task.id)
        );

        const btnDeleteAll = document.querySelector("[data-delete-all]");
        btnDeleteAll.addEventListener("click", deleteAllTask);

        checkIcon.classList.remove("fa-regular");
        checkIcon.classList.add("fa-solid");
        taskElement.classList.add("card-active");
      }

      validateTask();
      validateCompletedTask();
    });
  });
};

export { filterAllTask, filterActiveTask, filterCompletedTask };
