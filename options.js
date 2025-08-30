const nameInput = document.getElementById("input_name");
const saveInput = document.getElementById("save_input");
saveInput.addEventListener("click", () => {
  console.log(nameInput.value);
});
