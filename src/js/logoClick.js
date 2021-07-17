import { refs } from "./refs.js";

refs.logo.addEventListener("click", onLogoClick);

async function onLogoClick() {
  window.location.reload();
}
