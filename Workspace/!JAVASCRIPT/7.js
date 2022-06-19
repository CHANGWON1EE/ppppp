'use strict'

let stName = '짱구';
let disorder = 3;
let disorderCheck;

if (disorder < 3) {
    disorderCheck = 'ADHD';
} else if (disorder <= 3) {
    disorderCheck = 'normal'
} else {
    disorderCheck = 'abnormal'
}

console.log(`${stName}는(은) ${disorderCheck}입니다.`)

// let stName = '재범'
// let sc = 85;
// let grade;

// if (sc >= 90) {
//     grade = 'A';
// } else if (sc >= 80) {
//     grade = 'B';
// } else if (sc >= 70) {
//     grade = 'C';
// } else if (sc >= 60) {
//     grade = 'D';
// } else {
//     grade = 'F';
// }

// console.log(`${stName}의 학점은 ${grade}입니다.`)