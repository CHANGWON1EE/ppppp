'use strict';

/* 

< contiune 구문 >

for: continue 증감식으로 바로 점핑!
while, do ~ while: 조건식으로 바로 점핑!

*/

for (let i = 1; i < 10; i++) {

    if (i >= 6) continue;
    
    for (let j = 1, result; j < 10; j++) {
        
        result = i * j;

        document.write(`${i} x ${j} = ${(result / 10 >= 1 ? '' : '&nbsp;') + result} `);

    }

    document.write('<br>');

}

/* ==================================================================================================== */

for (let i = 1; i < 10; i++) {
    
    for (let j = 1, result; j < 10; j++) {
        
        result = i * j;

        document.write(`${i} x ${j} = ${(result / 10 >= 1 ? '' : '&nbsp;') + result} `);
        
    }

    document.write('<br>');

    if (i >= 6) continue;

}

/* ==================================================================================================== */

for (let i = 1; i < 10; i++) {
    
    for (let j = 1, result; j < 10; j++) {
        
        if (j >= 6) continue;

        result = i * j;

        document.write(`${i} x ${j} = ${(result / 10 >= 1 ? '' : '&nbsp;') + result} `);

    }

    document.write('<br>');

}

