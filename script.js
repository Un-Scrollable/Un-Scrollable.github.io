// Frecce della galleria: scorrono di una "slide" alla volta
const gallery = document.getElementById("gallery");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function step() {
  const slide = gallery.querySelector(".slide");
  return slide.offsetWidth + 20;
}

prev.addEventListener("click", () => {
  gallery.scrollBy({ left: -step(), behavior: "smooth" });
});

next.addEventListener("click", () => {
  gallery.scrollBy({ left: step(), behavior: "smooth" });
});
