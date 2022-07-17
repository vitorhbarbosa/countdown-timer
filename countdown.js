const date = new Date('Sep 11, 2022 00:00').getTime();

var timer = setInterval(function(){
    const now = new Date().getTime();
    const yearGap = date - now;

    const days = Math.floor(yearGap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((yearGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((yearGap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((yearGap % (1000 * 60)) / 1000);

document.getElementById('days').innerHTML = days;
document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;

    if(yearGap <= 0) {
        document.getElementById('timer').innerHTML = 'The timer is gone'
    }

}, 1000);