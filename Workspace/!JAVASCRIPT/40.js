'use strict';

let grade;

for (; ;) {
    grade = prompt('몇 학년입니까?(1 ~ 6): ')
    if (grade >= 1 && grade <= 6) break;
    alert('다시 입력하시오.');
}

alert(`${grade} 학년입니다.`)