const toggle = document.querySelector(".theme-toggle");
const icon = document.querySelector(".theme-toggle__icon");
const label = document.querySelector(".theme-toggle__text");
const stepButtons = document.querySelectorAll(".step-button");
const progressCount = document.querySelector(".steps-progress__count");

toggle.addEventListener("click", () => {
  const isFocus = document.body.classList.toggle("is-focus");

  toggle.setAttribute("aria-pressed", String(isFocus));
  icon.textContent = isFocus ? "◐" : "☀";
  label.textContent = isFocus ? "Вернуть светлый режим" : "Сменить настроение";
});

function updateProgress() {
  const completed = document.querySelectorAll('.step-button[aria-pressed="true"]').length;
  progressCount.textContent = String(completed);
}

stepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isDone = button.getAttribute("aria-pressed") === "true";

    button.setAttribute("aria-pressed", String(!isDone));
    updateProgress();
  });
});
