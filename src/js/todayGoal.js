const todayGoalInputForm = document.querySelector(".input-today-goal__form")
const todayGoalInput = todayGoalInputForm.querySelector("input")
const afterInputGoalDiv = document.querySelector(".after-today-goal__div")
const afterInputGoalCheckbox = afterInputGoalDiv.querySelector("input")
const afterInputGoalLabel = afterInputGoalDiv.querySelector("label")
const deleteTodayGoalBtn = afterInputGoalDiv.querySelector("button")

const TODAYGOAL = "todayGoal"
const savedTodayGoal = localStorage.getItem(TODAYGOAL)

const showInput = function () {
    todayGoalInputForm.classList.remove(HIDDEN_CLASSNAME)
    afterInputGoalDiv.classList.add(HIDDEN_CLASSNAME)
    afterInputGoalCheckbox.classList.add(HIDDEN_CLASSNAME)
    afterInputGoalLabel.classList.add(HIDDEN_CLASSNAME)
    deleteTodayGoalBtn.classList.add(HIDDEN_CLASSNAME)
}
const showGoal = function () {
    afterInputGoalDiv.classList.remove(HIDDEN_CLASSNAME)
    afterInputGoalCheckbox.classList.remove(HIDDEN_CLASSNAME)
    afterInputGoalLabel.classList.remove(HIDDEN_CLASSNAME)
    deleteTodayGoalBtn.classList.remove(HIDDEN_CLASSNAME)
    todayGoalInputForm.classList.add(HIDDEN_CLASSNAME)
}
const onTodayGoalSubmit = function () {
    const todayGoal = todayGoalInput.value
     localStorage.setItem(TODAYGOAL, todayGoal)
     checkGoal()
}
const doneTodayGoal = function () {
    afterInputGoalCheckbox.classList.toggle("active")
}

const deleteTodayGoal = function () {
    localStorage.removeItem(TODAYGOAL)
    showInput()
}

const checkGoal = function () {
    if (savedTodayGoal === null || savedTodayGoal === undefined) {
        showInput()
    } else {
        showGoal()
        afterInputGoalLabel.innerText = savedTodayGoal
    }
    todayGoalInputForm.addEventListener("submit", onTodayGoalSubmit)
}

checkGoal()
afterInputGoalCheckbox.addEventListener("click", doneTodayGoal)
deleteTodayGoalBtn.addEventListener("click", deleteTodayGoal)