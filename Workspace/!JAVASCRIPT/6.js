'use strict'

// 조건문

// if (조건식) {
//     참 실행 블럭;
// } else {
//     거질 실행 블럭;
// }

// if (조건식) {
//     참 실행 블럭;
// }

// if (조건식) {
//     참 실행 블럭;
// } else if (조건식) {
//     거짓 실행 블랙;
// } else {
//     추가 실행 블럭
// }

// 삼항조건 연산자
// (조건식) ? 창에 표현식: 거짓에 대한 표현식;

let stName = '박서연';
let age = 24;
let adultCheck;

// if (age >=19) {
//     console.log(`${stName}는(은) 성인입니다.`); 
// } else {
//     console.log(`${stName}는(은) 미성년자입니다.`); 
// }

if (age >= 19) {
    adultCheck = '성인'; 
} else {
    adultCheck = '미성년자';
}

console.log(`${stName}는(은) ${adultCheck}입니다.`)


console.log(`${stName}는(은) ${age >= 19 ? '성인' : '미성년자'}입니다.`)
// (불 표현식) ? (참일 때의 결과) : (거짓일 때의 결과)
// (조건) ? (참일 때의 결과) : (거짓일 때의 결과)
// (condition) ? (true value) : (false value)
