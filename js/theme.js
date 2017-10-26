'use strict';

var swapbtn = document.getElementById('swapbtn');

function swapStyle() {
  let style = document.getElementById('styles');
  
  if(style.hasAttribute('href') === 'css/styles.css') {
    style.setAttribute('href', 'css/style1.css');
  } 
    else {
        style.setAttribute('href', 'css/style1.css');
    }
  
}

swapbtn.addEventListener('click', swapStyle);
