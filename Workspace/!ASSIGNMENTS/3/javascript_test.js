/*
  < 문제 >

- 학생 수를 입력받고 이에 대한 학생들의 점수들을 입력받아 총점과 평균을 구하는 프로그램 구현.
  
  < 조건 >

1> 입력받은 학생 수에 대한 미입력이나 취소, 공백 및 문자열 형태의 입력은 고려하지 않음.

2> 점수에 대한 입력은 미입력 또는 취소와 공백 및 문자형태의 자료를 입력하면 해당 점수에 대한
   카운팅을 하지않고 다시 재입력 상태가 진행되도록 처리.
*/

// 'use strict';

// let stNum;
// let Score;
// let total_Score = 0;

// stNum = prompt('학생 수: ');

// for (let n = 1; n <= stNum; n++, total_Score += +Score) {

//     for (; ;) {

//         Score = prompt(`${n}번째 학생 점수: `);

// // '' = false 
// // 취소 = null
// // ' ' = 0 => false;
// // isNaN(1) => 문자다
// // !isNaN(1) => 숫자다 

//         if (Score && Score.trim()) {

//             if (!isNaN(Score)) {

//                 break;

//             }

//         }

//     }

// }

// alert(`총점: ${total_Score}, 평균: ${total_Score / +stNum}`);

/* ==================================================================================================== */

'use strict';

let st;
let sc;
let tot = 0; // 과거 누적합

st = +prompt('학생 수: ');

for (let i = 0; i < st; i++) {
    sc = prompt(`${i + 1}번째 학생 점수: `);

    if (sc && sc.trim() && !isNaN(sc)) {
        tot += +sc;
    } else {
        i--;
    }
}

alert(`총점: ${tot}, 평균: ${tot / st}`);