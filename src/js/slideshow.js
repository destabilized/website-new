document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".slideshow").forEach((slideshow) => {
    const track = slideshow.querySelector(".slideshow-track");
    const slides = slideshow.querySelectorAll("img");
    const prevBtn = slideshow.querySelector(".prev");
    const nextBtn = slideshow.querySelector(".next");
    let index = 0;

    function resize() {
      const slide = slides[index];
      if (!slide) return;
      const height = slide.getBoundingClientRect().height;
      if (height) slideshow.style.height = `${height}px`;
    }

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
      resize();
    }

    slides.forEach((img) => {
      if (!img.complete) img.addEventListener("load", resize);
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      update();
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      update();
    });

    window.addEventListener("resize", resize);

    update();
  });
});
