'use strict';

let body = document.querySelector('body'),
input = document.querySelectorAll('input');
/* 
< DOM 프로퍼티를 이용한 이벤트 핸들러 할당 >

- 객체의 참조를 통해 접두사 on ~ 이 붙는 이벤트 프로퍼티에 이벤트 핸들러를 할당
단, 이 방식은 객체의 이벤트 프로퍼티에 최정 할당된 이벤트 핸들러로 덮어지는
이유로 하나의 객체에 대하여 다중 이벤트 핸들러 할당이 불가

객체참조.on[event] = 함수의 참조 또는 익명 함수 또는 람다식
*/

input[0].onclick = function() {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
};

input[1].onclick = function() {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
};

/* =================================================================================================== */

/* input[0].onclick = function() {
    body.style.color = 'yellow';
};

input[1].onclick = function() {
    body.style.color = 'black';
};
 */
