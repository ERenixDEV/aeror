const time = document.getElementById("time");
const today = document.getElementById("today");

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function updateClock() {

    const now = new Date();

    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Tehran",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    }).formatToParts(now);

    const h = Number(parts.find(x => x.type === "hour").value);
    const m = Number(parts.find(x => x.type === "minute").value);
    const s = Number(parts.find(x => x.type === "second").value);

    time.textContent =
        String(h).padStart(2, "0") + ":" +
        String(m).padStart(2, "0");

    today.textContent = "Today, +10hrs 30mins";

    const hourDeg = ((h % 12) * 30) + (m * 0.5);
    const minuteDeg = (m * 6) + (s * 0.1);
    const secondDeg = s * 6;

    hour.style.transform = `rotate(${hourDeg}deg)`;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    second.style.transform = `rotate(${secondDeg}deg)`;
}

updateClock();
setInterval(updateClock, 1000);
