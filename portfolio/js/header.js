function toggle() {
  const toggleHam = document.querySelector('.nav-ham');
  const activeElements = document.querySelectorAll('.active-element');

  toggleHam.addEventListener('click', () => {
    for (let i = 0; i < activeElements.length; i++) {
      activeElements[i].classList.toggle('active');
    }
  });
}




async function init() {
    await fetch('./header.html')
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        document.querySelector('header').innerHTML = data;
      });
    toggle();
  }
  init();