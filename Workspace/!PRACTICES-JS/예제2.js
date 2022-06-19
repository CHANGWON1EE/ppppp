'use strict'

let sc1, sc2;

sc1 = +prompt('점수1: ', '0');
sc2 = +prompt('점수2: ', '0');

// if (sc1 >= sc2) {
//     sc1 - sc2;
// } else {
//     sc2 - sc1;
// }

alert(`${sc1}과(와) ${sc2}의 차는 ${sc1 >= sc2 ? sc1 - sc2 : sc2 - sc1} 입니다.`);

if (confirm('창을 닫을까요?')) {
    close();
}