'use strict'

console.log(n1);
n1 = 5;

var n1;
console.log();

function varTest() {
    var n2 = 10;
}

{
    var n3 = 15;

}

// const 값부가 변하지 않음
// 변경될 가능성이 아예 없는 것들 / 변경되어서는 안되는 것들
// function 안에 있으면 전역, 지역

console.log(n3);
console.log();

var n4 = 20;
var n4 = 30;
console.log(n4);