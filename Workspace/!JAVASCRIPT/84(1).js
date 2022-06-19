'use strict';

let img_container = document.querySelectorAll('.main_container .slide_list li');
let button = document.querySelectorAll('.main_container a');
let indexEnd = img_container.length - 1;
let current_index = 0;

/* ==================================================================================================== */
// < dot >

let pager = document.querySelector('.pager');

for (let i = 0; i < img_container.length; i++) {          // 화면에 dot을 표시하기 위해 반복문 활용
    pager.innerHTML += '<a href ="#" class="dot"></a>';   // dot을 연속적으로 출력하기 위해 문자열 '결합(+=)'을 활용 *중요
}

let dot = document.querySelectorAll('.pager a');

dot[current_index].classList.add('active');               // 화면을 처음 로딩했을 때 첫 번째 dot에 active 효과 적용

for (let i = 0; i < img_container.length; i++) {          // img_container 길이 만큼 반복
    dot[i].addEventListener('click', function () {
        if (i != current_index) {                         // 같은 dot을 눌렀을 때 아무 변화도 없어야 하기에 '!=' 적용
            if (i > current_index) {                      // i(인덱스)가 current_index(현재 인덱스)보다 크다면
                clickForRight(i);                         // 오른쪽 방향으로 이동하는 로직 적용
            } else {                                      // i(인덱스)가 current_index(현재 인덱스)보다 작다면
                clickForLeft(i);                          // 왼쪽 방향으로 이동하는 로직 적용
            }
        }
    });
}

function dotActive(next_index) {                          // dot을 활성화 시켜줄 기능을 함수에 적용
    dot[current_index].classList.remove('active');        // current_index(현재 선택된 인덱스)의 'active' 클래스를 삭제하고,
    dot[next_index].classList.add('active');              // next_index(다음에 선택할 인덱스)에 'active' 클래스를 적용
}

/* ==================================================================================================== */
// < left button >

button[0].addEventListener('click', function () {
    clickForLeft(current_index - 1);                      // *중요: 슬라이드 이동 시 이전 요소는 현재 인덱스의 -1 임에 주의
})

function clickForLeft (previous_index) {                  // *중요: 매개 변수에 previous_index(이전 인덱스)를 적용
    img_container[previous_index].style.left = '-100%';   // 이전 인덱스를 왼쪽(left 기준 -100%)으로 이동

    setTimeout(() => {                                    // transition과 시간차를 동시에 적용시켜 매끄럽고 자연스럽게 이동 시키기 위한 기능 저장
        dotActive(previous_index);                        // dot 활성화 함수 호출 *주의: 매개 변수에 previous_index(이전 인덱스)를 적용

        img_container[current_index].style.left = '100%'; // 현재 인덱스를 왼쪽(left 기준 100%)으로 이동
        img_container[current_index].style.opacity = 0;   // 이동하며 더 이상 보이지 않게 opacity = 0 적용

        img_container[previous_index].style.left = 0;     // 이전 인덱스를 slide frame에 위치시키기 위해 left = 0 적용
        img_container[previous_index].style.opacity = 1;  // left = -100%에서 left = 0으로 자연스럽게 드러나게 하기 위해 opacity = 1 적용
        
        current_index = previous_index;                   // 이전값을 현재값에 저장 => 인덱스(위치값) 저장

        checkStartEnd();                                  // 버튼 함수 호출
    }, 200);                                              // 0.2 second
}

/* ==================================================================================================== */
// < right button >

button[1].addEventListener('click', function () {
    // clickForRight();
    clickForRight(current_index + 1);                     // *중요: 슬라이드 이동 시 다음 요소는 현재 인덱스의 +1 임에 주의
})

function clickForRight (next_index) {                     // *중요: 매개 변수에 next_index(이전 인덱스)를 적용
    img_container[current_index].style.left = '-100%';    // 현재 인덱스를 왼쪽(left 기준 -100%)으로 이동
    img_container[current_index].style.opacity = 0;       // 이동과 동시에 더 이상 보이지 않게 opacity = 0 적용
    
    img_container[next_index].style.left = 0;             // 다음 요소(current_index + 1)에 해당하는 요소를 slide frame에 위치시키기 위해 left = 0 적용
    img_container[next_index].style.opacity = 1;          // left = 100%에서 left = 0으로 자연스럽게 드러나게 하기 위해 opacity = 1 적용

    dotActive(next_index);                                // dot 활성화 함수 호출 *주의: 매개 변수에 previous_index(이전 인덱스)를 적용

    setTimeout(() => {
        img_container[current_index].style.left = '100%'; // 현재 인덱스를 왼쪽(left 기준 100%)으로 이동 
        
        current_index = next_index;                       // 다음값을 현재값에 저장 => 인덱스(위치값) 저장

        checkStartEnd();                                  // 버튼 함수 호출
    }, 700);                                              // 0.7 second
}

/* ==================================================================================================== */
// < checkStartEnd >

function checkStartEnd() {
    if (current_index <= 0) {                             // current_index(현재 인덱스가) 0보다 작거나 같으면
        button[0].classList.add('nonVisible');            // 'nonVisible' 클래스 추가 -> 화면상에서 보이지 않게 적용
    } else {
        button[0].classList.remove('nonVisible');         // 'nonVisible' 클래스 제거 -> 화면상에서 보이게 적용
    }

    if (current_index >= indexEnd) {                      // current_index(현재 인덱스가) indexEnd 보다 크거나 같으면
        button[1].classList.add('nonVisible');            // 'nonVisible' 클래스 추가 -> 화면상에서 보이지 않게 적용
    } else {
        button[1].classList.remove('nonVisible');         // 'nonVisible' 클래스 제거 -> 화면상에서 보이게 적용
    }
}

/* ==================================================================================================== */
// < mouseover >

let img_box = document.querySelector('.slide_list');      // img_box => img를 감싸고 있는 img frame
let auto_Slide;                                           // *중요: clearInterval의 매개변수로 사용하기 위해 전역 변수로 지정

img_box.addEventListener('mouseover', function () {
        auto_Slide = setInterval(() => {
        
        // let current_idx = current_index + 1;           // 좋지 않은 방법
        // current_idx = current_idx % dot.length;
        // clickForRight(current_idx);

        clickForRight((current_index + 1) % dot.length);  // 더 나은 방법 => 나머지 구하는 식(현재 인덱스 + 1 % 요소의 길이)
        
        // 1. 현재 인덱스에 + 1 
        // 2. 해당 값을 img(dot).length로 나누어 나머지를 구하고 전달
    }, 2000);
})

/* ==================================================================================================== */
// < mouseover >

img_box.addEventListener('mouseout', function () {
    clearInterval(auto_Slide);                            // clearInterval(매개변수) auto_Slide 적용 => 'auto_Slide = setInerval' 해제
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




