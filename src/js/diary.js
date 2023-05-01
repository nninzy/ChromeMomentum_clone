const diaryInputForm = document.querySelector(".diary__input-form")
const diaryInputText = document.querySelector(".diary__input-text")
const diaryTypeDone = document.querySelector(".diary__done")
const diaryTypeDoneTime = document.querySelector(".diary__done-time")

const DIARY = "diary"
const savedDiary = localStorage.getItem(DIARY)

const showDiaryInput = function () {
    diaryInputForm.classList.remove(HIDDEN_CLASSNAME)
    diaryInputText.classList.remove(HIDDEN_CLASSNAME)
    diaryTypeDone.classList.add(HIDDEN_CLASSNAME)
    diaryTypeDoneTime.classList.add(HIDDEN_CLASSNAME)
}
const showDiaryDone = function () {
    diaryTypeDone.classList.remove(HIDDEN_CLASSNAME)
    diaryTypeDoneTime.classList.remove(HIDDEN_CLASSNAME)
    diaryInputForm.classList.add(HIDDEN_CLASSNAME)
    diaryInputText.classList.add(HIDDEN_CLASSNAME)
    diaryTypeDone.innerText = savedDiary
}
const onSubmitDiary = function (event) {
    event.preventDefault()
    const diary = diaryInputText.value
    localStorage.setItem(DIARY, diary)
    checkDiary()
}

const checkDiary = function () {
    if (savedDiary === null || savedDiary === undefined) {
        showDiaryInput()
    } else {
        showDiaryDone()
    }
    diaryInputText.addEventListener("submit", onSubmitDiary)
}

checkDiary()