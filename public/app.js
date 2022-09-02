const time = document.getElementById('time');
const date = document.getElementById('date');

const setTimeAndDate = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let dayOfWeek = now.getDay();
    let dayNumber = now.getDate();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
 
    let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    dayOfWeek = dayArray[dayOfWeek];
    month = monthArray[month];

    if(dayNumber === 1 || dayNumber === 21 || dayNumber === 31) {
        dayNumber = `${dayNumber}st`;
    } else if(dayNumber === 2 || dayNumber === 22) {
        dayNumber = `${dayNumber}nd`; 
    } else if(dayNumber === 3) {
        dayNumber = `${dayNumber}rd`;
    } else {
        dayNumber = `${dayNumber}th`;
    }
    
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    time.innerHTML = `${hours}:${min}:${sec}`;
    date.innerHTML = `${dayOfWeek} the ${dayNumber} of ${month}, ${year}`
};

setTimeAndDate();

setInterval(setTimeAndDate, 1000)