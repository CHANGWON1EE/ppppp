'use strict';

/* 

배열 접근의 세 가지 필수 요소
1) 첫 주소
2) 인덱스
3) 인덱스 종료값(배열 크기 - 1)

/* ==================================================================================================== */

/*

< 문제 >

직원 수: 3

직원명: 홍길동
나이: 24세

직원명: 마이클
나이: 37세

직원명: 둘리
나이: 21세

< 출력값 >

< 직원 명부 >

홍길동(24), 마이클(37), 둘리(21)

가장 어르신: 마이클, 37세
가장 어린이: 둘리, 31세
직원 평균 나이: 세

/* ==================================================================================================== */

let worker;                         // 직원수 변수
let tot = 0;                        // 누적합 변수
let Name = [];                      // 직원명 배열
let age = [];                       // 직원 나이 배열
let max = 0, min = 100;             // 과거 최대값 나이 변수
let maxAgeindex;                    // 나이 최대값일 때 인덱스
let minAgeindex;                    // 나이 최대값일 때 인덱스

worker = +prompt(`직원 수 입력: `); // 직원 수 변수 = 직원 수 입력
                                    // 직원명과 나이를 저장하기 위해서 배열에 접근(인덱스 변수)
for (let i = 0; i < worker; i++) {  // 인덱스 변수 = 0 ~ 인덱스 변수 = 직원 수 - 1
    Name[i] = prompt(`직원명: `);   // 직원명 배열 = 직원명 입력
    age[i] = +prompt(`나이 입력: `);// 현재 직원 나이 배열값 = 나이 입력
    tot += age[i];

    if (age[i] > max) {  // 현재 직원 나이 배열값 > 과거 최대값 나이 변수
        max = age[i];    // 현재 최대값일 때 인덱스 = 현재 직원 나이배열값 staffAge[현재인덱스]
        maxAgeindex = i; // 나이 최대값일 때 인덱스 = 최대값일 때 인덱스(현재인덱스)
    }
    
    if (age[i] < min) {
        min = age[i];
        minAgeindex = i; // 나이 최소값일 때 인덱스 = 최대값일 때 인덱스(현재인덱스)
    }
}

document.write('&lt; 직원 명부 &gt;<br></br>');

/* for(let i = 0; i < Name.length; i++) {
    if (i == Name.length - 1) {
        document.write(`${Name[i]}(${age[i]})`);
    } else {
        document.write(`${Name[i]}(${age[i]}),&nbsp;`);
    }
} */

/* for(let i = 0; i < worker; i++) {
    document.write(`${Name[i]}(${age[i]})${(i < worker - 1) ? ', ' : '<br>'}`);
} */

for(let i = 0; i < worker; i++) {
    if (i < worker - 1) {
        document.write(`${Name[i]}(${age[i]}), `);
    } else {
        document.write(`${Name[i]}(${age[i]})<br>`);
    }
}

/* 
인덱스 변수 = 0 ~ 인덱스 변수 = 직원 수 - 1

if (현재 인덱스 < 인덱스 종료값) {
        직원명(직원 나이), 출력
    else {
        직원명(직언 나이) 출력
    }
} */

document.write(`<br>가장 어르신: ${Name[maxAgeindex]}, ${max}세`);
document.write(`<br>가장 어르신: ${Name[maxAgeindex]}, ${age[maxAgeindex]}세`);
document.write(`<br>가장 어린이: ${Name[minAgeindex]}, ${min}세`);
document.write(`<br>직원 평균 나이: ${tot / Name.length}세`);

/* ==================================================================================================== */

/* for (let i = 0; i < age[i]; i++) {
    if (age[i] > max) {  // 현재 직원 나이 배열값 > 과거 최대값 나이 변수
        max = age[i];    // 현재 최대값일 때 인덱스 = 현재 직원 나이배열값 staffAge[현재인덱스]
        maxAgeindex = i; // 나이 최대값일 때 인덱스 = 최대값일 때 인덱스(현재인덱스)
    }
    
    if (age[i] < min) {
        min = age[i];
        minAgeindex = i; // 나이 최소값일 때 인덱스 = 최대값일 때 인덱스(현재인덱스)
    } 
} */

/* ==================================================================================================== */

/* for (let i = 0; i < age[i]; i++) {

    max = Math.max(age[i], max);
    min = Math.min(age[i], min);
} */

/* ==================================================================================================== */

/* if (age[i] == 0 || age[i] == 100) {
    max = age[i]; */