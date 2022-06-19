// 열거 되어있는 애들 제외하고 모두 참조형

// 기본형 = 원시값 // 더 이상 쪼갤 수 없음 더 이상 변형시킬 수 없음

// 참조형 = 다른 누군가의 주소를 기억하고 있는 것

// 초기화 시키지 않았을 때(아무것도 하지 않았을 때) = undefined

// 명시적으로 아직 초기화를 하지 않았다 할당되지 않은 상태다라는 것을 보여줄 때 = null

'use strict';

let value;

// value = 15;
// value = null;
// value = false;
// value = 'string'; // DYnamic typing(동적 타이핑)

// console.log(value);

// console.log(!null); // !(NOT)
// console.log(!undefined);
// console.log(!NaN);
// console.log(!'');
// console.log(!0);

// let n;
// console.log(n); // n은 명시적 선언을 하였지만, 초기화되지 않았으므로 undefined 출력

// function test1() { // 명시적 반환을 하지 않는 함수도 undefined 출력
//     let n = 5;
// }
// function test2() {
//     return 10;
// }

// console.log(test1());
// console.log(test2());

// toString 객체 형태로 도출
// description 안에 있는 값만

const symbol1 = Symbol('enum');
const symbol2 = Symbol('enum');
const symbol3 = Symbol.for('enum');
const symbol4 = Symbol.for('enum');

console.log(symbol1 === 'enum');
console.log(symbol1 === symbol2);
console.log(symbol1 === symbol3);
console.log(symbol3 === symbol4);

console.log(symbol1);
console.log(symbol1.toString());
console.log(symbol1.description);

// alert(symbol1); //
alert(symbol1.toString());
alert(symbol1.description);



