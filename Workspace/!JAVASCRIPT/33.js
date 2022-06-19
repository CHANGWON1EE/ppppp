'use strict';

let score = +prompt('등수: ');
let rank;
let firstClass = 1;
let secondClass = 2;
let thirdClass = 3;
                           // 동치 비교(===): 값과 형식이 모두 같을 경우 true / 다를 경우 false
switch (score) {
    case firstClass:       // 자바나 C언어와 달리 case문 뒤에 변수나 식의 지정이 가능
        rank = '최우수상'; // 단, switch문의 평가값과 case문의 선택값은 동치 비교(===)로
        break;             // 처리되므로 타입에 대한 주의 필요
    case secondClass:
        rank = '우수상';
        break;
    case thirdClass:
        rank = '장려상';
        break;
    default:
        rank = '수상자 아님!!';
        break;
}

alert(rank);