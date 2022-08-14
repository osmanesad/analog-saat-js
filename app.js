const secondTime = document.getElementById("second");

const minuteTime = document.getElementById("minute");

const hourTime = document.getElementById("hour");



function getTime() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();
  const timeInterval = 6;

  secondTime.style.transform = "rotate(" + second * timeInterval + "deg)";
  minuteTime.style.transform =
    "rotate(" + (minute * timeInterval + second / 10) + "deg)";
  hourTime.style.transform = "rotate(" + (hour * 30 + minute / 2) + "deg)";

  // console.log(second)
  //console.log(second * timeInterval)
  //console.log(minute * timeInterval + second / 10)
  //console.log(hour * 30 + minute / 2)
  console.log(hour)
  document.getElementById('time').innerHTML = hour + ":" + minute + ":" + second;
}


setInterval(getTime, 100)





/*
for(var x=0; x <= 12; x++){
    document.writeln(x)
    document.getElementById('number').innerHTML = x;

}
*/