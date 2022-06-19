'use strict';

/* 
예측하기 어려운 이벤트 => 비동기식
사용자가 직접적으로 사용하는 이벤트 => 동기식 | 예측 가능 -> 실행되는 녀석들
*/

/* ==================================================================================================== */

/* 
필요한 것

1. 버튼을 기억 시킬 변수
2. 이전 버튼(이전 값)을 기억 시킬 변수 => menu_list_a[0] = 이전값

for (let i = 0; i < menu_list_a.length; i++) {
    menu_list_a.addEventListener('click', function () {
        1. selected 속성 제거
        2. selected 속성 추가
        3. 이전 값 위치 저장
        
// this는 함수를 호출할 때 쓰는 용도
// self는 this를 이용해서 호출한 함수를 받을 때

        1. 궁극적으로 해야하는 것 => li href 속성명을 통해 content1 값 추출
        2. id 와 li href 속성명 연동
    })
}

function loading(self) {
    1. 이전 값 안보이게
    2. 지금 선택한 값 보이게
}
*/

let menu_list_a = document.querySelectorAll('.menu li a'),
    pre = menu_list_a[0];

id_connection(pre); // 함수 id_connect 'pre'에 해당하는 매개변수 호출

for (let i = 0; i < menu_list_a.length; i++) {
    menu_list_a[i].addEventListener('click', function () {
        pre.classList.remove('selected');

        this.classList.add('selected');
        id_connection(this);

        pre = this;
    })
}

function id_connection(self) {
    document.getElementById(pre.getAttribute('href').slice(1)).style.display = 'none';
    document.getElementById(self.getAttribute('href').slice(1)).style.display = 'block';
}

/* ==================================================================================================== */
/* 
< offsetWidth / offsetHeight >

- 해당 요소의 너비 / 높이 값을 반환
`${A.offsetHeight => 123, 234}px`;
A.offsetHeight + 'px';

< resize >

- 브라우저창의 크기 변화나 화면 확대 / 축소에 따른 document view의 크기가 변경될 때 발생되는 이벤트
*/
/* ==================================================================================================== */

let main = document.getElementsByTagName('main');
let header = document.getElementsByTagName('header');

margin();

window.addEventListener('resize', function () {
    margin();
})

function margin() {
    main[0].style.marginTop = `${header[0].offsetHeight}px`;
}

/* ==================================================================================================== */

// let height = header[0].offsetHeight;
// main[0].style.marginTop = `${height}px`;
// main[0].style.marginTop = `${header[0].offsetHeight}px`;
// menu_list_a[0].style.width = '500px'
// menu_list_a[0].style.height = '500px'
// menu_list_a[0].style.backgroundColor = 'red'
// body.style.backgroundColor = 'red'
// console.log(contents[0].offsetHeight);
// console.log(menu[0].offsetHeight);
// main[0].style.marginTop = document.getElementById(pre.getAttribute('href').slice(1)).offsetHeight;
// main[0].style.marginTop = '320px';
// header[0].style.marginBottom = `${height}px`;
// document.getElementById(pre.getAttribute('href').slice(1)).offsetWidth;
// document.getElementById(pre.getAttribute('href').slice(1)).offsetHeight;

/* ==================================================================================================== */

console.log(header[0].offsetHeight);
// console.log(document.getElementById(pre.getAttribute('href').slice(1)).offsetWidth);
// console.log(document.getElementById(pre.getAttribute('href').slice(1)).offsetHeight);
// console.log(main.offsetWidth);
// console.log(main.offsetHeight);
// console.log(menu_list_a[0].offsetWidth);
// console.log(menu_list_a[0].offsetHeight);
