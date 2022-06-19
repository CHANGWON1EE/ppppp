'use strict';

/*
  < 문제 >

- 아래와 같이 첫 글자가 대문자로 시작되는 단어(target)를 전달했을 때 소문자로 변환하여 반환하는 함수 구현.
  빈 문자열이 전달됬을 때를 대비한 방어코드도 필요하다면 작성.
*/

const target = 'SUMMER';      // string

function sub (data) {
    if (!data) return data;
    // if (!data) return console.log('빈 문자열입니다.\n다시 입력바랍니다.');
    return data.slice(0, 1).toLowerCase()+data.slice(1);
    
    // if (data) {       // 빈 문자열('') => false
    //     return data.slice(0, 1).toLowerCase()+data.slice(1);
    // } else {
    //     console.log('빈 문자열입니다.\n다시 입력바랍니다.');
    // }
}

console.log(sub(target)); // js에서 빈 문자열('void')은 기본적으로 'undefined' 반환
// sub(target);           // 위와 같은 식을 쓸 경우 console.log 이용 X

/* ==================================================================================================== */

/* function changeFirstChar(target) {
    let dis = 'a'.codePointAt() - 'A'.codePointAt();  // 문자를 유니코드 숫자로 변환
                                                      // 유니코드에서 소문자 > 대문자 => 소문자 - 대문자 = 각 문자간의 거리
    if(!target) return target;                        // 입력된 문자 그대로 반환 + 출력

    return String.fromCodePoint(target[0].codePointAt() + dis) + target.slice(1);
                                                      // String.fromCodePoint => 숫자를 다시 문자로 변환
}

console.log(changeFirstChar(target)); */

/* ==================================================================================================== */

/* function changeFirstChar(target) {
    if(!target) return target;

    return target[0].toLowerCase() + target.slice(1); // 인덱싱 + slice
}

console.log(changeFirstChar(target)); */

/* ==================================================================================================== */

/* function changeFirstChar(target) {
    return target.charAt(0).toLowerCase() + target.slice(1); // charAt(캐릭터엣)은 인덱스 '0' 값을 넣어도 컴파일 에러가 나지 않음
}

console.log(changeFirstChar(target)); */
