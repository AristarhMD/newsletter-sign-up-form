const contentContainer = document.querySelector(".container");
const succesSubscriptionContainer =
  document.querySelector(".container-success");
const formEl = document.querySelector(".content-form");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error");

// Success const
const authorEmail = document.querySelector(".subscribed-email");
const dismissBtn = document.querySelector(".dismiss");

formEl.addEventListener("submit", (e) => {
  inputValue = emailInput.value;
  e.preventDefault();

  if (inputValue?.length === 0) {
    e.preventDefault();
    showErrorMessage("Email is required");
  } else if (!inputValue?.includes("@")) {
    e.preventDefault();
    showErrorMessage("Valid email required");
  } else {
    authorEmail.textContent = emailInput.value;
    emailInput.value = "";
    removeError();
    toggleHide();
  }
});

dismissBtn.addEventListener("click", () => {
  toggleHide();
});

function showErrorMessage(text) {
  // Check error message
  if (errorMessage?.classList.contains("hidden")) {
    errorMessage.textContent = text;
    errorMessage.classList.remove("hidden");
  } else {
    errorMessage.textContent = text;
  }

  // Check input if have error class
  !emailInput?.classList.contains("wrong")
    ? emailInput.classList.add("wrong")
    : null;
}

function removeError() {
  emailInput?.classList.remove("wrong");
  errorMessage?.classList.add("hidden");
}

function toggleHide() {
  contentContainer.classList.toggle("hidden");
  succesSubscriptionContainer.classList.toggle("hidden");
}
