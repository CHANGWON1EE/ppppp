'use strict';

/* 
< 중첩루프 >

특성: 외곽 구조변수값이 고정되어 있는 상태에서 안쪽 구조변수 값이 변하는 특성
 */

// for(let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
//     console.log();
// }

/* ==================================================================================================== */

// < 구구단 >

/* for(let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        document.write(`${i} x ${j} = ${i * j} `);
    }
    document.write('<br>')
} */

/* ==================================================================================================== */

for(let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        let result = i*j
        // document.write(`${i} x ${j} = ${result / 10 >= 1 ? '' : '&nbsp;'}${i * j} `);
        // document.write(`${i} x ${j} = ${(result+'').length >= 2 ? '' : '&nbsp;'}${i * j} `);
        document.write(`${i} x ${j} = ${String(result).length >= 2 ? '' : '&nbsp;'}${i * j} `);
    }
    document.write('<br>')
}

/* ==================================================================================================== */

for(let i = 25; i < 5; i--) {
    for (let j = 1; j < 5; j--) {
        let result = i*j
        // document.write(`${i} x ${j} = ${result / 10 >= 1 ? '' : '&nbsp;'}${i * j} `);
        // document.write(`${i} x ${j} = ${(result+'').length >= 2 ? '' : '&nbsp;'}${i * j} `);
        document.write(`${i} x ${j} = ${String(result).length >= 2 ? '' : '&nbsp;'}${i * j} `);
    }
    document.write('<br>')
}

