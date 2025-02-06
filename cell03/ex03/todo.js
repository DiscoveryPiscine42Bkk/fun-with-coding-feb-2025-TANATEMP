document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskText = prompt("Enter a new task:");
    if (taskText) {
        createTask(taskText);
        saveTasks();
    }
}

function createTask(text) {
    let task = document.createElement("div");
    task.className = "task";
    task.textContent = text;
    task.onclick = function () {
        if (confirm("Do you want to remove this task?")) {
            task.remove();
            saveTasks();
        }
    };
    
    let ft_list = document.getElementById("ft_list");
    ft_list.appendChild(task);
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll(".task").forEach(task => {
        tasks.push(task.textContent);
    });
    document.cookie = "tasks=" + JSON.stringify(tasks) + "; path=/";
}

function loadTasks() {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [name, value] = cookie.split("=");
        if (name === "tasks") {
            let tasks = JSON.parse(value);
            tasks.forEach(task => createTask(task));
        }
    }
}
