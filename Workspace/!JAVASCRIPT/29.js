'use strict';

function setValue1(inputValue) {
    let value = inputValue || 'default Value'; // 참이면 참 값 반환 ?? 거짓이면 defalut Value 반환
    console.log(value);                        // ||(or) 에서 0, '', NaN 은 false
}

setValue1('date');
setValue1(0);         // null 과  undefined 가 아닌  falsy 값들도 초기화 값으로 사용하고자
setValue1('');        // 하는 경우 ||(or) 은 0, '', NaN 값들도 falsy 값으로 인정함으로써 의도치
setValue1(NaN);       // 않는 초기화 결과를 얻을 수 있는 가능성.
setValue1(null);
setValue1(undefined);

function setValue2(inputValue) {
    let value = inputValue ?? 'default Value'; // ?? 에서 0, '', NaN 은 true ---> true 값 그대로 반환
    console.log(value);
}

setValue2('date');
setValue2(0);
setValue2('');
setValue2(NaN);
setValue2(null);
setValue2(undefined);