'use strict'

let stName;
let Ko, En, Ma;
let Avg;
let Grade;

stName = prompt(`이름 : `);
Ko = +prompt(`국어 점수: `);
En = +prompt(`영어 점수: `);
Ma = +prompt(`수학 점수: `);
Avg = (Ko + En + Ma) / 3;

if (Avg >= 90) { 
    Grade = 'A';
} else if (Avg >= 80) { 
    Grade = 'B';
} else { 
    Grade = Avg>=70 ? 'C' : 'F';
}

// else if (Avg >= 70) { 
//     Grade = 'C';
// } else { 
//     Grade = 'F';
// }

// `` < 문자로 인식
// 문자 + 숫자(변수) -> `${}` 템플릿 리터럴

alert(`< 성적 >\n학생명: ${stName}, 학점: ${Grade}, 평균: ${Avg}`);