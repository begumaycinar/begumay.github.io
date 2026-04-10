document.addEventListener("DOMContentLoaded", () => {
  fetch("../components/header.html") // index.html ile aynı root
    .then(response => {
      if (!response.ok) throw new Error("Header yüklenemedi");
      return response.text();
    })
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
    })
    .catch(error => console.error(error));
});