document.addEventListener("DOMContentLoaded", () => {
  fetch("../components/sidebar.html") // index.html ile aynı root
    .then(response => {
      if (!response.ok) throw new Error("Sidebar yüklenemedi");
      return response.text();
    })
    .then(data => {
      document.getElementById("sidebar-container").innerHTML = data;
    })
    .catch(error => console.error(error));
});