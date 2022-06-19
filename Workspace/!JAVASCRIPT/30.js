'use strict';

let value;

let obj = 1;
let inputValue1 = 'first data';
let inputValue2 = 'second data';

value = obj;

if (obj) {
    value = inputValue1;

    if (inputValue1) {
        value = inputValue2;
    }
}

if (value) {
    console.log(value);
} else {
    console.log('유효하지 않은 속성이 포함')
}

// =====================================================================================================

/* 유효하지 않은 객체애 대한 속성 접근 */

function getChar1(str) {
    let char = str[2];
    console.log(char);
}

getChar1('data');
// getChar1(); // undefined 에 대한 인덱싱 ---> complie error

// =====================================================================================================

/* 단락 평가를 통한 유효하지 않은 객체에 대한 속성 접근을 선제 차단 */

function getChar2(str) {
    let char = str && str[2];
    console.log(char);
}

getChar2('data');
getChar2();


