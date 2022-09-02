const time = document.getElementById('time');
const date = document.getElementById('date');

const setTimeAndDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth();
    const weekDayNumber = now.getDay();
    let day = now.getDate();
    const hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
 
    switch(month) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
    }   
 
    let dayOfWeek
    switch(weekDayNumber) {
        case 0:
            dayOfWeek = 'Sunday';
            break;
        case 1:
            dayOfWeek = 'Monday';
            break;
        case 2:
            dayOfWeek = 'Tuesday';
            break;
        case 3:
            dayOfWeek = 'Wednesday';
            break;
        case 4:
            dayOfWeek = 'Thursday';
            break;
        case 5:
            dayOfWeek = 'Friday';
            break;
        case 6:
            dayOfWeek = 'Saturday';
            break;
    }

    if(day === 1 || day === 21 || day === 31) {
        day = `${day}st`;
    } else if(day === 2 || day === 22) {
        day = `${day}nd`; 
    } else if(day === 3) {
        day = `${day}rd`;
    } else {
        day = `${day}th`;
    }
    
    if(min < 10) {
        min = `0${min}`;
    }

    if(sec < 10) {
        sec = `0${sec}`;
    }

    time.innerHTML = `${hours}:${min}:${sec}`;
    date.innerHTML = `${dayOfWeek} the ${day} of ${month}, ${year}`
};

setTimeAndDate();

setInterval(setTimeAndDate, 1000)