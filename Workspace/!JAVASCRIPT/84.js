'use strict';

let img_container = document.querySelectorAll('.main_container .slide_list li');
let button = document.querySelectorAll('.main_container a');
let indexEnd = img_container.length - 1;
let current_index = 0;

/* ==================================================================================================== */
// < dot >

let pager = document.querySelector('.pager');

for (let i = 0; i < img_container.length; i++) {        // 화면에 dot을 표시하기 위해 반복문 활용
    pager.innerHTML += '<a href ="#" class="dot"></a>'; // dot을 연속적으로 출력하기 위해 문자열 '결합(+=)'을 활용 *중요
}

let dot = document.querySelectorAll('.pager a');

dot[current_index].classList.add('active');             // 화면을 처음 로딩했을 때 첫 번째 dot에 active 효과 적용

for (let i = 0; i < img_container.length; i++) {        // img_container 길이 만큼 반복
    dot[i].addEventListener('click', function () {
        if (i != current_index) {                       // 같은 dot을 눌렀을 때 아무 변화도 없어야 하기에 '!=' 적용
            if (i > current_index) {                    // i(인덱스)가 current_index(현재 인덱스)보다 크다면
                clickForRight(i);                       // 오른쪽 방향으로 이동하는 로직 적용
            } else {                                    // i(인덱스)가 current_index(현재 인덱스)보다 작다면
                clickForLeft(i);                        // 왼쪽 방향으로 이동하는 로직 적용
            }
        }
    });
}

function dotActive(next_index) {                        // dot을 활성화 시켜줄 기능을 함수에 적용
    dot[current_index].classList.remove('active');      // current_index(현재 선택된 인덱스)의 'active' 클래스를 삭제하고,
    dot[next_index].classList.add('active');            // next_index(다음에 선택할 인덱스)에 'active' 클래스를 적용
}

/* ==================================================================================================== */
// < left button >

button[0].addEventListener('click', function () {
    // clickForLeft();
    clickForLeft(current_index - 1);
})

function clickForLeft (previous_index) {
    // img_container[current_index - 1].style.left = '-100%';
    img_container[previous_index].style.left = '-100%';
    
    // dot[current_index].classList.remove('active');
    // dot[current_index - 1].classList.add('active');

    setTimeout(() => {
        dotActive(previous_index);

        img_container[current_index].style.left = '100%';
        img_container[current_index].style.opacity = 0;

        // img_container[current_index - 1].style.left = 0;
        // img_container[current_index - 1].style.opacity = 1;
        img_container[previous_index].style.left = 0;
        img_container[previous_index].style.opacity = 1;
        
        // current_index--;
        current_index = previous_index;

        // button[1].classList.remove('nonVisible');
        // if (current_index <= 0) button[0].classList.add('nonVisible');
        checkStartEnd();
    }, 200);
}

/* ==================================================================================================== */
// < right button >

button[1].addEventListener('click', function () {
    // clickForRight();
    clickForRight(current_index + 1);
})

