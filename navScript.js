function openOverlay() {
  document.getElementById("overlay").style.width = "100%";
  document.getElementsByClassName("toggle-btn")[0].style.fontSize = "0rem";
}

function closeOverlay() {
  document.getElementById("overlay").style.width = "0%";
  document.getElementsByClassName("toggle-btn")[0].style.fontSize = "1.5rem";
}
