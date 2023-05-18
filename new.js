let clockplace = document.getElementById("clock");
let paragraph = document.getElementById("dayly");

let p = "am";

let mon = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

function meClock() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    if (hour > 12) {
        hour -= 12;
        p = "pm";
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    if (day < 10) {
        day = "0" + day;
    }

    if (month < 10) {
        month = "0" + month;
    }

    clockplace.textContent = hour + ":" + min + ":" + sec + " " + p;
    paragraph.textContent = week[date.getDay()] + " - " + day + " " + mon[date.getMonth()] + " " + year;
    setTimeout(meClock, 1000);
};

setTimeout(meClock, 1000);


