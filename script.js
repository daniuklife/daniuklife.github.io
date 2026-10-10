const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
    mainNav.classList.toggle("is-open", !isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const business = String(data.get("business") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    // IMPORTANT : remplacez cette adresse par l'adresse professionnelle Greenstar.
    const recipient = "makiwh0fr@gmail.com";
    const subject = encodeURIComponent(`Demande Greenstar — ${service}`);
    const body = encodeURIComponent(
      `Bonjour Greenstar,\n\nJe vous contacte au sujet de : ${service}\n\nNom : ${name}\nEntreprise : ${business || "Non renseignée"}\nEmail : ${email}\n\nMon besoin :\n${message}\n\nCordialement,\n${name}`
    );

    if (feedback) {
      feedback.textContent = "Votre application email va s'ouvrir. Vérifiez l'adresse de destination avant l'envoi.";
    }
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
