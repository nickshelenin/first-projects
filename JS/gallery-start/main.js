var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */



  for(i = 0; i < 1; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', '../images/pic1.jpg');
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', function(){
    displayedImage.src = '../images/pic1.jpg'
  })
}

for(i = 0; i < 1; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', '../images/pic2.jpg');
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', function(){
    displayedImage.src = '../images/pic2.jpg'
  })
}

for(i = 0; i < 1; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', '../images/pic3.jpg');
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', function(){
    displayedImage.src = '../images/pic3.jpg'
  })
}

for(i = 0; i < 1; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', '../images/pic4.jpg');
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', function(){
    displayedImage.src = '../images/pic4.jpg'
  })
}

for(i = 0; i < 1; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', '../images/pic5.jpg');
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', function(){
    displayedImage.src = '../images/pic5.jpg'
  })
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function(){

  let btnClass =  btn.getAttribute('class');

  if(btnClass === 'dark'){
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else { 
   (btnClass !== 'dark')  {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
   }

});