export function renderHeader(active = "") {
  const isActive = (key) => (active === key ? ' aria-current="page"' : "");

  return `
  <header class="site-header">
    <div class="container">
      <nav class="navbar" aria-label="Navegación principal">
        <a class="brand" href="index.html">
          <img src="assets/logo.svg" alt="Fisiophix" />
        </a>

        <div class="nav-links" aria-label="Links principales">
          <a href="sobre-mi.html"${isActive("sobre")}>Sobre mí</a>
          <a href="servicios.html"${isActive("servicios")}>Servicios</a>
          <a href="contacto.html"${isActive("contacto")}>Contacto</a>
        </div>

        <div class="nav-cta">
          <a class="btn btn-primary" href="contacto.html#agendar">Agendar</a>
        </div>

        <!-- Hamburguesa (móvil) -->
        <button
          class="burger"
          id="burger"
          type="button"
          aria-label="Abrir menú"
          aria-controls="mobilePanel"
          aria-expanded="false"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <!-- Panel móvil -->
      <div class="mobile-panel" id="mobilePanel" hidden>
        <a href="sobre-mi.html">Sobre mí</a>
        <a href="servicios.html">Servicios</a>
        <a href="contacto.html">Contacto</a>
        <a class="btn btn-primary" href="contacto.html#agendar">Agendar</a>
      </div>
    </div>
  </header>
  `;
}

export function renderFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <b>Fisiophix</b>
          <div class="small">Fisioterapia con enfoque clínico y seguimiento.</div>
        </div>

        <div>
          <b>Contacto</b>
          <div class="small">
            Tel: <a href="tel:+525513362954">55 13 36 29 54</a><br/>
            Email: <a href="mailto:fisiophix@gmail.com">fisiophix@gmail.com</a><br/>
            Instagram: <a href="https://www.instagram.com/fisiophix"
            target="_blank"
            rel="noopener"
            > @fisiophix 
            </a>

          </div>
        </div>
      </div>

      <div class="small" style="margin-top:14px;">
        © ${year} Fisiophix. Todos los derechos reservados.
      </div>
    </div>
  </footer>`;
}
