let slideIndex = 1;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const counter = document.querySelector('.counter');

  if (index < 0) {
        slideIndex = slides.length - 1;
      } else if (index >= slides.length) {
        slideIndex = 0;
      } else {
        slideIndex = index;
      }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${100 * (slideIndex - 1)}%)`;
  }

  counter.textContent = `${slideIndex} / ${slides.length}`;
}

function nextSlideAuto() {
  showSlide(slideIndex += 1);
}

function startAutoSlide() {
  setInterval(nextSlideAuto, 4000); // Вызываем функцию переключения слайдов каждые 5 секунд
}
startAutoSlide(); // Запуск автоматического листания при загрузке страницы


function prevSlide() {
  showSlide(slideIndex -= 1);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

document.querySelector('.prev-btn').addEventListener('click', prevSlide);
document.querySelector('.next-btn').addEventListener('click', nextSlide);

showSlide(slideIndex);

  