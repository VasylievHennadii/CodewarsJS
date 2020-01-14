// You have the job to implement a countdown function that will be used for the next NASA spatial mission. The function takes a duration in milliseconds and return a string in countdown format.

// If it's counting down, the first character should be '-', if it's counting up it should be '+'. Then it should return the number of: hours (min 2 units), minutes (2 units) and seconds (2 units).

// countdown(-154800000)  -> return  '-43:00:00'
// countdown(0)           -> return  '+00:00:00'
// countdown(61000)       -> return  '+00:01:01'
// countdown(360000000)   -> return '+100:00:00'


// first solution
function countdown(duration) {
    let sign;
    let seconds, minutes, hours;
    let secondsDivider = 1000;
    let minutesDivider = 1000 * 60;
    let hoursDivider = 1000 * 60 * 60;

    if (duration < 0) {
        sign = "-";
        duration = Math.abs(duration);
    } else {
        sign = "+"
    }

    seconds = Math.floor(duration / secondsDivider) % 60;
    minutes = Math.floor(duration / minutesDivider) % 60;
    hours = Math.floor(duration / hoursDivider);

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;

    return `${sign}${hours}:${minutes}:${seconds}`
}


// second solution
function countdown (millisecs) {
    if(millisecs === 0) return '+00:00:00';
    let time = Math.abs(millisecs);
    let hours = parseInt(time / 3600000);
    let minutes = parseInt((time / 60000) - (hours * 60));
    let seconds = (time / 1000) - (hours * 60 * 60) - (minutes * 60);
  
    if(hours < 10) hours = '0' + hours;
    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;
  
    return millisecs < 0
      ? '-' + hours + ':' + minutes + ':' + seconds
      : '+' + hours + ':' + minutes + ':' + seconds;
}