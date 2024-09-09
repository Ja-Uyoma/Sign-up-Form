const password: HTMLInputElement = document.querySelector("#password")!;
const confirm: HTMLInputElement = document.querySelector("#confirm-password")!;
const errMsg: HTMLSpanElement = document.querySelector("div > label > span")!;

const validatePasswords = () => {
  const isValid =
    password.value !== "" &&
    confirm.value !== "" &&
    password.value === confirm.value;

  if (!isValid) {
    password.classList.add("border-red-500");
    confirm.classList.add("border-red-500");
    errMsg.textContent = "* Passwords do not match";
  } else {
    password.classList.remove("border-red-500");
    confirm.classList.remove("border-red-500");
  }
};

confirm.addEventListener("blur", () => {
  validatePasswords();
});
