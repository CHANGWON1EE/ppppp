'use strict';

// parent(부모 요소) 와 children(자식 요소) 활용해볼 것!

let list = document.getElementsByClassName('service_list');
let btn_collapseAll = document.querySelector('.btn_collapseAll');
// querySelector, querySelectorAll => 선택자 형식을 문자 그대로 출력
let beforeList = list[0];

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() { // 클릭을 통해 hidden 클래스 추가 및 textContent 변경
        btn();                                     // function btn() 호출
/* ==================================================================================================== */
        this.classList.remove('hidden');           // 클릭을 통해 hidden 클래수 제거 및 textContent 변경
        this.children[0].textContent = this.children[0].textContent.replace('+', '-'); // 유연한 생각
        // this.children[0].textContent = '- Lorem ipsum dolor sit amet.';             // 무식한 방법
        beforeList = this; // 직전값을 기억하기 위해 다음과 같은 식을 꼭 써야함!
    })
}
// 순서를 바꾸면 자기 자신이 이전 요소가 되기 때문에 순서를 지키는 것이 중요
/* ==================================================================================================== */

btn_collapseAll.addEventListener('click', () => { // 클릭을 통해 hidden 클래스 추가 및 textContent 변경
    btn();                                        // 반복구문에 있는 동작과 같으므로 함수를 이용하여 중복을 최소화
})

/* ==================================================================================================== */
// 문자열은 상수이므로 원본을 변경할 수 없다. => 즉, 문자열 원본을 받아 원본에 새롭게 적용해야한다.

function btn() {
    beforeList.classList.add('hidden');
    beforeList.children[0].textContent = beforeList.children[0].textContent.replace('-', '+'); // 유연한 생각
    // beforeList.children[0].textContent = '+ Lorem ipsum dolor sit amet.';                   // 무식한 방법
}

/* ==================================================================================================== */
/* < 실패작 > */

// btn.addEventListener('click', () => {
//     for (let i = 0; i < list.length; i++) {
//         list[i].classList.add('hidden');
//         service_header[i].textContent = '+ Lorem ipsum dolor sit amet.';
//     }
// })


// list[0].addEventListener('click', function() {
//     list[0].children[0].textContent = list[1].children[0].textContent;
// })

/* ==================================================================================================== */





















/* ==================================================================================================== */
/* < 연습장 - 구조 파악 > */
// list[0].addEventListener('click', () => {
//     list[0].classList.add('hidden')
//     list[1].classList.add('hidden')
//     list[2].classList.add('hidden')
//     list[3].classList.add('hidden')

//     list[0].children[1].textContent = '- Lorem ipsum dolor sit amet.'
//     // service_header[0].textContent = '- Lorem ipsum dolor sit amet.';
//     service_header[1].textContent = '+ Lorem ipsum dolor sit amet.';
//     service_header[2].textContent = '+ Lorem ipsum dolor sit amet.';
//     service_header[3].textContent = '+ Lorem ipsum dolor sit amet.';
// })

// list[1].addEventListener('click', () => {
//     list[0].classList.add('hidden')
//     list[1].classList.remove('hidden')
//     list[2].classList.add('hidden')
//     list[3].classList.add('hidden')
//     // list[1].children[0].textContent = '- Lorem ipsum dolor sit amet.'
//     service_header[0].textContent = '+ Lorem ipsum dolor sit amet.';
//     service_header[1].textContent = '- Lorem ipsum dolor sit amet.';
//     service_header[2].textContent = '+ Lorem ipsum dolor sit amet.';
//     service_header[3].textContent = '+ Lorem ipsum dolor sit amet.';
// })

// list[2].addEventListener('click', () => {
//     list[0].classList.add('hidden')
//     list[1].classList.add('hidden')
//     list[2].classList.remove('hidden')
//     list[3].classList.add('hidden')

//     service_header[0].textContent = '+ Lorem ipsum dolor sit amet.';
//     service_header[1].textContent = '+ Lorem ipsum dolor sit amet.';
//     service_header[2].textContent = '- Lorem ipsum dolor sit amet.';
//     service_header[3].textContent = '+ Lorem ipsum dolor sit amet.';
// })

// list[3].addEventListener('click', () => {
//     list[0].classList.add('hidden')
//     list[1].classList.add('hidden')
//     list[2].classList.add('hidden')
//     list[3].classList.remove('hidden')

//     service_header[0].textContent = '+ Lorem ipsum dolor sit amet.';
//     service_header[1].textContent = '+ Lorem ipsum dolor sit amet.';
//     service_header[2].textContent = '+ Lorem ipsum dolor sit amet.';
//     service_header[3].textContent = '- Lorem ipsum dolor sit amet.';
// })