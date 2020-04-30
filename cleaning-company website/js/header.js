function hamToggle() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNavLinks = document.querySelector('.mobile-nav-links');
  const services = document.getElementById('mobile-services');
  const submenu = document.querySelector('.submenu');
  const bars = document.querySelectorAll('.bar');
  const rightArrow = document.querySelector('.right-arrow');

  hamburger.addEventListener('click', () => {
    bars.forEach((item) => {
      item.classList.toggle('open');
    });

    mobileNavLinks.classList.toggle('ham-clicked');
  });

  services.addEventListener('click', () => {
    submenu.classList.toggle('menu-clicked');
    rightArrow.classList.toggle('menu-clicked');
  });
}

async function getHeader() {
  await fetch('./header.html')
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      document.querySelector('header').innerHTML = data;
    });
  hamToggle();
}

getHeader();
