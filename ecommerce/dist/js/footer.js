function footerAcc() {
  const footerAcc = document.querySelectorAll('.footer-link');

  for (let i = 0; i < footerAcc.length; i++) {
    footerAcc[i].addEventListener('click', () => {
      const footerSubmenu = document.querySelectorAll('.footer-submenu');
      const footerPlus = document.querySelectorAll('.footer-plus');

      footerSubmenu[i].classList.toggle('footer-acc-active');
      footerPlus[i].classList.toggle('footer-acc-active');
    });
  }
}

async function init() {
  await fetch('./footer.html')
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      document.querySelector('footer').innerHTML = data;
    });
    footerAcc();
}

init();
