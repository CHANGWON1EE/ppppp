'use strict';

let $btn = $('input');

$btn.click(function () {          // 신버전에서는 click 메서드에 line-through 적용 -> 사장되는 메서드 중 하나
    $(this).css({ color: 'red'});
});

$btn.click(function () {
    $(this).css({fontSize: '2em'});
});

$btn.on('click', function () {
    $(this).css({backgroundColor: 'green'});
});

$btn.on('click', function () {
    $(this).css({width: '100px', height: '100px'});
});

/* ==================================================================================================== */
// 메서드 체이닝: 세미콜론(;)을 쓰기 전까지 메서드를 연속적으로 나열 가능

let $main = $('main');

$main.on('mouseover', function () {
    $(this).css({backgroundColor: 'yellow'});
})
    .on('mouseleave', function () {
        $(this).css({textTransform: 'uppercase'});
    });

/* ==================================================================================================== */    

let $delTarget = $('.mail, .knowledge'),
    $emphasizeTarget = $('p:first-child, p:last-child');

$delTarget.on('mouseover', function() {              
    $delTarget.css({textDecoration: 'line-through'}); // delTarget에서 하나로 묶었기 때문에 둘 중 아무 요소에 mouseover를 해도 둘 다 적용
});

$emphasizeTarget.on('mouseover', function() {
    $(this).css({color: 'red', fontWeight: 'bold'});  // this에 해당하는 요소만 fontSize와 fontWeight 변경
});
