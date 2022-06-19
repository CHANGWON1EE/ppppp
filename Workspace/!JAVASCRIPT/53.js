'use strict';

/* 
< 함수 >

- 복잡하면서 반복되는 작업을 하나의 명령어로 간단히 실행되도록 구현
- 사용자 정의 함수

< 함수 구조 및 기능>

function 함수명(매개변수) {
    함수실행블럭;
}

1. 입력
2. 처리
3. 출력

// 1. 전역변수
// 2. 함수정의

*/

/* ==================================================================================================== */

// < 입력, 처리, 출력 >

/* function sum() {      // 함수 정의 => 입력, 처리, 출력
    let n1, n2;
    let tot = 0;

    n1 = +prompt('점수1: ');
    n2 = +prompt('점수2: ');

    tot = n1 + n2;

    alert('합계: ' + tot);
}

sum();
sum(); */

/* ==================================================================================================== */

// < 처리, 출력 >

/* function sum(n1, n2) {   // 지역 변수 | 매개변수(입력) => 함수 자체는 hoisting 현상으로 매개변수를 따로 지정하지 않아도 읽힘
                         // 함수 호출이 hoisting 되는 것이 아님 | 변수 선언 시점 이전에 와서는 절대 안됨
    let tot = 0;         // 처리, 출력

    tot = n1 + n2;
    
    alert('합계: ' + tot);
}

let n1, n2;              // 전역 변수

n1 = +prompt('점수1: '); // 5  => 주소부를 통한 간접 접근으로 값부 전달
n2 = +prompt('점수2: '); // 10 => 주소부를 통한 간접 접근으로 값부 전달

sum(n1, n2);             // 실인수: 실제 전달하는 값 */

/* ==================================================================================================== */

// < 처리 >

/* let n1, n2;              // 전역 변수

function sum(n1, n2) {   // 처리 / 매개 변수(입력)

    return n1 + n2;      // return: 1) 값을 호출부로 반환 2) 함수종료 => 출력
}

n1 = +prompt('점수1: '); // 5  => 주소부를 통한 간접 접근으로 값부 전달
n2 = +prompt('점수2: '); // 10 => 주소부를 통한 간접 접근으로 값부 전달

alert('합계: ' + sum(n1, n2)); */
