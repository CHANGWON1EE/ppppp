// 초기화 시키지 않았을 때(아무것도 하지 않았을 때) = undefined

// 명시적으로 아직 초기화를 하지 않았다 할당되지 않은 상태다라는 것을 보여줄 때 = null

'use strict';

console.log(null == undefined);
console.log(null === undefined);

console.log(null + 1);          // 1
console.log(undefined + 1);     // NaN
console.log(null * 1);          // 0
console.log(undefined * 1);     // NaN

const i1 = 5;
const i2 = undefined;
const i3 = null;
let i4;

console.log(i1 == null);        // f
console.log(i2 == null);        // t
console.log(i3 == null);        // t
console.log(i4 == null);        // t

console.log(i1 == undefined);   // f
console.log(i2 == undefined);   // t
console.log(i3 == undefined);   // t
console.log(i4 == undefined);   // t

console.log(i1 === null);       // f
console.log(i2 === null);       // f
console.log(i3 === null);       // t
console.log(i4 === null);       // f

console.log(i1 === undefined);  // f
console.log(i2 === undefined);  // t
console.log(i3 === undefined);  // f
console.log(i4 === undefined);  // t

