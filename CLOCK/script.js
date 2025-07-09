let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
    const now = new Date();
    const hh = now.getHours();
    const mm = now.getMinutes();
    const ss = now.getSeconds();

    // More accurate rotation with fractions
    const hRotation = 30 * (hh % 12) + 0.5 * mm + (1 / 120) * ss;
    const mRotation = 6 * mm + 0.1 * ss;
    const sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

// Initial call
displayTime();
// Re-run every second
setInterval(displayTime, 1000);
