document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("navbar");
  if (!target) {
    console.error("Navbar target bulunamadi");
    return;
  }

  const currentUrl = new URL(window.location.href);
  const inPagesGames = currentUrl.pathname.includes("/pages/games/");
  const inPages = currentUrl.pathname.includes("/pages/");
  const prefix = inPagesGames ? "../../" : inPages ? "../" : "./";
  const linkStyle = "color:#fff !important;-webkit-text-fill-color:#fff !important;opacity:1 !important;visibility:visible !important;display:flex;align-items:center;text-decoration:none;padding:0 20px;height:100%;font-size:18px;";

  target.innerHTML = `
    <input type="checkbox" id="navbar-etkin">
    <label for="navbar-etkin" class="navbar-ac">
      <svg class="nav-acik" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </label>
    <label for="navbar-etkin" id="overlay"></label>
    <div class="nav-links">
      <label for="navbar-etkin" class="navbar-kapat">
        <svg class="nav-kapali" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      </label>
      <a class="main-nav" href="${prefix}index.html" style="${linkStyle}">Ana Sayfa</a>
      <a class="about-nav" href="${prefix}pages/about.html" style="${linkStyle}">Hakkında</a>
      <a class="updates-nav" href="${prefix}pages/updates.html" style="${linkStyle}">Güncellemeler</a>
      <a class="contact-nav" href="${prefix}pages/contact.html" style="${linkStyle}">İletişim</a>
      <a class="login-nav" href="${prefix}pages/login.html" style="${linkStyle}">Giriş Yap</a>
    </div>
  `;

  console.log("navbar dogrudan JS ile yüklendi");
});