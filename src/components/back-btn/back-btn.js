import "./back-btn.scss";

window.onload = () => {
  const backBtn = document.getElementById("back-btn");
  backBtn.onclick = () => {
    history.back();
  };
};
