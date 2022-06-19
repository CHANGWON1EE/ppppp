'use strict';

const str1 = 'String test';
const str2 = 'String test';
const i1 = 5;
const i2 = '5';

console.log(str1 == str2);  // == (equal): 피연산자들의 값만 비교 (추상 동등 비교)
console.log(str1 === str2); // ===(strict equal): 피연산자들의 값뿐만 아니라, 타입까지 포함하여 비교

console.log(i1 == i2);      // == (equal): 피연산자들의 값만 비교 / 단, 숫자형태의 문자열은 다른 숫자
                            // 타입의 값과 비교 시 숫자 타입으로 형변환되어 비교

console.log(i1 === i2);     // === (strict equal): 피연산자들의 값뿐만 아니라, 타입까지 포함하여 비교
                            // 따라서 이때에는 숫자 형태의 문자열이더라도 다른 숫자 타입과 비교시 형변환 미진행

console.log(i1 !== i2);     // !== (strict not equal)

console.log(NaN === NaN);   // NaN 만 예외적으로 false 값 반환 => 이련 경우 isNaN을 이용하여 NaN 인지 아닌지를 구별 및 판단
console.log(null === null);
console.log(undefined === undefined);
console.log('' === '');
console.log('  ' === '  ');
console.log(0 === 0);

