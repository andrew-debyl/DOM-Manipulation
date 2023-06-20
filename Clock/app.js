const secondHandle = document.querySelector('.handle_second')
const minuteHandle = document.querySelector('.handle_minute')
const hourHandle = document.querySelector('.handle_hour')

//Not using requestAnimationFrame because it updates every few miliseconds and thats too many times
//Set intervals runs with specified time (1000ms here)
setInterval(() => {
    setHandles()
}, 1000)

function setHandles() {
    const d = new Date()
    const hour = d.getHours()
    const minute = d.getMinutes()
    const second = d.getSeconds()
    
    const minuteAngle = (minute * 6) + second * 0.1
    const hourAngle = (hour * 30) + minute * 0.5

    hourHandle.style.transform = `rotate(${hourAngle}deg)`
    minuteHandle.style.transform = `rotate(${minuteAngle}deg)`
    secondHandle.style.transform = `rotate(${second * 6}deg)`   
}