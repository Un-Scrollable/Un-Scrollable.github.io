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

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const popupImage = document.getElementById("lightbox-image");
  const closeButton = document.getElementById("lightbox-close");

  let previousFocus = null;

  document.querySelectorAll(".slide img").forEach(function (img) {
    img.addEventListener("click", function () {
      previousFocus = document.activeElement;

      popupImage.src = img.currentSrc || img.src;
      popupImage.alt = img.alt || "";

      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");

      document.body.style.overflow = "hidden";

      closeButton.focus();
    });
  });

  function closeLightbox() {
    if (!lightbox.classList.contains("is-open")) return;

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    popupImage.src = "";
    popupImage.alt = "";

    if (previousFocus) {
      previousFocus.focus();
    }
  }

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
});

hljs.highlightAll();
