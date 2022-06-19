'use strict';

let n = 8;

// 짝수의 정의: x 값을 2로 나누었을 때 나머지가 0인 수
// 홀수의 정의: x 값을 2로 나누었을 때 나머지가 1인 수

console.log(2 ** 4);            // 밑수 ** 지수 // 제곱: 밑수 = 2 // 지수 = 4
console.log(5 % 3);             // 나머지 구하기
console.log(parseInt(5 / 3));   // 몫 구하기
console.log(6 % 2 === 0);       // 짝수
console.log(6 % 2 === 1);       // 홀수
console.log(n % 4 === 0);       // n은 4의 배수다 : 4는 n의 약수다
console.log(67 % 2 === 0);      // false

console.log('String' + ' operator');
console.log('String ' + 3);
console.log('6' + '4');         // 문자열 + 문자열 => 결합
console.log('6' + 3);           // 문자열 + 숫자 => 결합
console.log(6 + '3');           // 숫자 + 문자열 => 결합

console.log('6' + 3);
console.log('65' / '3');
console.log(8 - '3');
console.log('6' * 1 + '4');
console.log('6' * 1 + '4' * 1);

console.log(+'6' + +'4');       // +'n' = 'n' * 1
console.log(-'6' + -'4');       // -'n' = 'n' * -1

console.log('a' + 3);
// console.log(isNaN(5));       // 숫자
// console.log(isNaN('a'));     // 문자
// console.log(isNaN('a' * 3)); // 문자
// console.log(isNaN('6'));     // 숫자
console.log(isNaN(undefined));  // ture => 예외적으로 true값 반환 
console.log(isNaN(NaN));        // true =>
console.log(isNaN(''));         // false
console.log(isNaN('  '));       // false
console.log(isNaN(0));          // false
console.log(isNaN(null));       // false
console.log(isNaN('aa' + 10));  // true
console.log(isNaN('40' + 10));  // false

// === 'object'
// === 'number'

// number = 숫자 false

// 1234

// NaN = 문자다.

// isNaN(문자) = true;
// isNaN(숫자) = false;
// isNaN(숫자텍스트) = false;
// isNaN(숫자텍스트 * 숫자) = false; 숫자형식 무조건 false;