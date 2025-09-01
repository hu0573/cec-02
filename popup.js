const timeElement = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString();
const nameElement = document.getElementById("name");
const timerElement = document.getElementById("timer");
timeElement.textContent = `Time is: ${currentTime}`;

chrome.storage.sync.get(["name"], (res) => {
  let name; // 先声明在外面

  if (!res.name || res.name.length === 0) {
    name = "???";
  } else {
    name = res.name;
  }

  nameElement.textContent = `Your name is ${name}`;
});

function updateTimerElements() {
  chrome.storage.local.get(["timer"], (res) => {
    let timer; // 先声明在外面

    if (!res.timer || res.timer.length === 0) {
      timer = "???";
    } else {
      timer = res.timer;
    }

    timerElement.textContent = `Your timer is ${timer}`;
  });
}
updateTimerElements();
setInterval(updateTimerElements, 1000);
