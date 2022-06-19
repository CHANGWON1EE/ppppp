'use strict';

/*
 *    < 증감 연산자와 일반 카운터 식, 복합대입 연산자 비교 >
 *  증감 연산자의 경우, 일반 카운터 식이나 복합대입 연산자와 달리 1씩만 증감 가능.
 *  ++a
 *  a++ 
 *  --a
 *  a-- 
 * 
 *  a++   ==   a = a + 1   ==   a += 1
 * 
 *  a--   !=   a = a - 2   ==   a -= 2
 */

// let value = 2;

// ++value;
// console.log(value);

// value++;
// console.log(value);

let value = 2;

let a = ++value;                                // a = value += 1 // a = value = value + 1
console.log("value = " + value + ", a = " + a); // value = 3, a = 3
                                                // value 값 먼저 반환
a = value++;
console.log("value = " + value + ", a = " + a); // value = 4, a = 3
                                                // a 값 먼저 반환
a = --value;
console.log("value = " + value + ", a = " + a); // value = 3, a = 3
                                                // value 값 먼저 반환
a = value--;
console.log("value = " + value + ", a = " + a); // value = 2, a = 3
                                                // a 값 먼저 반환