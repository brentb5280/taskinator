var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

buttonEl.addEventListener("click", function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
});

var createTaskHandler = function() {
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";
    listItemE1.TextContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemE1);
}

buttonEl.addEventListener("click", createTaskHandler);