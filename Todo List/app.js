const list = document.querySelector(".list");
const input = document.querySelector("input")

let nameOfToDo = ''
let toDoList = [];
let counter = 0

function onInputChange(event) {
    nameOfToDo = event.target.value
}

function addToList() {
    if(!nameOfToDo) {
        return
    }

    const task = {
        id: counter++,
        task: nameOfToDo
    }

    toDoList.push(task)
    renderToDos()
    input.value = ''
    nameOfToDo = ''
}

function removeFromList(id) {
  toDoList = toDoList.filter((todo) =>  todo.id !== id);
  renderToDos();
}

function renderToDos() {
  list.innerHTML = toDoList
    .map(
      (element) =>
        `<li>
            ${element.task}
            <button class="todo__delete" onclick="removeFromList(${element.id})">
                x
          </button>
        </li>`
    )
    .join("");
}