//buttons
const addBtn = document.querySelector("#add-btn");
const toDoInput = document.querySelector("#todo-input");

const listContainer = document.querySelector("#todo-list");

let userInput = "";

let tasks = [];

// render logic
function renderTasks() {
  listContainer.innerHTML = "";

  for (let task of tasks) {
    const taskComponent = document.createElement("li");
    taskComponent.innerHTML = ` <li class="todo-item">
          <span>${task.task}</span>
          <div class="actions">
            <button class="complete">Complete</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>
        </li>`;

    if (task.completed) taskComponent.classList.add("completed");

    listContainer.appendChild(taskComponent);

    const delBtn = taskComponent.querySelector(".delete");
    const completeBtn = taskComponent.querySelector(".complete");
    const editBtn = taskComponent.querySelector(".edit");

    //     delete logic
    delBtn.addEventListener("click", () => {
      tasks = tasks.filter((currTask) => currTask !== task);
      renderTasks();
    });

    //     strikethrough logic
    completeBtn.addEventListener("click", () => {
      task.completed = true;
      taskComponent.classList.add("completed");
    });

    //     edit logic
    editBtn.addEventListener("click", () => {
      addBtn.textContent = "Save";
      toDoInput.value = task.task;
      let updatedTask;

      toDoInput.addEventListener("input", () => {
        updatedTask = toDoInput.value;
      });

      addBtn.addEventListener("click", () => {
        task.task = updatedTask;
        addBtn.textContent = "Add";
        toDoInput.value = "";
        renderTasks();
      });
    });
  }
}

// tracking what's in input box;
toDoInput.addEventListener("input", () => {
  userInput = toDoInput.value;
});

// add logic
addBtn.addEventListener("click", () => {
  if (addBtn.textContent == "Add") {
    tasks.push({ task: userInput, completed: false });
    renderTasks();
    userInput = "";
    toDoInput.value = "";
  }
});
