const timeElement = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString();
const nameElement = document.getElementById("name");
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
