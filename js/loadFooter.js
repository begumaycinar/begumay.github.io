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
      const assetBase = candidate.replace("/components/footer.html", "");
      const footerAssets = document.querySelectorAll("#footer-container [data-asset-path]");

      footerAssets.forEach((asset) => {
        const relativePath = asset.getAttribute("data-asset-path");

        if (!relativePath) {
          return;
        }

        asset.setAttribute("src", `${assetBase}/${relativePath}`);
      });
      return;
    } catch (error) {
      console.error(error);
    }
  }

  console.error("Footer yuklenemedi");
});
