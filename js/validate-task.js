// creamos el icono de check
const checkTask = (id) => {
  const i = document.createElement("i");
  i.classList.add("fa-regular", "fa-circle-check", "icon");
  i.setAttribute("data-complete", id);
  return i;
};

// validamos el numero de tareas
const validateTask = (id) => {
  const task = document.querySelectorAll(".card");
  const taskNumber = document.querySelector("[data-task-number]");
  taskNumber.innerHTML = task.length;
};

// validamos el numero de tareas completadas
const validateCompletedTask = (id) => {
  const task = document.querySelectorAll(".card-active");
  const taskNumber = document.querySelector("[data-task-completed]");
  taskNumber.innerHTML = task.length;
};

export { validateTask, validateCompletedTask, checkTask };
