'use strict';

/* 
    원시값 중 빈 문자열('')과 false 만 추상 동등 비교(==) 시 0으로 변환되어 평가
 */

console.log('aa' == 0);               // f
console.log('' == 0);                 // t
console.log(NaN == 0);                // f
console.log(null == 0);               // f
console.log(undefined == 0);          // f
console.log(true == 1);               // t    // true는 1로 평가
console.log(false == 0);              // t    // false는 0으로 평가

/* NaN은 다른 모든 값과 비교했을 때 같지 않으며, 다른 NaN과도 같지 않음에 주의 */

console.log(NaN == NaN);              // f
console.log(NaN === NaN);             // f
console.log(NaN != NaN);              // t
console.log(NaN !== NaN);             // t

console.log(null == null);            // t
console.log(null === null);           // t
console.log(undefined == undefined);  // t
console.log(undefined === undefined); // t
console.log(true == true);            // t
console.log(true === true);           // t
console.log(false == false);          // t
console.log(false === false);         // t

