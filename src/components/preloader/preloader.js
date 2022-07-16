import "./preloader.scss";

window.onload = () => {
  const loadDiv = document.getElementById("preloader");
  const bodyContent = document.getElementById("bodyContent");

  setTimeout(() => {
    bodyContent.style.display = "block";
    loadDiv.remove();
  }, 500);
};
