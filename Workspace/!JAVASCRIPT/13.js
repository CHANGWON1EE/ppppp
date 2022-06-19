'use strict'

/*
    string.codePointAt( pos: number ): number

-   해당 문자열에서 pos에 해당하는 인덱스 위치값에 대한 유니코드 값 반환.
    js에서의 모든 문자열은 UTF-16형식으로 인코딩.
    ( 구버젼 메서드 - charCodeAt )
*/

console.log('A'.codePointAt());
console.log('ABC'.codePointAt(1));
console.log('a'.codePointAt());
console.log('abc'.codePointAt(1));

/*
    String.fromCharCode( ...codes: number[] ): string               - 구버젼.

-   인수로 지정한 유니코드 값들에 대응되는 문자열을 반환.
    ... 은 다중 인수 지정이 가능함을 의미.

----------------------------------------------------------------------------------------------------

    String.fromCodePoint( ...codePoints: number[] ): string

-   fromCharCode와 동작이 동일하지만 fromCharCode는 서로게이트 쌍을 처리 못하지만,
    fromCodePoint는 보다 최신에 나온 메서드로 서로게이트 쌍을 처리 가능.

※ 서로게이트 쌍 : 2바이트로 표현되는 유니코드의 범위의 한계로 인해 사용빈도가 낮은 특수 문자들에
                   대하여 2바이트 쌍(4byte)으로 인코딩하여 표현.
*/

console.log(String.fromCodePoint(65));
console.log(String.fromCodePoint(97, 98));


/* codePointAt, fromCodePoint 메서드를 이용한 대소문자 변환. */

const dis = 'a'.codePointAt() - 'A'.codePointAt();  // js에서는 자바와 같이 'a' - 'A' 같은 연산 시
                                                    // 내부적으로 숫자로 평가되어 연산되지는 않고
                                                    // NaN 결과값 도출.
let input = 't';                                    // 입력 문자로 가정.
let lowerCode = input.codePointAt();                

console.log(String.fromCodePoint(lowerCode - dis));