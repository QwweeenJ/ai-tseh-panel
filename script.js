const toggle = document.querySelector(".theme-toggle");
const icon = document.querySelector(".theme-toggle__icon");
const label = document.querySelector(".theme-toggle__text");

toggle.addEventListener("click", () => {
  const isFocus = document.body.classList.toggle("is-focus");

  toggle.setAttribute("aria-pressed", String(isFocus));
  icon.textContent = isFocus ? "◐" : "☀";
  label.textContent = isFocus ? "Вернуть светлый режим" : "Сменить настроение";
});
