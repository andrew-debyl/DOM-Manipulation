// Using Date.now() to track the time.
// It gives you the time in miliseconds since 1970
// Using requestAminationFrame to update every milisecond (every frame of your browser). 
//  Need to call the function and give it the function you want to loop over. 
//  You need to do this inside the function as well (two lines of the same code)
//  It returns an id that we need to give it to cancel it.
//  To cancel we call cancelAnimationFrame and give it the id.

const timerMilliseconds = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMinutes = document.querySelector('.timer__minutes')

let cancelId
let startTime
let savedTime = 0

function startTimer() {
    startTime = Date.now()

    cancelId = requestAnimationFrame(updateTimer)
}

//Need to store the value of time when we stop it, and make sure we update the value if we press stop more than once
function stopTimer() {
    savedTime = savedTime + Date.now() - startTime

    cancelAnimationFrame(cancelId)
}

//Putting the values back to 0
//Making sure the savedTime is reset and the startTime is reset
function resetTimer() {
    timerMilliseconds.innerHTML = "000"
    timerSeconds.innerHTML = "00"
    timerMinutes.innerHTML = "00"
    savedTime = 0
    startTime = Date.now()
}

//Getting the difference in milliseconds from when you start the time and the current running time
//Also adding the savedTime so it will continue from the same place if we press stop
//Changing the html to show the milliseconds and modulo 1000 to only show the last 3 digits (cant go higher than 999)
//Changing html to show seconds and need to round down after dividing by 1000 to get seconds
//Also modulo by 60 so we make sure to go back to 0. (seconds cant go over 59)
//Then doing padStart to add the leading 0's and need to change it to a string first
function updateTimer () {
    let millisElapsed = savedTime + Date.now() - startTime
    let secondsElasped = millisElapsed / 1000
    let minutesElasped = secondsElasped / 60
    
    timerMilliseconds.innerHTML = (millisElapsed % 1000).toString().padStart(3, "0")

    timerSeconds.innerHTML = (Math.floor(secondsElasped % 60)).toString().padStart(2, "0")

    timerMinutes.innerHTML = (Math.floor(minutesElasped)).toString().padStart(2, "0")

    cancelId = requestAnimationFrame(updateTimer)
}