const contentContainer = document.querySelector(".container");
const succesSubscriptionContainer =
  document.querySelector(".container-success");
const formEl = document.querySelector(".content-form");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error");

formEl.addEventListener("submit", (e) => {
  inputValue = emailInput.value;
  e.preventDefault();

  if (inputValue?.length === 0) {
    e.preventDefault();
    showErrorMessage("Email is required");
    applyErrorInput();
  } else if (!inputValue?.includes("@")) {
    e.preventDefault();
    showErrorMessage("Valid email required");
    applyErrorInput();
  } else {
    emailInput.value = "";
    removeError();
    contentContainer.classList.toggle("hidden");
    succesSubscriptionContainer.classList.toggle("hidden");
  }
});

function showErrorMessage(text) {
  if (errorMessage?.classList.contains("hidden")) {
    errorMessage.textContent = text;
    errorMessage.classList.remove("hidden");
  } else {
    errorMessage.textContent = text;
  }
}

function applyErrorInput() {
  !emailInput?.classList.contains("wrong")
    ? emailInput.classList.add("wrong")
    : null;
}

function removeError() {
  emailInput?.classList.remove("wrong");
  errorMessage?.classList.add("hidden");
}
