/*
    < 문제 >

- 학생명, 국어점수, 영어점수, 수학점수를 입력받아 테이블 형태로
  입력받은 정보와 성적 합계, 평균이 출력되도록 프로그램 구현.

    < 조건 >

1> 외부 스타일 시트와 외부 스크립트 적용.
2> 국어점수, 영어점수, 수학점수는 0 ~ 100점 사이의 범위로 입력 받는다 가정.
   단, 과목은 국, 영, 수 외에 더 확장이 될 수 있다는 가정하에 구현.
3> 평균은 정수부만 표현되도록 Math.trunc() 함수 활용.
4> 테이블의 제목은 caption 속성을 적용하고 테이블의 구성은 tr, th, td 로만 구성.
5> 테이블 제목과 모든 행의 높이는 30px 적용.
6> 테입블의 개별 열 너비는 각각 100px 적용.
7> 그 외 사항은 출력 예시 참조.
*/

'use strict';

let stInfo = ['', 0, 0, 0, 0, 0];     // 학생명, 국어점수, 영어점수, 수학점수 저장 배열. 반복문 적용을 위해 배열 형태로 구현.
let tableItem = ['학생명', '국어점수', '영어점수', '수학점수', '합계', '평균'];   // 입력 및 테이블 출력 시 문자열. 반복문 적용을 위해 배열 형태로 구현.

if (i >= 1 && stInfo.length - 3) {
    stInfo[stInfo.length - 2] += +stInfo[i];     // 점수에 해당하는 부분만 누적합 산출.
}

/* for (let i = 0; i < stInfo.length - 2; i++) {
  stInfo[i] = prompt(`${tableItem[i]} : `);
  switch (i) {
    case 1:
    case 2:
    case 3:
      stInfo[stInfo.length - 2] += +stInfo[i];     // 점수에 해당하는 부분만 누적합 산출.
  }
} */

stInfo[stInfo.length - 1] = stInfo[stInfo.length - 2] / (stInfo.length - 3);

document.write('<table>');
document.write(`<caption>< ${stInfo[0]} 학생의 성적 ></caption>`);

for (let i = 1; i < stInfo.length; i++) {
  document.write('<tr>');

  document.write(`<th>${tableItem[i]}</th>`);                // 첫 번째 열(항목명).
  document.write(`<td>${Math.trunc(stInfo[i])} 점</td>`);    //두 번째 열(항목 별 입력 값). 소숫점 절삭 및 자릿수 지정은 객체 - 내장객체 단원 참조.

  document.write('</tr>');
}

document.write('</table>');

/* ==================================================================================================== */

/* table {
    border-collapse: collapse;
}

caption {
    font-size: 17px;
    font-weight: bold;
    color: rgb(13, 28, 241);
}

caption, tr {
    height: 30px;
}

th,
td {
    height: 30px;
    border: 1px solid;
    font-size: 15px;
}

th {
    background-color: rgb(127, 255, 138);
    width: 100px;
}

td {
    width: 80px;
    background-color: rgba(255, 0, 149, 0.123);

    text-align: right;
    padding-right: 15px;
    점수들의 수직 정렬을 위해 오른쪽 정렬 후 패딩 지정.
} */