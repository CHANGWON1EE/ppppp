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
let step1, step2, step3, step4, step5;
let password;

let email_Str, email_Num;

step1 = email.slice(email.indexOf('@') -2, email.indexOf('@'));
step2 = email.slice(0, email.indexOf('.')).length;
step3 = phoneNum.slice(phoneNum.indexOf('-', 4) + 1, phoneNum.indexOf('-', 4) + 3);

email_Str = email.slice(1, 3);
email_Num = email.slice(email.indexOf('@') + 1, email.indexOf('@') + 2) + email.slice(2, 3);




// step4 = step1 + step2 + step3;

// step4 = email.slice(1, 3) + `${step1 + step2 + step3}`;
// step5 = email.slice(email.indexOf('@') + 1, email.indexOf('@') + 2) + email.slice(2, 3) + `${step1 + step2 + step3}`;

// password = `${isNaN(email.slice(1, 2)) ? email.slice(1, 3) + step4 : email.slice(email.indexOf('@') + 1, email.indexOf('@') + 2) + email.slice(2, 3) + step4}`

// password = `${isNaN(email.slice(1, 2)) ? email.slice(1, 3) + step1 + step2 + step3 : email.slice(email.indexOf('@') + 1, email.indexOf('@') + 2) + email.slice(2, 3) + step1 + step2 + step3}`

password = `${isNaN(email.slice(1, 2)) ? email_Str + step1 + step2 + step3 : email_Num + step1 + step2 + step3}`

console.log(password);
// console.log(step3);

