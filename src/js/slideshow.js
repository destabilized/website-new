document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".slideshow").forEach((slideshow) => {
    const track = slideshow.querySelector(".slideshow-track");
    const slides = slideshow.querySelectorAll("img");
    const prevBtn = slideshow.querySelector(".prev");
    const nextBtn = slideshow.querySelector(".next");
    let index = 0;

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      update();
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      update();
    });

    update();
  });
});