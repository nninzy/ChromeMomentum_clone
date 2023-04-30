// querySelector
const login = document.querySelector(".login")
const loginForm = login.querySelector("form")
const loginInput = loginForm.querySelector("input")
const header = document.querySelector(".header")
const main = document.querySelector(".main")
const footer = document.querySelector(".footer")
const greetingH3 = document.querySelector(".main__aside__greeting h3")
const logOut = document.querySelector(".main__aside__btns__log-out")
// 문자열 변수
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"
// localStorage 변수
const savedUsername = localStorage.getItem(USERNAME_KEY)

// 재활용 함수
const showLogin = function () {
    login.classList.remove(HIDDEN_CLASSNAME)
    header.classList.add(HIDDEN_CLASSNAME)
    main.classList.add(HIDDEN_CLASSNAME)
    footer.classList.add(HIDDEN_CLASSNAME)
}
const afterLogin = function () {
    login.classList.add(HIDDEN_CLASSNAME)
    header.classList.remove(HIDDEN_CLASSNAME)
    main.classList.remove(HIDDEN_CLASSNAME)
    footer.classList.remove(HIDDEN_CLASSNAME)
    greetingH3.innerText = `안녕하세요, ${savedUsername}님`
}
const checkLogin = function () {
    if (savedUsername === null || savedUsername === '') {
        showLogin()
    } else {
        afterLogin()
    }
    loginForm.addEventListener("submit", onLoginSubmit)
}
// event 함수
const onLoginSubmit = function (event) {
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    checkLogin()
}

// login 실행문
checkLogin()

//Logout event 함수
const onLogout = function () {
    localStorage.removeItem(USERNAME_KEY)
    showLogin()
}
// logout 실행문
logOut.addEventListener("click", onLogout)