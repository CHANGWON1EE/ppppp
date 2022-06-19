/* < 관계 연산자 > */

'use strict';

console.log('aa' <= 0);                // f
console.log('aa' >= 0);                // f

console.log(NaN <= 0);                 // f
console.log(NaN >= 0);                 // f

console.log(undefined <= 0);           // f
console.log(undefined >= 0);           // f

console.log('' <= 0);                  // t
console.log('' >= 0);                  // t
console.log(false <= 0);               // t
console.log(false >= 0);               // t

console.log(null <= 0);                // t
console.log(null >= 0);                // t
console.log(null >= 0 && null <= 0);   // t
console.log(null == 0);                // f
console.log(null === 0);               // f

/* &&: and => ~하면서 ~인 것 */

