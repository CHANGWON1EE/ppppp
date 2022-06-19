'use strict';

/* function calculator(n1, n2, op) {
    let result = 0;

    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
    }

    console.log(`연산 결과는 ${result}입니다.`);
}

calculator(10, 3, '+');
calculator(10, 3, '-');
calculator(10, 3, '*');
calculator(10, 3, '/'); */

/* ==================================================================================================== */

/* calculator = (n1, n2, op) => {
    let result = 0;
}

calculator(n1, n2, '+'); */

/* let add = function calladd(n1, n2) { // add
    return n1 + n2;           
};
let sub = function (n1, n2) { // subtract
    return n1 - n2;           
};
let mul = function (n1, n2) { // multiply
    return n1 * n2;           
};
let div = function (n1, n2) { // divide
    return n1 / n2;           
};

console.log(div(5, 2)); */

/* ==================================================================================================== */

function calculator(n1, n2, op) {
    op(n1, n2);
    console.log(`연산 결과는 ${op(n1, n2)}입니다.`);
}
function add(n1, n2) {
    return n1 + n2;
}
function sub(n1, n2) {
    return n1 - n2;
}
function mul(n1, n2) {
    return n1 * n2;
}
function div(n1, n2) {
    return n1 / n2;
}

calculator(5, 2, add);
calculator(5, 2, sub);
calculator(5, 2, mul);
calculator(5, 2, div);

/* ==================================================================================================== */

calculator(5, 2, function add(n1, n2) { // 한 번 쓰고 말거라면 함수 자체를 복사 + 붙여넣기
    return n1 + n2;
});

/* ==================================================================================================== */

calculator(5, 2, (n1, n2) => n1 + n2);  // 람다식 함수의 매개변수 2개 이상이거나 없는 경우 () 생략 불가
                                        // 화살표 이후 식이 한 줄일 경우 ruturn, {} 생략 가능

