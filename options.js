const nameInput = document.getElementById("input_name");
const saveInput = document.getElementById("save_input");
saveInput.addEventListener("click", () => {
  const name = nameInput.value;
  console.log("before storage");
  chrome.storage.sync.set(
    {
      name: name,
    },
    () => {
      console.log(`name is set to ${name}`);
      chrome.action.setBadgeText(
        {
          text: name,
        },
        () => {
          console.log(`badget is set to ${name}`);
        }
      );
    }
  );
});
