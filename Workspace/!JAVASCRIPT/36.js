/* < for 반복문 > */

'use strict';

// for (초기식; 조건식(반복); 증감식) {
//     반복 실행 블럭;
// }

// for (let i = 0; i < 10; i++) {         // 초기식 => 조건식 => 반복 실행 블럭 => 증감식
//                                        //        => 조건식 => 반복 실행 블럭 => 증감식
//     console.log(i);                    // 목적하는 식(구하는 식) 
// }

// VS에서 무한루프 종료: Ctrl + Alt + M
// 웹에서 무한 루프 종료: Shift + Esc

/* ==================================================================================================== */

//   >  |  >=  |   <  |  <=
// 초과 | 이상 | 미만 | 이하

// i < 10 | i >= 10

// x < 29 | x >= 29

// x > 29 | x <= 29

/* ==================================================================================================== */

// const str = 'both ends of a String'

// for (let ix = 0, findIx; ;) {
//     findIx = str.indexOf('n', ix);
//     if (findIx == -1) break;

//     console.log(findIx);
//     ix = findIx + 1;
// }

/* ==================================================================================================== */

// 반복(회전)이 결정되기 위한 조건:
// 1. 처음
// 2. 종료
// 3. 일정한 규칙

/* ==================================================================================================== */

// 1 ~ 12
// for (let i = 1/* <현재> */; i < 13;) {
//     console.log(i); /* <현재> */
//     i++; /* <미래> */
// }

// 44 ~ 66
// for (let i = 43; i < 66;) {
//     i++;         
//     // console.log(i);
// }

// -88 ~ -151
// for (let i = -88; i > -152;) {
//     console.log(i);
//     i--;         
// }

// -88 ~ -151
// for (let i = -88; i > -152;) {
//     console.log(i);
//     i--;         
// }

// 33 ~ 56
// for (let i = 32; i < 56;) {
//     i++;         
//     console.log(i);
// }

// 99 ~ 120
// for (let i = 99; i < 121;) {
//     console.log(i);
//     i++;         
// }

// 12 ~ 43
// for (let i = 11; i < 43;) {
//     i++;         
//     console.log(i);
// }

// -4 ~ -16
// for (let i = -3; i > -16;) {
//     i--;         
//     console.log(i);
// }

// -25 ~ -34
// for (let i = -25; i > -35;) {
//     console.log(i);
//     i--;         
// }

// 10 ~ 32
// for (let i = 9; i < 32;) {
//     i++;         
//     console.log(i);
// }

// 10 ~ 32
// for (let i = 9; i < 32;) {
//     i++;         
//     console.log(i);
// }

// -2 ~ 19
// for (let i = -3; i < 19;) {
//     i++;         
//     console.log(i);
// }

// 7 ~ -18
// for (let i = 8; i > -18;) {
//     i--;         
//     console.log(i);
// }

/* ==================================================================================================== */

// 2 ~ 12
// for (let i = 2; ;) {
//     console.log(i);
//     i++;         
//     if (i >= 13) break;
// }

// 1 ~ -8
// for (let i = 2; ;) {
//     i--;         
//     if (i <= -9) break;
//     console.log(i);
// }

// 34 ~ 58
// for (let i = 34; ;) {
//     console.log(i);
//     i++;         
//     if (i >= 59) break;
// }

// -2 ~ -13
// for (let i = -2; ;) {
//     if (i <= -14) break;
//     console.log(i);
//     i--;         
// }

// -4 ~ 7
// for (let i = -5; ;) {
//     if (i >= 7) break;
//     i++;         
//     console.log(i);
// }

// 7 ~ -1
// for (let i = 7; ;) {
//     console.log(i);
//     if (i <= -1) break;
//     i--;         
// }

// 1 ~ -7
// for (let i = 2; ;) {
//     i--;         
//     console.log(i);
//     if (i <= -7) break;
// }

// 1 ~ 5
// for (let i = 0; ;) {
//     i++;         
//     console.log(i);
//     if (i >= 5) break;
// }

// 1 ~ 8
// for (let i = 0; ;) {
//     i++;         
//     if (i >= 9) break;
//     console.log(i);
// }

// -1 ~ -8
// for (let i = -1; ;) {
//     console.log(i);
//     i--;         
//     if (i <= -9 ) break;
// }

// 47 ~ 54
// for (let i = 47; ;) {
//     console.log(i);
//     i++;         
//     if (i >= 55 ) break;
// }

// -4 ~ -11
// for (let i = -3; ;) {
//     i--;         
//     if (i <= -12 ) break;
//     console.log(i);
// }

// -12 ~ -16
// for (let i = -11; ;) {
//     i--;         
//     if (i <= -17) break;
//     console.log(i);
// }

// -45 ~ -23
// for (let i = -46; ;) {
//     if (i >= -23) break;
//     i++;         
//     console.log(i);
// }

// -127 ~ -105
// for (let i = -128; ;) {
//     i++;         
//     if (i >= -104) break;
//     console.log(i);
// }

// -22 ~ -14
for (let i = -23; ;) {
    i++;         
    if (i >= -13) break;
    console.log(i);
}

// 신입사원 < 사원 < 주임 < 대리 < 과장 < 팀장 < 부장 < 이사 < 상무 < 전무 < 사장 < 회장