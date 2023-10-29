// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add a new task
function addTask() {
  const textTask = taskInput.value.trim();

  if (textTask === "") return;

  //   Create a new list item
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span>${textTask}</span>
    <button class="delete-button" onClick="deleteTask(this)">Delete</button>
  `;

  //   Append the list item to the task list
  taskList.appendChild(listItem);

  //   Clear the input field
  taskInput.value = "";
}

// Function to remove task
function deleteTask(button) {
  const listItem = button.parentElement;
  taskList.removeChild(listItem);
}
