export function renderHeader(active = "") {
  return `
  <header class="site-header">
    <div class="container">
      <nav class="navbar" aria-label="Navegación principal">
        <a class="brand" href="index.html">
          <img src="assets/logo.svg" alt="Fisiophix" />
        </a>

        <div class="nav-links">
          <a href="sobre-mi.html"${active==="sobre" ? ' style="color:var(--brand)"' : ""}>Sobre mí</a>
          <a href="servicios.html"${active==="servicios" ? ' style="color:var(--brand)"' : ""}>Servicios</a>
          <a href="contacto.html"${active==="contacto" ? ' style="color:var(--brand)"' : ""}>Contacto</a>
        </div>

        <div class="nav-cta">
          <a class="btn btn-primary" href="contacto.html#agendar">Agendar valoración</a>
        </div>

        <button class="burger" id="burger" aria-label="Abrir menú" aria-expanded="false">
          ☰
        </button>
      </nav>

      <div class="mobile-panel" id="mobilePanel" hidden>
        <div class="links">
          <a href="servicios.html">Servicios</a>
          <a href="sobre-mi.html">Sobre mí</a>
          <a href="contacto.html">Contacto</a>
          <a class="btn btn-primary" href="contacto.html#agendar">Agendar valoración</a>
        </div>
      </div>
    </div>
  </header>`;
}

export function renderFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <h4>FisioPhix</h4>
          <div class="small">
            Atención en consultorio ubicado en Médica Taxqueña, Alcaldía Coyoacán, CDMX.<br/>
            Con enfoque clínico, uso de tecnología y planes personalizados.
          </div>
        </div>

        <div>
          <h4>Secciones</h4>
          <div class="small" style="display:grid; gap:6px;">
            <a href="servicios.html">Servicios</a>
            <a href="contacto.html">Contacto</a>
          </div>
        </div>

        <div>
          <h4>Contacto</h4>
          <div class="small">
            Tel: <a href="tel:+525513362954">55 13 36 29 54</a><br/>
            Email: <a href="mailto:fisioterapialuviano@hotmail.com">fisioterapialuviano@hotmail.com</a>
          </div>
        </div>
      </div>

      <div class="small" style="margin-top:14px;">
        © ${year} FisioPhix. Todos los derechos reservados.
      </div>
    </div>
  </footer>`;
}
