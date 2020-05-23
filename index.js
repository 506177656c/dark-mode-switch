const cont = document.querySelector('.cont');
const button = document.querySelector('.button');
const bgDark = document.querySelector('.bg-dark');
const bgLight = document.querySelector('.bg-light');
const icon = document.querySelector('.icon');

button.addEventListener('click', e => {
  e.preventDefault();
  if (!bgDark.classList.contains('is-active')) {
    bgDark.classList.add('is-active');
    bgDark.classList.add('index');
    bgLight.classList.remove('index');
    bgLight.classList.remove('is-active');
    icon.src = './sun.svg';
    setTimeout(function(){ 
      cont.classList.add('dark'); 
      cont.classList.remove('light'); 
    }, 350);
  } else {
    bgLight.classList.add('is-active');
    bgLight.classList.add('index');
    bgDark.classList.remove('index');
    bgDark.classList.remove('is-active');
    icon.src = './moon.svg';
    setTimeout(function(){ 
      cont.classList.remove('dark'); 
      cont.classList.add('light'); 
    }, 350);
  }  
});