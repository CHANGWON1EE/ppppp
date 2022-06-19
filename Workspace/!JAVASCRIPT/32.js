'use strict';

// if문 넓은 범위나 연속적인 범위 측정
// switch 좁은 범위나 비연속적인 범위 측정

// 선택문 => 1:1 평가

// switch(평가할 값) {
    // case 선택값1(조건, 경우): case 비교는 ===
//         실행문;
//         break;
//     case 선택값2(조건, 경우):
//         실행문;
//         break;
//     case 선택값3(조건, 경우):
//         실행문;
//         break;
//     default: 생략 가능
//         실행문;
//         break;
// }

let score = +prompt('등수: ');
let rank;

switch (score) {
    case 1:
        rank = "최우수상";
        break;
    case 2:
        rank = "우수상";
        break;
    case 3:
        rank = "장려상";
        break;
    default:
        rank = "수상자 아님!!"
        break;
}

alert(rank);

/* ==================================================================================================== */

// let Class = +prompt('x형: ');1
// let a;

// switch (Class) {
//     case 1:
//         a = '가형';
//         break;
//     case 2:
//         a = '나형';
//         break;
//     case 3:
//         a = '다형';
//         break;
//     default:
//         a = '미지정';
//         break;
// }

// alert(a);