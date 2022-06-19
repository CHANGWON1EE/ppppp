/* 
    < 이메일 주소와 개인 전화번호를 이용한 비밀번호 생성 >

step1: 이메일 주소의 "@" 직전의 두 글자.                           =>      58
step2: 이메일 주소의 "." 직전까지의 전체 문자열 크기.              =>      15
step3: 개인 전화번호의 두 번째 "-" 문자 이후 두 개 숫자.           =>      56

password : 이메일 주소의 두 번째와 세 번째 문자 + step1 + step2 + step3

※ 단, 이메일 주소의 두 번째 문자가 문자형태이면 그 값 그대로를
   결합하고 숫자타입이면 "@" 문자 다음의 첫 글자를 이용하여 결합.

< 예시 >

psy7758@hanmail.net     =>      sy581556

k1234@naver.com         =>      n2341156

※ 최종 결과는 웹 페이지 개발자도구 콘솔에서 패스워드 조합 결과를 확인 가능하도록 구현.
*/

'use strict';

// let email = 'psy7758@hanmail.net';
let email = 'k1234@naver.com ';
let phoneNum = '010-1234-5678';
let step1, step2, step3;
let password;

// 임시 변수

let findAt = email.indexOf('@');
step1 = email.slice(findAt - 2, findAt);
console.log(step1);

/* ==================================================================================================== */

step2 = email.slice(0, email.indexOf('.')).length;
console.log(step2);

/* ==================================================================================================== */

step3 = phoneNum.slice(-4, -2); // 음수 인덱싱
console.log(step3);             // 

let phoneNumLegnth = phoneNum.length;
step3 = phoneNum.slice(phoneNumLegnth -4, phoneNumLegnth -2);
console.log(step3);

let findFirst = phoneNum.indexOf('-');
let findSecond = phoneNum.indexOf('-', findFirst + 1);
step3 = phoneNum.slice(findSecond + 1, findSecond+ 3);
console.log(step3);

step3 = phoneNum.split('-')[2].slice(0, 2);
console.log(step3);

/* ==================================================================================================== */

password = `${isNaN(email[1])?email.slice(1, 3):email[findAt + 1] + email[2]}${step1 + step2 + step3}`;
console.log(password);