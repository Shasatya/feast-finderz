function openOverlay() {
  document.body.style.overflow = "hidden";
  document.body.style.userSelect = "none";
  document.getElementById("overlay").style.width = "100%";
  document.getElementsByClassName("toggle-btn")[0].style.fontSize = "0rem";
}

function closeOverlay() {
  document.getElementById("overlay").style.width = "0%";
  document.getElementsByClassName("toggle-btn")[0].style.fontSize = "1.5rem";
}
