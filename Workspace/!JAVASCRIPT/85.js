// $('') 문자열 형태로 선택자 그대로 작성
// let = $menuMail = $('.menu.mail');

/* 
css 호출시 js에서처럼 style이 아닌 .css method 이용
*/

// { 여러 스타일 한 번에 지정 가능 }
// 특징: 1. 문자 형태로 쓰지 않아도 됨

'use strict';

let $menuMail = $('.menu.mail'),
    $btn = $('input'),
    $paragraphAll = $('div p'),
    $firstParagraph = $('div p:first-child');

console.log($menuMail);
console.log($btn);
console.log($paragraphAll);
console.log($firstParagraph);

$menuMail.css('color', 'red');
$btn.css('width', '200px');
$paragraphAll.css('background-color', 'yellow');

/* 
아래와 같이 2가지 이상의 스타일 지정 시에는 리터럴 객체 형태로 메서드의 인수 지정
*/

$firstParagraph.css({color: 'blue', fontWeight: 'bold'});

let $li = $('li').get(),
    $nav = $('#nav').get();

$li[1].style.listStyle = 'none';
console.log($nav[0].offsetHeight);

let $h3 = $('h3');

$h3.each(function (i) {                          // 반복문과 같이 
    this.classList.add(`h3-${i + 1}`);           // 'h3-1'부터 'h3-4'까지 class를 li에 추가
    $(this).css({fontSize: `${0.5 * i + 1}em`}); // '0.5em'부터 '2em'까지 fontSize를 적용
})