const timerMilliseconds = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMinutes = document.querySelector('.timer__minutes')

const startButton = document.querySelector('.stopwatch__start')
const stopButton = document.querySelector('.stopwatch__stop')
const resetButton = document.querySelector('.stopwatch__reset')

let startTime
let id
let savedTime = 0
const countDown = 65 * 1000

function startTimer() {
    startButton.disabled = true
    stopButton.disabled = false
    resetButton.disabled = false

    startTime = Date.now()

    id = requestAnimationFrame(updateTime)
}

function stopTimer() {
    startButton.disabled = false
    stopButton.disabled = true
    resetButton.disabled = false

    savedTime = Date.now() - startTime + savedTime

    cancelAnimationFrame(id)
}

function resetTimer() {
    savedTime = 0;
    startTime = Date.now()

    timerMilliseconds.innerHTML = "000"
    timerSeconds.innerHTML = "05"
    timerMinutes.innerHTML = "01"
}

function updateTime() {
    let millisElasped = Date.now() - startTime + savedTime
    let millisLeft = countDown - millisElasped

    if (millisLeft < 0) {
        millisLeft = 0
        cancelAnimationFrame(id)
        id = null
    }

    let secondsLeft = millisLeft / 1000
    let minutesLeft = secondsLeft / 60
    
    timerMilliseconds.innerHTML = (millisLeft % 1000).toString().padStart(3, "0")
    timerSeconds.innerHTML = (Math.floor(secondsLeft) % 60).toString().padStart(2, "0")
    timerMinutes.innerHTML = (Math.floor(minutesLeft)).toString().padStart(2, "0")

    if (id) {
        id = requestAnimationFrame(updateTime)
    }
}