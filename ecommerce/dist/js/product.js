// mobile slider

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.querySelectorAll('.product-slide');
  const dots = document.querySelectorAll('.dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active-dot', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active-dot';
}

// accordio

function productAccToggle() {
  const link = document.querySelectorAll('.link');
  const plus = document.querySelectorAll('.plus');
  const submenu = document.querySelectorAll('.submenu');

  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', () => {
      submenu[i].classList.toggle('open');
      plus[i].classList.toggle('open');
    });
  }
}
productAccToggle();

// image gallery

function showDivs() {
  const mainImg = document.querySelector('#main-image');
  const imgs = document.querySelectorAll('.img');
  const imgCont = document.querySelectorAll('.image-container');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', () => {
      mainImg.src = imgs[i].src;
    });
  }

  for (let i = 0; i < imgCont.length; i++) {
    imgCont[i].addEventListener('click', function() {
      const current = document.querySelectorAll('.active');
      current[0].className = current[0].className.replace(' active', '');
      this.className += ' active';
    });
  }
}

showDivs();
