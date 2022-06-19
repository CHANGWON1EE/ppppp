'use strict';

/* =================================================================================================== */
// < gamestart >

// let gameStart = document.getElementsByTagName('button');
let button = document.querySelectorAll('button');
let popup1, popup2;
let locationX = (screen.width - 300) / 2;
let locationY = (screen.height - 300) / 2;

button[0].addEventListener('click', () => {
    popup1 = open('eventpage.html', '팝업창1', `left=${locationX}px, top=${locationY}px`); 
    popup1.resizeTo(415, 400);
})

button[1].addEventListener('click', () => {
    popup2 = open('loadinggame.html', '팝업창1', `left=${locationX}px, top=${locationY}px`); 
    popup2.resizeTo(400, 400);

    button[1].style.cursor = 'wait'
})

/* =================================================================================================== */
// < .buttonTop >

let buttonTop = document.getElementsByClassName('buttonTop');
let buttonBottom = document.getElementsByClassName('buttonBottom');
// let scrollTop = querySelector('.scrollTop');
let scrollBox = document.querySelector('.scrollBox');

buttonTop[0].addEventListener('click', () => {
    let posY = parseInt(window.scrollY);

    window.scroll(0, 0)

    backScroll(() => window.scroll(0, posY -= 5));
    function backScroll(backSc) {
        let stopTimeout = setInterval(() => {
            backSc();

            if(posY < 0) {
                clearInterval(stopTimeout);
            }
        }, 5);
    }
})

/* =================================================================================================== */
// < .buttonBottom >

buttonBottom[0].addEventListener('click', () => {
    let posY = parseInt(window.scrollY);

    backScroll(() => window.scroll(0, posY += 5));
    function backScroll(backSc) {
        let stopTimeout = setInterval(() => {
            backSc();

            if(posY > window.innerHeight * 2) {
                clearInterval(stopTimeout);
            }
        }, 5);
    }
})

/* =================================================================================================== */
// < calculate posY, scrollY >

document.addEventListener('scroll', () => {
    let posY = parseInt(window.scrollY);

    if (posY > window.innerHeight * .3) {
        buttonTop[0].classList.add('visibility');
    } else {
        buttonTop[0].classList.remove('visibility');
    }

    if (posY > window.innerHeight * 1.3) {
        buttonBottom[0].classList.remove('scrollBar');
    } else {
        buttonBottom[0].classList.add('scrollBar');
    }
});

/* ==================================================================================================== */
// < slideShow >

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    // setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/* ==================================================================================================== */
// < button >

// let img = document.querySelector('.img');
let img = document.querySelectorAll('.mySlides img');
// let button = document.querySelectorAll('button');
let numbertext = document.getElementsByClassName('numbertext');
let text = document.getElementsByClassName('text');
let dot = document.getElementsByClassName('dot');

let i = 1;

/* ==================================================================================================== */
// < left button >

button[2].addEventListener('click', () => {
    if (i > 1) {
        i--;
    } else if (i <= 1) {
        i = img.length;
    }
    
    numbertext[0].textContent = `${i} / ${img.length}`;
    // text[0].textContent = `Caption${i}`;

    dot[i - 1].className += " active";
    dot[i].className = dot[i - 1].className.replace(" active", "");

    // img[0].setAttribute('src', `image/section_image${i}.jpg`);
    img[0].src = `image/section_image${i}.jpg`;
})

/* ==================================================================================================== */
// < right button >

button[3].addEventListener('click', () => {
    if (i < img.length) {
        i++;
    } else if (i >= img.length) {
        i = 1
    }
    numbertext[0].textContent = `${i} / ${img.length}`;
    // text[0].textContent = `Caption${i}`;

    dot[i - 1].className += " active";
    dot[i - 2].className = dot[i - 1].className.replace(" active", "");

    // img[0].setAttribute('src', `image/section_image${i}.jpg`);
    img[0].src = `image/section_image${i}.jpg`;
})

/* =================================================================================================== */
// < clipSlides >

let clipslideIndex = 0;
clipshowSlides();

function clipshowSlides() {
    let i;
    let clipslides = document.getElementsByClassName("clipSlides");
    for (i = 0; i < clipslides.length; i++) {
        clipslides[i].style.display = "none";
    }
    clipslideIndex++;
    if (clipslideIndex > clipslides.length) { clipslideIndex = 1 }
    clipslides[clipslideIndex - 1].style.display = "flex";
    setTimeout(clipshowSlides, 2000);
}

/* =================================================================================================== */