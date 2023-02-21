setInterval(() => {
  date = new Date();
  hourTime = date.getHours();
  minuteTime = date.getMinutes();
  secondTime = date.getSeconds();
  hourRotation = 30 * hourTime + minuteTime / 2 + secondTime / 120;
  mimuteRotation = 6 * minuteTime + secondTime / 10;
  secondRotation = 6 * secondTime;
  hour.style.transform = `rotate(${hourRotation}deg)`;
  minute.style.transform = `rotate(${mimuteRotation}deg)`;
  second.style.transform = `rotate(${secondRotation}deg)`;
  if (hourTime >= 12) {
    hourTime = hourTime - 12;
    meridianText.innerText = "PM";
  } else {
    meridianText.innerText = "AM";
  }
  hourText.innerText = hourTime;
  minText.innerText = minuteTime;
  secText.innerText = secondTime;
}, 1000);