function clickForRight (next_index) {
    img_container[current_index].style.left = '-100%';
    img_container[current_index].style.opacity = 0;
    
    // img_container[current_index + 1].style.left = 0;
    // img_container[current_index + 1].style.opacity = 1;
    img_container[next_index].style.left = 0;
    img_container[next_index].style.opacity = 1;

    dotActive(next_index);
    setTimeout(() => {
        img_container[current_index].style.left = '100%';
        
        // current_index++;
        current_index = next_index;

        // button[0].classList.remove('nonVisible');
        // if (current_index >= indexEnd) button[1].classList.add('nonVisible');
        checkStartEnd();
        
        // dot[current_index - 1].classList.remove('active');
        // dot[current_index].classList.add('active');
        
        // next_index = current_index % dot.length;
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
        
        // let current_idx = current_index + 1;
        // current_idx = current_idx % dot.length;
        // clickForRight(current_idx);

        clickForRight((current_index + 1) % dot.length);
        console.log(current_index);
        // console.log(current_idx);
        
        // button[0].classList.add('nonVisible');
        // if (current_index >= indexEnd) button[1].classList.remove('nonVisible');

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






// /* ==================================================================================================== */
// // < 실패작 - 나중에 다시 해볼 것>

// let slide_list_li = document.querySelectorAll('.slide_list li');
// let button = document.getElementsByTagName('a');
// // let previous = slide_list_li[0];
// let previous_index = 0;
// let i = 0;

// /* ==================================================================================================== */
// // < left button >

// button[0].addEventListener('click', function () {
//     if(i > 0) {
//         i--;
//         previous_index = i;
//         // previous = slide_list_li[i];
//         slide_list_li[previous_index].style.left = '-100%';
//         // previous.style.left = '-100%'
//         slide_list_li[previous_index].style.opacity = 1;
//         // previous.style.opacity = 1;
//         setTimeout(() => {
//             slide_list_li[previous_index].style.left = 0;
//             // previous.style.left = 0;
//             slide_list_li[i + 1].style.left = '100%';
//             slide_list_li[i + 1].style.opacity = 0;
//         }, 1000);
//     }    

//     if (i <= 0) {
//         this.classList.add('nonVisible')
//     } else {
//         button[1].classList.remove('nonVisible')       
//     }

//     dots[i].className += " active";
//     dots[i + 1].className = dots[i].className.replace(" active", "");
// })

// /* ==================================================================================================== */
// // < right button >

// button[1].addEventListener('click', function () {
//     if(i < slide_list_li.length - 1) {
//         i++;
//         slide_list_li[previous_index].style.left = '-100%';
//         // previous.style.left = '-100%';
//         slide_list_li[i].style.left = 0;
//         slide_list_li[i].style.opacity = 1;
//         setTimeout(() => {
//             slide_list_li[previous_index].style.left = '100%';
//             // previous.style.left = '100%';
//             slide_list_li[previous_index].style.opacity = 0;
//             // previous.style.opacity = 0;
//             // slide_list_li[previous_index] = slide_list_li[i];
//             previous_index = i;
//             // previous = slide_list_li[i];
//         }, 1000);
//     }

//     if (i >= slide_list_li.length - 1) {
//         this.classList.add('nonVisible')
//     } else {
//         button[0].classList.remove('nonVisible')       
//     }

//     dots[i].className += " active";
//     dots[i - 1].className = dots[i].className.replace(" active", "");
    
// })

// /* ==================================================================================================== */
// // < dots >

// let pager = document.querySelector('.pager');

// for (let i = 0; i < slide_list_li.length; i++) {
//     pager.innerHTML += '<a href ="#" class="dots"></a>';
//     // dots[previous_index].className += ' active';
//     // dots[0].className += ' active';
// }
    
// let dots = document.getElementsByClassName('dots');
// // let present_index = i;

// dots[previous_index].classList.add('active');

// for (let i = 0; i < slide_list_li.length; i++) {
//     dots[i].addEventListener('click', function () {
//         dots[previous_index].classList.remove('active');
//         dots[i].classList.add('active');
//         previous_index = i;
        
        
//         // if (i > previous_index) {
//         //     slide_list_li[previous_index].style.left = '-100%';
//         //     slide_list_li[i].style.left = 0;
//         //     slide_list_li[i].style.opacity = 1;
            
//         //     setTimeout(() => {
//         //         slide_list_li[previous_index].style.left = '100%';
//         //         slide_list_li[previous_index].style.opacity = 0;
//         //         previous_index = i;
//         //     }, 1000);
//         // } else {
//         //     previous_index = i;
//         //     slide_list_li[previous_index].style.left = '-100%';
//         //     slide_list_li[previous_index].style.opacity = 1;
            
//         //     setTimeout(() => {
//         //         slide_list_li[previous_index].style.left = 0;
//         //         slide_list_li[i + 1].style.left = '100%';
//         //         slide_list_li[i + 1].style.opacity = 0;
//         //     }, 1000);
//         // }
//     })
// }



// /* 
// 0. 인덱스는 계속해서 바뀐다 previous_index(이전) = this(현재)
// 1. 인덱스 현재 위치에 따라 판단
// 2. 왼쪽 버튼 로직을 사용할지, 오른쪽 버튼 로직을 사용할지
// 3. 로직 연동
// */

















// /* ==================================================================================================== */
// // < mouseover >

// let slide_list = document.querySelector('.slide_list');
// let slide_img = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg'];

// // for (let i = 0; i < slide_list_li.length; i++) {
// //     slide_list_li[i].children[0].setAttribute('src', `/image/${slide_img[i]}`);
// // }

// // slide_list.addEventListener('mouseover', function () {
// //     let auto_Slide = setInterval(() => {
// //         let idx = i % slide_list_li.length;
   
// //         slide_list_li[idx].style.opacity = 0;
// //         slide_list_li[idx].style.left = '100%';

// //         i++;

// //         idx = i % slide_list_li.length;
// //         slide_list_li[idx].style.opacity = 1;
// //         slide_list_li[idx].style.left = 0;

// //         dots[i].className += " active";
// //         dots[i - 1].className = dots[i].className.replace(" active", "");
// //         // if (i >= slide_list_li.length) {
// //         // }
// //     }, 4000);  
// // })

// // slide_list.addEventListener('mouseout', function () {
// //     setTimeout(() => clearInterval(auto_Slide), Mouseout);
// // });

