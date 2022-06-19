'use strict';

/*
  < 문제 >

- 아래 target1, target2, target3 와 같은 문자열이 전달되었을 때 "viagra", "xxx" 와
  같은 스팸성 단어가 포함된 경우, 이를 추출하는 함수 구현.
  단, 전달된 문자열의 대소문자는 무시하여 판별 후 추출.
*/

'use strict';

const target1 = 'buy ViAgRA now';
const target2 = 'free xxXXXx video';
const target3 = 'js language very easy';

function extractSpam(target) {
    let judge = target.toLowerCase();
    
    return judge.includes('viagra') || judge.includes('xxx');
}

/* ==================================================================================================== */

function extractSpam(target) {
    target = target.toLowerCase(); // 문자는 상수이기 때문에 본래의 문자열 변경 불가
    let find = ['viagra', 'xxx'];  // 원본을 바꾸는 것이 아닌 새로 덮어 씌우는 것

    return target.includes(find[0]) || target.includes(find[1]);
}

console.log(extractSpam(target1));
console.log(extractSpam(target2));
console.log(extractSpam(target3));