const personalTodoList = document.querySelector (".to-do__personal-list ul")
const personalTodoInputForm = document.querySelector(".to-do__personal-input-form")
const personalTodoInputText = document.querySelector(".to-do__personal-input-form input")

const deleteTodo = function (event) {
    const targetli = event.target.parentElement
    targetli.remove()
}

const paintPersonalTodo = function (todoContent) {
    const personalTodoItem = document.createElement("li")
    personalTodoItem.classList.add("to-do__personal-list__item")
    const personalTodoCheckbox = document.createElement("input")
    personalTodoCheckbox.type = "checkbox"
    const personalTodoSpan = document.createElement("span")
    personalTodoSpan.innerText = todoContent
    const personalTodoDeleteBtn = document.createElement("button")
    const trashIcon = document.createElement("i")
    trashIcon.classList.add("fa-solid", "fa-trash-can-arrow-up")
    personalTodoDeleteBtn.addEventListener("click", deleteTodo)
    personalTodoDeleteBtn.appendChild(trashIcon)
    personalTodoItem.appendChild(personalTodoCheckbox)
    personalTodoItem.appendChild(personalTodoSpan)
    personalTodoItem.appendChild(personalTodoDeleteBtn)
    personalTodoList.appendChild(personalTodoItem)
}

const addPersonalTodo = function (event) {
    event.preventDefault()
    const personalTodoContent = personalTodoInputText.value
    personalTodoInputText.value = ""
    paintPersonalTodo(personalTodoContent)
}

personalTodoInputForm.addEventListener("submit", addPersonalTodo)