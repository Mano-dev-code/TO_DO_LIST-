const input = document.getElementById("task-input");
const addbtn = document.getElementById("add-btn");
const tasklist = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function rendertask() {
  tasklist.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
       <div id="text"> ${task}</div>
        <div><button class="btn btn-danger justify-content-space" onclick="deleteTask(${index})">DELETE</button></div>
        `;

    tasklist.appendChild(li);
  });
}

// add task
addbtn.addEventListener("click", () => {
  const task = input.value.trim();

  if (task === "") {
    alert("ENTER THE TASK");
    return;
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";
  rendertask();
});

// delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  rendertask();
}

rendertask();
