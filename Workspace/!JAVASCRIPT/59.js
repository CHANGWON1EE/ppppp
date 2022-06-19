'use strict';

/*
    < 콜백함수(Callback function) >

- A함수의 인수로 다른 B함수의 참조를 전달하여 A함수 내에서 B함수의 참조를 통해 B함수를
  재호출하는 개념.   호출후 호출시점으로 돌아오는 개념이 아닌,  A함수가 전달된 B함수를
  다시 돌아와서(back) 호출(call)하는 것을 의미.

*/

// function agree => 주소 상수
// 함수 형태 정의 => 목적: 재활용하기 위해

// 직접 만들어서 정의 => 목적: 잠깐 쓰고 버릴 일회용

/* ==================================================================================================== */

function agree() {
    alert('개인정보 활용에 동의하셨습니다.');
}
function disagree() {
    alert('개인정보 활용에 동의하지 않았습니다. 다시 확인 부탁드립니다.');
}
/* function inputCheck1() {
    if (confirm('개인정보 활용에 동의하십니까?')) {
        agree();
    } else {
        disagree();
    }
}
inputCheck1(); */

/* ==================================================================================================== */

function inputCheck2(ok, no) {
    if (confirm('개인정보 활용에 동의하십니까?')) {
        ok();
    } else {
        no();
    }
}

inputCheck2(agree, disagree); // 함수 선언에 대한 참조 전달을 통한 콜백 호출.

/* ==================================================================================================== */

inputCheck2(                  // 함수 표현식에 대한 참조 전달을 통한 콜백 호출.

    function () { alert('개인정보 활용에 동의하셨습니다.'); },
    function () { alert('개인정보 활용에 동의하지 않았습니다. 다시 확인 부탁드립니다.'); }
)

/* 
1. 전역 변수 선언
2. 함수 선언
3. 나머지 데이터 혹은 식 입력
*/