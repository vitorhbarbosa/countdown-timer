// Get the new year 
const getNewYear = () => {
    const currentYear = new Date().getFullYear();
    return new Date(`January 01 ${currentYear + 1} 00:00:00`);
};

// update the year element
const year = document.querySelector('.year');
year.innerHTML = getNewYear().getFullYear();

// select elements
const app = document.querySelector('.countdown-timer');
const message = document.querySelector('.message');
const heading = document.querySelector('h1');


const format = (t) => {
    return t < 10 ? '0' + t : t;
};

