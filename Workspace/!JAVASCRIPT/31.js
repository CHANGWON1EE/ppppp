'use strict';

let n;
function test() {}


console.log(typeof 1);                  // number
console.log(typeof 5.5);                // number
console.log(typeof "test");             // string
console.log(typeof "");                 // string
console.log(typeof '');                 // string


console.log(typeof true);               // boolean
console.log(typeof NaN);                // number => 0
console.log(typeof null);               // object: null은 별도의 고유한 자료형을 가지는 특수한 값으로 객체가 아니지만,
                                        // 하위 호환성을 유지하기 위해 object로 처리 -> 언어 자체의 오류이므로
                                        // null이 객체가 아님에 주의 
console.log(typeof undefined);          // undefined


console.log(typeof n);                  // undefined
console.log(typeof test);               // function


console.log(typeof 37 === 'number');    // true    => typeof 연산자가 비교연산자나 논리연산에 비해
console.log(typeof (37 === 'number'));  // boolean => 우선 순위가 높음에 주의
console.log(typeof 'number' && 37);     // 37      => &&: 가장 마지막 값 반환 / typeof 연산자가 우선 순위가 더 높음에 유의
console.log(typeof ('number' && 37));   // number  => &&: 첫 번째 거짓 값 반환 / true && true => false 값이 없으니까 마지막 값 반환
                                        // 'number' -> 문자 
                                        
console.log(typeof 'number' && 100);    // 100
console.log(typeof 100 && 'number');    // number


console.log(typeof 'number');

