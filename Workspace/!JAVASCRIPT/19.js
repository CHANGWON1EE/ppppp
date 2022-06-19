'use strict';

/* 숫자 형태의 문자열에 대한 Number 함수를 통한 숫자 타입으로 변환 연산 */

const n5 = '8';
const n6 = '10';

console.log(n5 + n6);
console.log(Number(n5) + n6);              // n5는 number 타입으로 변환되었지만 문자열(n6)에 대한
console.log(Number(n5) + Number(n6));

console.log(8 / 0);                        // Infinity: 임의 무한대
console.log(-8 / 0);                       // -Infinity: NEGATIVE_INFINITY(음의 무한대)
console.log('string' / 0);                 // NaN: Not-a-Number

/* 
    < NaN의 특성과 타입 체크 시 주의점 >
*/

console.log(NaN === NaN);                  // NaN은 다른 NaN과 일치하지 않는 특성 => false
console.log(typeof NaN);                   // NaN에 대한 직접적인 타입 체크 시 typeof 또한 연산자이므로 
                                           // 자동으로 number 타입(0)으로 형변환됨에 주의

console.log(typeof +'1234' === 'number') 
console.log(typeof +'string' === 'number') // 문자열에 부호(+) 연산을 적용하였으므로
                                           // *1 /1
console.log(isNaN(NaN));                   // isNaN: 인수의 대상이 NaN인지 아닌지의 여부를 판단하여 boolean값 반환

// console.log(isNaN(+'string'));
// console.log(isNaN('string' / 0));
// console.log(isNaN(0));
// console.log(isNaN('1234'));
// console.log(isNaN(Number(0)));
// console.log(isNaN('aa' * 10)); 
// console.log(isNaN(('aa' * 10))); 
// console.log(isNaN(null)); 
// console.log(isNaN(undefined)); 
// console.log(isNaN('')); 
// console.log(isNaN(false)); 
// console.log(isNaN(true));
// console.log(typeof 'aa' * 10);
// console.log(typeof ('aa' * 10));
// console.log(isNaN(typeof 55));
// console.log(isNaN('number'));
// console.log(isNaN(' ')); 
// console.log(isNaN(!NaN));

// === 'object'
// === 'number'

// number = 숫자 false // 

// 1234

// 숫자 / 문자
// NaN = 문자다.
// 문자 개념:

// isNaN(문자)= true;
// isNaN(숫자)= false;

// isNaN(문자) = true;
// isNaN(숫자) = false;
// isNaN(숫자텍스트) = false;
// isNaN(숫자텍스트 * 숫자) = false; 숫자형식 무조건 false;

// console.log(isNaN(aa * '10'));



console.log(Number(undefined));  // NaN     // undefined는 비교 연산 시 false로 평가되지만 number 형식으로 변환은 불가
console.log(Number(null));       // 0
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number('  123  '));  // 양쪽 끝의 공백을 제거 후 변환된 number 타입 값으로 변환
console.log(Number('  12 3  ')); // 양쪽 끝이 아닌 중간에 공백이나 숫자 형태가 아닌 값이 포함된
console.log(Number('  '));       // 공백이나 빈 문자열은 0으로 변환되어 반환

let n7;
let n8 = null;
let n9 = true;

console.log(n7 + 5);             // n7은 초기화되지 않았으므로 undefined 로 평가되며, undefined 는 연산 시
console.log(n8 + 5);             // 숫자 형식으로 변환이 불가하므로 NaN 반환
console.log(n9 + 5);
console.log(' ' + 5);            // 공백은 래퍼 객체를 통한 명시적 변환인 경우에는 0이 반환되지만,
                                 // 이와 같이 연산 시에는 자동 형변환되지 않음.

const n10 = 4;
const n11 = 10;

console.log(String(n10) + String(n11)); // String 래퍼 객체를 통한 문자열 반환 
console.log(String(n7) + String(n8));   // String 래퍼 객체를 통한 문자열 반환

