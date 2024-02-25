document.addEventListener("DOMContentLoaded", function () {
  let MonButton = document.querySelector("#responsive");

  MonButton.addEventListener("click", () => {
    // Ouvrir une nouvelle fenêtre avec une taille spécifique
    window.open(
      "http://127.0.0.1:5501/index.html",
      "_blank",
      "width=500, height=820"
    );
  });
});
