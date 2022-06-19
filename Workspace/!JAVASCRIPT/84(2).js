'use strict';

let img_container = document.querySelectorAll('.main_container .slide_list li');
let button = document.querySelectorAll('.main_container a');
let indexEnd = img_container.length - 1;
let current_index = 0;

/* ==================================================================================================== */
// < dot >

let pager = document.querySelector('.pager');

for (let i = 0; i < img_container.length; i++) {
    pager.innerHTML += '<a href ="#" class="dot"></a>';
}

let dot = document.querySelectorAll('.pager a');

dot[current_index].classList.add('active');

for (let i = 0; i < img_container.length; i++) {
    dot[i].addEventListener('click', function () {
        if (i != current_index) {
            if (i > current_index) {
                clickForRight(i);
            } else {
                clickForLeft(i);
            }
        }
    });
}

function dotActive(next_index) {
    dot[current_index].classList.remove('active');
    dot[next_index].classList.add('active');
}

/* ==================================================================================================== */
// < left button >

button[0].addEventListener('click', function () {
    clickForLeft(current_index - 1);
})

function clickForLeft (previous_index) {
    img_container[previous_index].style.left = '-100%';

    setTimeout(() => {
        dotActive(previous_index);

        img_container[current_index].style.left = '100%';

        img_container[previous_index].style.left = 0;
        img_container[previous_index].classList.add('animated');
        
        current_index = previous_index;

        checkStartEnd();
    }, 200);
}

/* ==================================================================================================== */
// < right button >

button[1].addEventListener('click', function () {
    clickForRight(current_index + 1);
})

function clickForRight (next_index) {
    img_container[current_index].style.left = '-100%';
    img_container[current_index].classList.add('animated');
    
    img_container[next_index].style.left = 0;
    img_container[next_index].classList.add('animated');

    dotActive(next_index);

    setTimeout(() => {
        img_container[current_index].style.left = '100%';
        img_container[current_index].classList.remove('animated');
        
        current_index = next_index;

        checkStartEnd();
    }, 700);
}

/* ==================================================================================================== */
// < checkStartEnd >

function checkStartEnd() {
    if (current_index <= 0) {
        button[0].classList.add('nonVisible');
    } else {
        button[0].classList.remove('nonVisible');
    }

    if (current_index >= indexEnd) {
        button[1].classList.add('nonVisible');
    } else {
        button[1].classList.remove('nonVisible');
    }
}

/* ==================================================================================================== */
// < mouseover >

let img_box = document.querySelector('.slide_list');
let auto_Slide;
img_box.addEventListener('mouseover', function () {
        auto_Slide = setInterval(() => {
        
        clickForRight((current_index + 1) % dot.length);

        // 현재 인덱스에 + 1을 해
        // 나머지를 구하고 전달해
    }, 2000);
})

/* ==================================================================================================== */
// < mouseover >

img_box.addEventListener('mouseout', function () {
    clearInterval(auto_Slide);
})

































// 'use strict';

// let img_container = document.querySelectorAll('.main_container .slide_list li'),
//   pager = document.querySelector('.pager'),
//   btn = document.querySelectorAll('.main_container a');

// let indexEnd = img_container.length - 1;
// let current_idx = 0;

// for (let i = 0; i < img_container.length; i++) {
//   pager.innerHTML += '<a href=""></a>';
// }

// btn[1].addEventListener('click', function () {
//   img_container[current_idx].style.left = '-100%';
//   img_container[current_idx].style.opacity = 0;
//   img_container[current_idx + 1].style.left = 0;
//   img_container[current_idx + 1].style.opacity = 1;

//   setTimeout(function () {
//     img_container[current_idx].style.left = '100%';

//     current_idx++;

//     btn[0].classList.remove('nonVisible');
//     if (current_idx >= indexEnd) btn[1].classList.add('nonVisible');
//   }, 700);
// });

// btn[0].addEventListener('click', function () {
//   img_container[current_idx - 1].style.left = '-100%';

//   setTimeout(function () {
//     img_container[current_idx].style.left = '100%';
//     img_container[current_idx].style.opacity = 0;

//     img_container[current_idx - 1].style.left = 0;
//     img_container[current_idx - 1].style.opacity = 1;

//     current_idx--;

//     btn[1].classList.remove('nonVisible');
//     if (current_idx <= 0) btn[0].classList.add('nonVisible');
//   }, 700)
// });




