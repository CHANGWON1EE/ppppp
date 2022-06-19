/*
    < 논리 연산자 >

1. &&(and): 그리고, ~ 이면서

=> 앞에서 참이면서 뒤에서 참이면 참
=> 둘 다 참이면 참

================================================================================================

2. ||(or): 또는, ~ 이거나

=> 앞에서 참이거나 뒤에서 참이면 참
=> 둘 중 하나만 참이면 참

*두 논리 연산자 모두 참으로만 해석

================================================================================================

3. !(not): 부정
*/

'use strict';

let age = 18, gender = true;

if (age >= 19) {
    if (gender) {
        console.log('성인이면서 남자다.')
    }
}

if (age >= 19 && gender) {
    console.log('성인이면서 남자다.')
}

if (age >= 1 && age <= 150) {
    console.log('당신은 사람입니다.')
}

if (age >= 19) {
    console.log('입장해라')
}

if (gender) {
    console.log('입장해라')
}

if (age >= 19 || gender) {
    console.log('입장해라')
}

if (age < 1 || age > 150) {
    console.log('당신은 외계인입니다.')
}

if (!(age >= 1 && age <= 150)) {         // 1 이상이면서 150 이하 => 1 미만이거나 150 초과
    console.log('당신은 외계인입니다.')  // && => ||
}

/* 
    age >= 1 && age <= 150     --->      age < 1 || age > 150
    (age >= 1) * (age <= 150)  --->     (age < 1) + (age > 150)
*/

/* 
1 미만이거나 150 초과
드모르간의 법칙: 전체 부정 == 1. 개별 부정 2. &&(and)와 ||(or) 변경
*/

console.log(false && false);   // false
console.log(false && true);    // false
console.log(true && false);    // false
console.log(true && true);     // true

console.log(false || false);   // false
console.log(false || true);    // true
console.log(true || false);    // true
console.log(true || true);     // true

// 'use strict';

// let Ko, En, Ma;
// let Grade;
// let Ave;
// let Gender;

// Ko = +prompt('국어 점수 입력: ');
// En = +prompt('영어 점수 입력: ');
// Ma = +prompt('수학 점수 입력: ');
// Gender = prompt('성별 입력: ');
// Ave = (Ko + En + Ma) / 3;

// if (Ave >= 80 && Gender == '여') {
//     alert('Grade = X')
// } else {
//     alert('Grade = Y')
// }