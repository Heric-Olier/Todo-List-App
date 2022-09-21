import { validateCompletedTask, validateTask } from "./validate-task.js";
import { checkTask } from "./validate-task.js";

const completeTask = (event, id) => {
  const element = event.target;
  const task = JSON.parse(localStorage.getItem("task")) || [];
  const taskCompletedIndex = task.findIndex((item) => item.id === id);
  task[taskCompletedIndex].complete = !task[taskCompletedIndex].complete;
  localStorage.setItem("task", JSON.stringify(task));

  if (task[taskCompletedIndex].complete) {
    element.classList.remove("fa-regular");
    element.classList.add("fa-solid");
    element.parentElement.parentElement.classList.add("card-active");
  } else {
    element.classList.remove("fa-solid");
    element.classList.add("fa-regular");
    element.parentElement.parentElement.classList.remove("card-active");
  }

  checkTask();
  validateTask(id);
  validateCompletedTask();
};

export default completeTask;
