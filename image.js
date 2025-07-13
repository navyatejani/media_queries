const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      img.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function jumpToSlide(e) {
  const index = parseInt(e.target.dataset.index);
  currentIndex = index;
  showImage(currentIndex);
}

nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);
dots.forEach(dot => dot.addEventListener('click', jumpToSlide));
