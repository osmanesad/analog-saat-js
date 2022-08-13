
const secondTime = document.getElementById("second")

const minuteTime = document.getElementById("minute")

const hourTime = document.getElementById("hour")

function getTime(){
    const now = new Date()
    const second = now.getSeconds()
    const minute = now.getMinutes()
    const hour = now.getHours()
    const timeInterval = 6

    secondTime.style.transform = "rotate(" + (second * timeInterval) + "deg)"
    minuteTime.style.transform = "rotate(" + (minute * timeInterval + second /10) + "deg)"
    hourTime.style.transform = "rotate(" + (hour * 30 + minute / 2) + "deg)"

    console.log(second)
    console.log(second * timeInterval)
    console.log(minute * timeInterval + second / 10)
    console.log(hour * 30 + minute / 2)
}

setInterval(getTime, 100)














