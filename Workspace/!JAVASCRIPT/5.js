'use strict'

let input;

input = prompt();
alert(input);

input = prompt('입력');
alert(input);

input = prompt('입력', '기본데이터');
alert(input);

// function prompt(message?: string, _default?: string): string
// message , default: 
// '?': 생략가능, 'string' 반환값