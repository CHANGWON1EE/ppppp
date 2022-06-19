'use strict';

/*
< 문제 >

- 아래 target1, target2 와 같은 문자열과 표시를 제한할 문자열의 최대 길이를 함수에 전달했을 때,
전달된 대상 문자열의 길이가 최대 문자열 보다 이하면 대상 문자열을 그대로 반환하되 그렇지 않으면
대상 문자열을 전달된 문자열 최대 길이로 줄여서 반환하고 대상 문자열의 끝에 "..." 를 추가한
문자열을 반환하는 함수 구현. 단, 문자열의 최대 길이는 "..." 문자열도 포함하여 산출.

< 실행예시 >

Strings are useful for holding data t...            - truncateStr(target1, 40)
Strings are useful for hold...                      - truncateStr(target1, 30)
Strings can be created as primitives :              - truncateStr(target2, 40)
Strings can be created as p...                      - truncateStr(target2, 30)
*/

'use strict';

function truncateStr(target, maxLength) {
    /* if (target.length <= maxLength) {
        return target;
    } else {
        return target.slice(0, maxLength - 3) + '...';
    } */

    return target.length <= maxLength ? target : target.slice(0, maxLength - 3) + '...';
}

const _target = '0123456789012345678901234567890123456789012345678901234567890123456789012';
const target1 = 'Strings are useful for holding data that can be represented in text form.';
const target2 = 'Strings can be created as primitives : ';

console.log(truncateStr(target1, 40));
console.log(truncateStr(target1, 30));
console.log(truncateStr(target2, 40));
console.log(truncateStr(target2, 30));