document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  // Add Task
  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark complete on click
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent marking complete when delete is clicked
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  });

  // Add task on Enter key
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTaskBtn.click();
    }
  });
});
