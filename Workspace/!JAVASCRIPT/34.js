'use strict';

/* <복합 대입 연산자> */

let value = 2;

// value = value + 3
// value = + 3
// value += 3       // 중간에 띄어쓰기 절대 금지 => 문자인지 부호인지 정확하게 구별하기 위함

value += 3;         // value = value + 3        
console.log(value); // => 5
value -= 2;         // value = value - 2
console.log(value); // => 3
value *= 3;         // value = value * 3
console.log(value); // => 9
value /= 2;         // value = value / 2
console.log(value); // => 4.5
value %= 2;         // value = value % 2 || %: 나머지 구하는 연산자
console.log(value); // => 0.5

/* =================================================================================================== */

value -= 2 + 3;     // value = value - (2 + 3);
console.log(value);

// 복합대입 연산의 경우 우변의 중복되는 변수를 없애고 연산자를 대입 연산자 앞에
// -표기함으로써 부호와 구분하기 위한 축약된 문법. 문법상 우변에 실제 변수가-
// 존재하는 것이 아니므로 우변의 연산(2 + 3)이 선 처리되고 좌변과 연산하여 -
// 다시 좌변에 대입하는 형태. 결과적으로 "value = value -(2 + 3)"의- 
// 형태로 처리. 이를 잘못 이해하여  단순한 변환을 적용 -
// -"value = value - 2 + 3"의 형태로 이해하는 오류에 주의.