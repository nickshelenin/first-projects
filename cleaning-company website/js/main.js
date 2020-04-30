// switch links

const switchLinks = document.querySelectorAll('.switch-link');
const infoSection = document.querySelectorAll('.info-section');

for (let i = 0; i < switchLinks.length; i++) {
  switchLinks[i].addEventListener('click', (e) => {
    switchLinks.forEach((el) => {
      el.classList.remove('selected-link');
    });

    infoSection.forEach((el) => {
      el.style.display = 'none';
    });

    if (switchLinks[i].classList.contains('switch-link-1')) {
      switchLinks[i].classList.add('selected-link');
      infoSection[i].style.display = 'block';
    }

    if (switchLinks[i].classList.contains('switch-link-2')) {
      switchLinks[i].classList.add('selected-link');
      infoSection[i].style.display = 'block';
    }

    if (switchLinks[i].classList.contains('switch-link-3')) {
      switchLinks[i].classList.add('selected-link');
      infoSection[i].style.display = 'block';
    }
  });
}

// testimonial slider

  let slideIndex = 1;
  showSlides(slideIndex);

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var slides = document.getElementsByClassName('figure');
    var dots = document.getElementsByClassName('testimonial-dot');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' selected', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' selected';
  }
