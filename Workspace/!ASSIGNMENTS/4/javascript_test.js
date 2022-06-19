'use strict';

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

// let tableItem = ['학생명', '국어점수', '영어점수', '수학점수', '합계', '평균'];
// 입력받으면서 배열에 저장하고 누적합도 구해
// sc[3] += 입력값
// sc[4] = sc[3] / 3
// 식의 구조 및 순서 파악 우선

/* ==================================================================================================== */

let stName;
let subName = ['국어점수', '영어점수', '수학점수', '합계', '평균'];
let subScore = [];
let tot;

tot = subName.length - 2;
subScore[tot] = 0;

stName = prompt('학생명: ');

document.write('<figure>');
document.write(`<figcaption><h3>&lt ${stName} 학생의 성적 &gt</h3></figcaption>`);
document.write('<table>');

for (let i = 0; i < tot; i++) {
    subScore[i] = +prompt(`${subName[i]}: `);
    subScore[tot] += subScore[i];
}

subScore[subName.length - 1] = Math.trunc(subScore[tot] / (tot));

for (let j = 0; j < subName.length; j++) {
    document.write('<tr>');
    document.write(`<th>${subName[j]}</th>`);
    document.write(`<td>${subScore[j]} 점</td>`);
    document.write('</tr>');
}

document.write('</table>');
document.write('</figure>');

/* ==================================================================================================== */