const time = document.getElementById("time");
const today = document.getElementById("today");

const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

const TIME_ZONE = "Asia/Tehran";

function getTehranTime() {
    const now = new Date();

    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: TIME_ZONE,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    }).formatToParts(now);

    const values = {};

    parts.forEach(part => {
        if (part.type !== "literal") {
            values[part.type] = part.value;
        }
    });

    let hours = Number(values.hour);
    const minutes = Number(values.minute);
    const seconds = Number(values.second);

    if (hours === 24) {
        hours = 0;
    }

    return {
        hours,
        minutes,
        seconds
    };
}

function updateClock() {
    const { hours, minutes, seconds } = getTehranTime();

    time.textContent =
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

    today.textContent = "Today, +3hrs 30mins";

    const hourDegrees =
        ((hours % 12) * 30) +
        (minutes * 0.5) +
        (seconds / 120);

    const minuteDegrees =
        (minutes * 6) +
        (seconds * 0.1);

    const secondDegrees =
        seconds * 6;

    hourHand.style.transform =
        `rotate(${hourDegrees}deg)`;

    minuteHand.style.transform =
        `rotate(${minuteDegrees}deg)`;

    secondHand.style.transform =
        `rotate(${secondDegrees}deg)`;
}

updateClock();

setInterval(updateClock, 1000);
