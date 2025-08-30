const timeElement = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `Time is: ${currentTime}`;

chrome.action.setBadgeText(
  {
    text: "Time",
  },
  () => {
    console.log("Finished setting badge text.");
  }
);
