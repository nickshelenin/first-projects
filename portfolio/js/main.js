document.getElementById('banner').scrollIntoView(true)

// function toggle() {
//   const toggleHam = document.querySelector('.nav-ham');
//   const activeElements = document.querySelectorAll('.active-element');

//   toggleHam.addEventListener('click', () => {
//     for (let i = 0; i < activeElements.length; i++) {
//       activeElements[i].classList.toggle('active');
//     }
//   });
// }

//   toggle();




// async function init() {
//   await fetch('./header.html')
//     .then((res) => {
//       return res.text();
//     })
//     .then((data) => {
//       document.querySelector('header').innerHTML = data;
//     });

// }
// init();

// form validation

// const email = document.querySelector('#email-input');
// const message = document.querySelector('#message');
// const name = document.querySelector('#name-input');
// const form = document.querySelector('#form');
// const errorBox = document.querySelector('.error-box');

// form.addEventListener('submit', (e) => {
//   if (email.value === '' || email.value === null) {
//     e.preventDefault();

//     email.style.borderBottom = '1px solid #e31b6d';
//   }

//   if (message.value === '' || message.value === null) {
//     e.preventDefault();

//     message.style.borderBottom = '1px solid #e31b6d';
//     errorBox.style.display = 'block';
//     document.body.style.overflow = 'hidden';

//     window.setTimeout(() => {
//       errorBox.style.display = 'none';
//       document.body.style.overflow = 'visible';
//     }, 5000);
//   }
// });

