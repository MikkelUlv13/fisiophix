import { renderHeader, renderFooter } from "./components.js";

function getActivePage() {
  const p = location.pathname.split("/").pop() || "index.html";
  if (p.includes("servicios")) return "servicios";
  if (p.includes("domicilio")) return "domicilio";
  if (p.includes("clinica")) return "clinica";
  if (p.includes("sobre")) return "sobre";
  if (p.includes("contacto")) return "contacto";
  return "";
}

function setupMenu() {
  const burger = document.getElementById("burger");
  const panel = document.getElementById("mobilePanel");
  if (!burger || !panel) return;

  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;
  });
}

function injectLayout() {
  const active = getActivePage();

  const headerSlot = document.getElementById("siteHeader");
  const footerSlot = document.getElementById("siteFooter");

  if (headerSlot) headerSlot.innerHTML = renderHeader(active);
  if (footerSlot) footerSlot.innerHTML = renderFooter();

  setupMenu();
}

function injectWhatsApp() {
  const phone = "525513362954"; // +52 55 13 36 29 54
  const msg = encodeURIComponent("Hola, me gustaría agendar una valoración de fisioterapia. ¿Me apoyas con disponibilidad?");
  const a = document.createElement("a");
  a.className = "whatsapp";
  a.href = `https://wa.me/${phone}?text=${msg}`;
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = "WhatsApp";
  document.body.appendChild(a);
}

document.addEventListener("DOMContentLoaded", () => {
  injectLayout();
  injectWhatsApp();
});
