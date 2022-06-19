'use strict';

// let result = '9'

// console.log(String(result).length);

// 행 => 열로 구성
// 열 => 행으로 구성

/* for (let i = 1, v = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        document.write(`${String(v).length >= 2 ? '' : '&nbsp;'}${v++} `);
    }
    document.write('<br>');
} */

/* ==================================================================================================== */

/* for (let i = 1, v = 25; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        document.write(`${String(v).length >= 2 ? '' : '&nbsp;'}${v--} `);
    }
    document.write('<br>');
} */

/* ==================================================================================================== */

/* for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(`* `);
    }
    document.write('<br>');
} */

/* ==================================================================================================== */

/* for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 6 - i; j++) {
        document.write(`* `);
    }
    document.write('<br>');
} */

// 행렬을 이용하지 않은 다른 방법

/* for (let i = 1, ed = 5; i <= 5; i++) {
    for (let j = 1; j <= ed; j++) {
        document.write(`* `);
    }
    ed--;
    document.write('<br>');
} */

/* ==================================================================================================== */

/* for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j < i) {
            document.write('&nbsp;&nbsp;');
        } else {
            document.write(`* `);
        }
    }
    document.write('<br>');
} */

/* ==================================================================================================== */

let line;

// line = +prompt('줄 수: ')

/* for (let i = 1; i <= line; i++) {
    for (let j = 1; j <= line; j++) {
        if (j < i) {
            document.write('&nbsp;&nbsp;');
        } else {
            document.write(`* `);
        }
    }
    document.write('<br>');
} */

/* ==================================================================================================== */

/* for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j < 6 - i) {
            document.write('&nbsp;&nbsp;');
        } else {
            document.write(`* `);
        }
    }
    document.write('<br>');
} */

/* ==================================================================================================== */

/* for (let i = 1; i <= line; i++) {

    for (let j = 1; j <= line; j++) {

        if (j < line + 1 - i) {

            document.write('&nbsp;&nbsp;');

        } else {

            document.write(`* `);
        }
    }
    document.write('<br>');
} */

/* ==================================================================================================== */

/* for (let i = 1; i <= 3; i++) {
        
    for (let j = 1; j <= i + 2; j++) {
        
        if (j < 4 - i) {
            document.write('&nbsp;&nbsp;');
            
        } else {
            document.write(`* `);
        }

    }
    document.write('<br>');
} */

/* ==================================================================================================== */

/* line = +prompt('줄 수: ')

for (let i = 1; i <= line; i++) {
        
    for (let j = 1; j <= i + line - 1; j++) {
        
        if (j < line + 1 - i) {
            document.write('&nbsp;&nbsp;');
        } else {
            document.write(`* `);
        }

    }
    document.write('<br>');
} */

/* ==================================================================================================== */

/* for (let i = 1; i <= 3; i++) {
        
    for (let j = 1; j <= 6 - i; j++) {
        
        if (j < i) {
            document.write('&nbsp;&nbsp;');
            
        } else {
            document.write(`* `);
        }

    }
    document.write('<br>');
} */

/* ==================================================================================================== */

/* line = +prompt('줄 수: ')

for (let i = 1; i <= line; i++) {
        
    for (let j = 1; j <= line * 2 - i; j++) {
        
        if (j < i) {
            document.write('&nbsp;&nbsp;');
        } else {
            document.write(`* `);
        }

    }
    document.write('<br>');
} */

/* ==================================================================================================== */

/* for (let i = 1, st, ed, m = (5 + 1) / 2; i <= 5; i++) {

    if (i <= m) {
        st = 4 - i, ed = i + 2;
    } else {
        st = i - 2, ed = 8 - i;
    }

    for (let j = 1; j <= ed; j++) {
        if (j < st) {
            document.write('&nbsp;&nbsp;');
        } else {
            document.write(`* `);
        }
    }

    document.write('<br>');
}
 */
/* ==================================================================================================== */

// let PI = 3.14;

// console.log(parseInt(PI));
// console.log(Math.trunc(PI));

/* ==================================================================================================== */

/* line = +prompt('줄 수 입력: ');

for (let i = 1, st, ed, m = (line + 1) / 2; i <= line; i++) {

    if (i <= m) {
        st = (m + 1) - i, ed = i + (m - 1);
    } else {
        st = i - (line - m), ed = (line + m) - i;
    }

    for (let j = 1; j <= ed; j++) {
        if (j < st) {
            document.write('&nbsp;&nbsp;');
        } else {
            document.write(`* `);
        }
    }
    document.write('<br>');
} */

/* ==================================================================================================== */

/* for (let i = 1, st, ed, m = (5 + 1) / 2; i <= 5; i++) {

    if (i <= m) {
        st = i, ed = 6 - i;
    } else {
        st = 6 - i, ed = i;
    }

    for (let j = 1; j <= ed; j++) {
        if (j < st) {
            document.write('&nbsp;&nbsp;');
        } else {
            document.write(`* `);
        }
    }

    document.write('<br>');
} */

/* ==================================================================================================== */

/* line = +prompt('줄 수 입력: ');

for (let i = 1, st, ed, m = (line + 1) / 2; i <= line; i++) {

    if (i <= m) {
        st = i, ed = (line + 1) - i;
    } else {
        st = (line + 1) - i, ed = i;
    }

    for (let j = 1; j <= ed; j++) {
        if (j < st) {
            document.write('&nbsp;&nbsp;');
        } else {
            document.write(`* `);
        }
    }

    document.write('<br>');
} */

/* ==================================================================================================== */

// line = +prompt('줄 수 입력: ');

for (let i = 1, st, ed, m = (5 + 1) / 2; i <= 5; i++) {

    if (i <= m) {
        st = i, ed = (line + 1) - i;
    } else {
        st = (line + 1) - i, ed = i;
    }

    for (let j = 1; j <= ed; j++) {
        if (j < st) {
            document.write('&nbsp;&nbsp;');
        } else {
            document.write(`* `);
        }
    }

    document.write('<br>');
}