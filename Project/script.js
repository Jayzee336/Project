const clock = document.getElementById("clock");
const digital = document.getElementById("digital");

// Create numbers 1–12 for analog clock
for (let i = 1; i <= 12; i++) {
  let number = document.createElement("div");
  number.className = "number";
  number.innerText = i;

  let angle = (i / 12) * (2 * Math.PI); // radians
  let radius = 130; // distance from center
  let x = 150 + radius * Math.sin(angle);
  let y = 150 - radius * Math.cos(angle);

  number.style.left = x + "px";
  number.style.top = y + "px";
  clock.appendChild(number);
}

function updateClock() {
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  // Analog clock hands
  let secondDeg = (seconds / 60) * 360;
  let minuteDeg = ((minutes + seconds / 60) / 60) * 360;
  let hourDeg = ((hours % 12 + minutes / 60) / 12) * 360;

  document.getElementById("second").style.transform =
    `translate(-50%, -100%) rotate(${secondDeg}deg)`;
  document.getElementById("minute").style.transform =
    `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
  document.getElementById("hour").style.transform =
    `translate(-50%, -100%) rotate(${hourDeg}deg)`;

  // Digital clock
  let hh = String(hours).padStart(2, "0");
  let mm = String(minutes).padStart(2, "0");
  let ss = String(seconds).padStart(2, "0");
  digital.textContent = `${hh}:${mm}:${ss}`;
}

setInterval(updateClock, 1000);
updateClock();