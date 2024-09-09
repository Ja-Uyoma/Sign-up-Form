const password: HTMLInputElement = document.querySelector("#password")!;
const confirm: HTMLInputElement = document.querySelector("#confirm-password")!;

const validatePasswords = () => {
  const isValid =
    password.value !== "" &&
    confirm.value !== "" &&
    password.value === confirm.value;

  if (!isValid) {
    password.classList.add("border-red-500");
    confirm.classList.add("border-red-500");
  }
};

confirm.addEventListener("blur", () => {
  validatePasswords();
});
