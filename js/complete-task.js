import { validateCompletedTask } from "./validate-task.js";

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fa-solid");
    if (element.classList.contains("fa-solid")) {
      event.target.parentElement.parentElement.classList.add("card-active");
    } else {
      event.target.parentElement.parentElement.classList.remove("card-active");
    }
    validateCompletedTask();
  };

  export default completeTask;