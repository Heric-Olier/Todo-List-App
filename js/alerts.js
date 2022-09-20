const containerInputTask = document.querySelector(".main__card-add-task");

export const alert = () => {
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML = `<p class="alert__text">You must enter a task</p>`;
  containerInputTask.appendChild(alert);
  setTimeout(() => {
    alert.remove();
  }, 3000);
};
