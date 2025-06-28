// Select elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTask = document.getElementById("addTask");

// Add a new task
addTask.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task !== "") {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    }
});
