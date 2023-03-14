import "../app.css";
import App from "../App.svelte";
import { initAppManager } from "../lib/app-manager";

const target = document.getElementById("app");

async function render() {
  await initAppManager();

  new App({ target });
}

document.addEventListener("DOMContentLoaded", render);
