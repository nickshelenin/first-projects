
  const email = document.querySelector('#email-input');
  const message = document.querySelector('#message');
  const name = document.querySelector('#name-input');
  const form = document.querySelector('#form');
  const errorBox = document.querySelector('.error-box')

form.addEventListener('submit', (e) =>{

  if(email.value === '' || email.value === null){
  e.preventDefault(); 

    email.style.borderBottom = '1px solid #e31b6d';
  }

  if(message.value === '' || message.value === null){
    e.preventDefault();

    message.style.borderBottom = '1px solid #e31b6d';
    errorBox.style.display = 'block';
    document.body.style.overflow = 'hidden';

    window.setTimeout(() => {
        errorBox.style.display = 'none';
        document.body.style.overflow = 'visible';

    }, 5000);
  }







})
































// toggleHam.addEventListener('click', () =>{
// 	for(let activated = 0; activated < activeElements.length; activated++){
//         activeElements[activated].classList.toggle("active");
//    }
// })



// window.onload = function() {
//   document.getElementById('nav-ham').onclick = function(){
//     // toggle();
//     for(let i = 0; i < activeElements.length; i++){
//       activeElements[i].classList.toggle('active')
//     }

//   }
// }



