'use strict'

// Select elementos do documento
const clockElement = document.querySelector('.clock');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');


const currentDate = new Date();

function updateTime(hour, minutes, sencods, date) {
    date = new Date()
    hour.textContent = date.getHours().toString().padStart(2, '0');
    minutes.textContent = date.getMinutes().toString().padStart(2, '0');;
    sencods.textContent = date. getSeconds().toString().padStart(2, '0');;
}

function updateClock() {
    updateTime(hoursElement, minutesElement, secondsElement, currentDate);
    setInterval(()=> {
        updateTime(hoursElement, minutesElement, secondsElement, currentDate);
    }, 1000)
}


updateClock();




































