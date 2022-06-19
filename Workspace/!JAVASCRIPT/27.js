'use strict';

let value;
let inputValue1;
let inputValue2;
let defaultValue = 'Default data'; // 앞서 입력된 데이터가 모두 유효하지 않은 데이터인 경우 디폴트값 설정.

if (inputValue1) {
    value = inputValue1;  // false ---> undefined
} else if (inputValue2) {
    value = inputValue2;  // false ---> undefined
} else {
    value = defaultValue; // true ---> true
}

console.log(value);

// =================================================================================================


/* 단락 평가 성질을 활용한 디폴트 값 설정. 함수의 인수가 유효하지 않은 경우의 디폴트 값 지정. */

value = inputValue1 || inputValue2 || defaultValue; // false || false || true
console.log(value);

// =================================================================================================

function setValue1(inputValue) {
    let value = inputValue;
    console.log(value);
}

setValue1('data');        // true      // 함수의 인수로 null과 undefined등의 유효하지 않은
setValue1();              // undefined // falsy값이 전달되어 falsy값 그대로 초기화.

// =================================================================================================

function setValue2(inputValue) {
    let value = inputValue || defaultValue; // or연산자의 특성을 이용하여 유효하지 않은 falsy값이 전달

    console.log(value);                     // 되는 경우, 후위 피연산자값을 그대로 대입 전달함으로써
}                                           // 유효하지 않은 값들에 대한 디폴트 초기화 처리.


setValue2('data');        // true
setValue2();              // false ---> defaultValue => Default data
