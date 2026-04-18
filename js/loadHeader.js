const scriptUrl = document.currentScript?.src
  ? new URL(document.currentScript.src, window.location.href)
  : new URL(window.location.href);

document.addEventListener("DOMContentLoaded", () => {
  const componentUrl = new URL("../components/header.html", scriptUrl);

  fetch(componentUrl)
    .then((response) => {
      if (!response.ok) throw new Error("Header yuklenemedi");
      return response.text();
    })
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
    })
    .catch((error) => console.error(error));
});