'use strict';

let slideshow_page = document.querySelector('.slideshow_page');
let im = document.querySelector('.im');
let input = document.querySelectorAll('input')
let scrollTop = document.querySelector('.scrollTop')
    
let i = 1;
input[0].addEventListener('click',()=> {
    im.setAttribute('src', `work/main${i}.png`);
    i--;
    if (i < 0) {
        i++;
    } else if (i <= 0) {
        i = 12;
    }
});

input[1].addEventListener('click',()=> {
    im.setAttribute('src', `work/main${i}.png`);
    i++;

    if (i > 13) {
        i--;
    } else if (i >= 13) {
        i = 1;
    }
});
