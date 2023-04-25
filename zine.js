const images = document.querySelectorAll(".slideshow-image");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showImage(n) {
  images[index].classList.remove("active");
  index = (n + images.length) % images.length;
  images[index].classList.add("active");
}

function nextImage() {
  showImage(index + 1);
}

function prevImage() {
  showImage(index - 1);
}

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);