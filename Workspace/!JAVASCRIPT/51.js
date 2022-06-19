'use strict';

/* 

< 배열 >

배열: 변수를 연속적으로 나열한 개념
배열의 주소 크기는 항상 4byte로 동일
배열을 사용하는 목적: 여러개의 값을 한 번에 기록하기 위해

배열 접근의 세 가지 요소
1) 첫 주소
2) 인덱스
3) 인덱스 종료값(배열 크기 - 1)

*/

/* ==================================================================================================== */

/* let ar = [1, 2, 3, 4, 5];

console.log(ar);
console.log(ar[2]);
console.log(ar.length);
console.log();

for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
} */

/* ==================================================================================================== */

//  let ar = [];

// for (let i = 0; i < 5; i++) {
//     ar[i] = i + 1;
// }

// console.log(ar);

// for (const e of ar) { // e: 임시 변수
//     console.log(e);
// }

// => 출력만 가능하고, 데이터 변경이 불가능 */

/* ==================================================================================================== */

/* for (let e of ar) {
    e = 5; 
}

console.log(e); */

// => 저장용(데이터를 받아 그대로 복사 붙여넣기 하므로)이기 때문에 데이터 변경 절대 불가

/* ==================================================================================================== */

/* let sc = [];
let tot = 0;

for(let i = 0; i < 5; i++) {
    sc[i] = +prompt(`${i + 1}번째 학생 점수: `);
    tot += sc[i];
}

document.write('&lt; 학생 점수 &gt;<br></br>');
for (let i = 0; i < sc.length; i++) {
    document.write(`${i + 1}번째 학생 점수: ${sc[i]}<br>`);
}

document.write(`<br>총점: ${tot}, 평균: ${tot / sc.length}`); */

/* ==================================================================================================== */