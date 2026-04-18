document.addEventListener("DOMContentLoaded", async () => {
  const candidates = ["./components/sidebar.html", "../components/sidebar.html", "../../components/sidebar.html"];

  for (const candidate of candidates) {
    try {
      const response = await fetch(candidate);
      if (!response.ok) {
        continue;
      }

      const data = await response.text();
      const componentUrl = new URL(candidate, window.location.href);
      const sideLogoUrl = new URL("../images/side-logo.png", componentUrl);
      const resolvedMarkup = data.replaceAll("{{SIDE_LOGO_URL}}", sideLogoUrl.href);
      document.getElementById("sidebar-container").innerHTML = resolvedMarkup;
      return;
    } catch (error) {
      console.error(error);
    }
  }

  console.error("Sidebar yuklenemedi");
});