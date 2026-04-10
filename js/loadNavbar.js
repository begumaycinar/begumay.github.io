

document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/navbar.html")
    .then((response) => {
      console.log("fetch status:", response.status);
      if (!response.ok) throw new Error("Navbar yüklenemedi: " + response.status);
      return response.text();
    })
    .then((data) => {
      console.log("gelen html:", data);
      const target = document.getElementById("navbar");
      console.log("target:", target);
      target.innerHTML = data;
      console.log("son innerHTML:", target.innerHTML);
    })
    .catch((error) => console.error("navbar hatasi:", error));
});