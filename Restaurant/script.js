const toggleNav = document.querySelector('#nav-ham');
const navLinks = document.querySelector('.nav-links');
const activeElements = document.querySelectorAll('.active-element')
toggleNav.addEventListener('click', () =>{

    for(let activated = 0; activated < activeElements.length; activated++){
        activeElements[activated].classList.toggle("active");
   }
})

let menuDescription = document.querySelectorAll('.menu-description');
let menuTitle = document.querySelectorAll('.food-title');

for(let i = 0; i < menuTitle.length; i++){

    menuTitle[i].addEventListener('click', () =>{
        menuDescription[i].classList.toggle('active-food');
    })

}