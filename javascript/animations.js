const bio = document.getElementById("bio-img");

bio.addEventListener("mouseover", move);
bio.addEventListener("mouseout", moveBack);

function move() {
  document
    .querySelectorAll(".stack-image-left")
    .forEach(e => (e.style.transform = "translate(-60%, 60%)"));
  document
    .querySelectorAll(".stack-image-right")
    .forEach(e => (e.style.transform = "translate(60%, -60%)"));
}

function moveBack() {
  document
    .querySelectorAll(".stack-image-left")
    .forEach(e => (e.style.transform = ""));
  document
    .querySelectorAll(".stack-image-right")
    .forEach(e => (e.style.transform = ""));
}
