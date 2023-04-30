const clock = document.querySelector(".main__aside__clock h1")
const clockToggleLabel = document.querySelector(".clock__am-pm .toggle-switch")
const clockToggleBtn = clockToggleLabel.querySelector(".toggle-button")
const clockToggleHour = clockToggleBtn.querySelector("span")

const ACTIVE = "active"

// 2칸으로 맞춰주기
const zeroTime = function (num) {
    const numTime = parseInt(num)
    let answer = (numTime < 10) ? String(num).padStart(2, "0") : num
    return answer
}

//12시간 기준 hour 변환
const twelveHour = function (num) {
    let numHour = parseInt(num)
    let hour = ''
    let amPm = 'AM'
    amPm = numHour < 13 ? "AM" : "PM"
    numHour = numHour < 13 ? numHour : (numHour - 12)
    hour = numHour < 10 ? String(numHour).padStart(2, "0") : String(numHour)
    return (amPm + ' ' + hour)
}

const getClock = function () {
    const date = new Date()
    const hour = (clockToggleBtn.classList.contains(ACTIVE)) ? twelveHour(date.getHours()) : zeroTime(date.getHours())
    const minute = zeroTime(date.getMinutes())
    const second = zeroTime(date.getSeconds())
    clock.innerText = `${hour} : ${minute} : ${second}`
}
//toggle active 시 변환
const onClickToggle = function () {    
    clockToggleBtn.classList.toggle(ACTIVE)
    clockToggleBtn.innerText = clockToggleBtn.classList.contains(ACTIVE) ? "12H" : "24H"
}

getClock()
let twentyFourInterval = setInterval(getClock, 1000)
clockToggleLabel.addEventListener("click", onClickToggle)
