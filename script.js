const clock = document.getElementById("clock");
const date = document.getElementById("date");

function updateClock() {

    const now = new Date();

    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Tehran",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Tehran",
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    let time = formatter.format(now);

    time = time.replace(/\s/g, "");

    clock.textContent = time;

    const formattedDate = dateFormatter
        .format(now)
        .toUpperCase()
        .replace(",", " •");

    date.textContent = formattedDate;
}

updateClock();

setInterval(updateClock, 1000);
