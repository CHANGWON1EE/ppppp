'use strict';

console.log('string'.charAt(5));

const n1 = new Number('5'); // Number 객체의 참조 변환
const n2 = Number('5');

console.log(n1);
console.log(n2);
console.log(n1 + 5); // Number 객체(n1)에 대한 산순 연산
console.log(n2 + 5); // 변환되어 연산 처리

console.log(n1 == 5);
console.log(n2 == 5);
console.log(n1 === 5);
console.log(n2 === 5);

console.log('5' + 10);
console.log('aa' + 10);
console.log('5' * 10);
console.log('aa' / 10);

console.log(typeof n1); // object

console.log(typeof n2); // number

if (typeof n1 === 'object') {
    console.log('타입 일치')
} else {
    console.log('타입 불일치')
}

const n3 = new Number('a');
const n4 = Number('a');

console.log(n3);
console.log(n4);
