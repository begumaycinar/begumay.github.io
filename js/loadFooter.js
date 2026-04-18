document.addEventListener("DOMContentLoaded", async () => {
  const candidates = ["./components/footer.html", "../components/footer.html", "../../components/footer.html"];

  for (const candidate of candidates) {
    try {
      const response = await fetch(candidate);
      if (!response.ok) {
        continue;
      }

      const data = await response.text();
      document.getElementById("footer-container").innerHTML = data;
      return;
    } catch (error) {
      console.error(error);
    }
  }

  console.error("Footer yuklenemedi");
});