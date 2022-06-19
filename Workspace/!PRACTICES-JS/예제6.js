'use strict'

let str = 'lee2121@google.com';

// console.log(str.replace(str.substring(str.indexOf('@') + 1), 'naver.com'));

str = str.replace(str.slice(str.indexOf('@') + 1), 'naver.com');

console.log(str);




// 'use strict'
// 
// let str = 'lee2121@google.com';
// let site = str.indexOf('@');
// str = str.substring(0, site + 1) + 'naver.com';
// 
// str = str.slice(0, str.indexOf('@') + 1) + 'naver.com';

// console.log(str);