let clockplace = document.getElementById("clockdiv");

let p = "am";

function me() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

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

    clockplace.textContent = hour + ":" + min + ":" + sec + " " + p;

    setTimeout(me, 1000);
};

setTimeout(me, 1000);


