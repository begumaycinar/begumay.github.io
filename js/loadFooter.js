document.addEventListener("DOMContentLoaded", () => {
  fetch("/begumay/components/footer.html")
    .then(response => {
      if (!response.ok) throw new Error("Footer yüklenemedi");
      return response.text();
    })
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch(error => console.error(error));
});