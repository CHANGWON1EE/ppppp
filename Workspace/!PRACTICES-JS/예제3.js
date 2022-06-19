'use strict'

let n1, n2;

n1 = +prompt('점수1: ');
n2 = +prompt('점수2: ');

// if (n1 > n2) {
//     alert(`큰 수는 ${n1}`);
// } else if (n1 < n2) {    
//     alert(`큰 수는 ${n2}`);
// } else {
//     alert(`두 수는 같음`);
// }

if (n1 == n2) {
    alert(`두 수는 같음`);
} else {
    alert(`큰 수는 ${n1 > n2 ? n1 : n2}`);
}