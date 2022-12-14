const submitBtn = document.querySelector(".main-section__cta");
const input = document.querySelector(".input_");
const errorMsg = document.querySelector(".main-section__form-error");

submitBtn.addEventListener("click", validateWithRegex);
function validateWithRegex(e) {
  e.preventDefault();
  let inputVal = input.value;
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!inputVal.match(validRegex)) {
    input.classList.add("error-input");
    errorMsg.textContent = "Please provide a valid email address 🥺🥺🥺🥺";
  } else {
    input.classList.remove("error-input");
    input.classList.add("success-input");
    clearInput();
  }
}

function clearInput() {
  setTimeout(() => {
    input.classList.remove("success-input");
    input.value = "";
  }, 3000);
}
