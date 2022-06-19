'use strict';

let nav = document.getElementById('nav'),
menu = document.getElementsByClassName('menu'),
li = document.getElementsByTagName('li'),
aLink = document.querySelectorAll('a'),
div = document.querySelector('div');

/* 
    < 요소의 id, 클래스명, 태그명 추출 및 변경 >

- 객체의 참조를 통해 요소의 id, 클래스명, 태그명을 추출 가능.
  참조를 통해 id, 클래스명은 변경이 가능하지만 태그의 변경은 불가.
  id, 클래스명은 기존에 id 나 클래스명이 존재했다면 새로운 id 나
  클래스명으로 변경을 하고 없었다면 새로 생성.

    < 형식 >

객체참조.id
객체참조.className
객체참조.tagName

*/

console.log(nav.id);                                    // HTML 기준 nav의 id명 출력
console.log(menu[0].className);                         // menu[0]에 해당하는 class명 출력
console.log(li[0].tagName);                             // li[0]에 해당하는 tag명 출력

// < id, 클래스명 변경 >
nav.id = 'navigation';                                  // 기존 id명인 'nav'에서 'navigation'으로 변경
menu[0].className = 'menuMail';                         // 기존 class명인 'menu mail'에서 'menuMail'로 변경

// < id, class 생성 >
div.id = 'container';                                   // div의 id명을 'container'로 지정
div.className = 'divBox';                               // div의 className을 'divBox'로 지정

/* ==================================================================================================== */
/* 
    < classList >

- 하나의 태그 참조에 대한 classList 필드는 해당 태그에 지정된 클래스명을 배열 형태로 반환.
  단, 배열 인덱싱을 통한 참조는 가능하지만 변경은 불가.

*/

console.log(aLink[1].classList);                        // aLink[1]에 해당하는 classList를 배열로 나열
console.log(aLink[1].classList[1]);                     // aLink[1]에 해당하는 classList 중 classList[1]에 해당하는 값 출력

// aLink[1].classList[1] = 'Cafe'                       // 인덱싱을 통한 변경 불가능

/* =================================================================================================== */
/* 
※ 하나의 태그에 배열 형태로 저장되는 클래스명을 add 와 remove 메서드를
   이용 추가 및 삭제 가능.
   클래스가 존재하지 않는 태그에 대한 add 메서드 호출은 클래스 속성을 생성하는 효과.


    < 태그의 기존 클래스명에 새로운 클래스명을 추가 >

형식    :     객체참조.classList.add( 문자열 형태의 클래스명 )


    < 태그의 기존 클래스명을 삭제 >

형식    :     객체참조.classList.remove( 문자열 형태의 클래스명 )
*/

// < class 추가 및 제거 >

li[0].classList.add('list1');                           // li[0]에 'list1'이라는 class 생성

aLink[3].classList.add('know');                         // aLink[3]에 'know'라는 class 생성
// aLink[3].classList.remove('knowledge');              // aLink[3]에 'knowledge'라는 class 제거

/* ==================================================================================================== */
/* 
    < contains >

- classList 에 지정한 클래스명이 존재하는지 여부를 반환.

형식    :     객체참조.classList.contains( 문자열 형태의 클래스명 )
*/

console.log(aLink[1].classList.contains('cafe'));       // aLink[1]에 해당하는 classList에 'cafe'가 있는지 없는지 boolean(true / false) 값으로 반환

/* ==================================================================================================== */
/* 
    < parentNode >

- 요소에 대한 부모 요소의 참조를 반환.

형식    :     객체참조.parentNode

*/

console.log(aLink[0].parentNode);                       // aLink의 부모 요소를 확인하여 출력
console.log(aLink[0].parentNode.parentNode);            // aLink의 부모 부모 요소를 확인하여 출력

// aLink[1].parentNode.parentNode.parentNode = 'list2'; // 이름을 만들거나 변경

/* ==================================================================================================== */
/* 
    < hasAttribute >

- 요소의 지정된 속성 존재 여부를  boolean 값으로 반환.

객체참조.hasAttribute( 문자열 형태의 속성명 )


    < getAttribute >

- 요소의 지정된 속성명에 대응되는 값(value)을 반환.

객체참조.getAttribute( 문자열 형태의 속성명 )


    < setAttribute >

- 요소의 지정된 속성명에 값(value)을 지정.
  요소에 지정된 속성이 존재하지 않으면 지정된 속성명에 대응되는 값을 새로 생성.

객체참조.setAttribute( 문자열 형태의 속성명, 문자열 형태의 값 )
*/

let input = document.querySelector('input'),
paragraphAll = document.querySelectorAll('div p');

if (input.hasAttribute('type')) {                       // input이 'type'이란 속성을 갖고 있는가?
    console.log(input.getAttribute('type'));            // 갖고 있다면 'type'명 출력
}

if (paragraphAll[0].hasAttribute('type')) {             // p가 'type'이란 속성을 갖고 있는가?
    console.log(paragraphAll.getAttribute('type'));     // 갖고 있다면 'type'명 출력
} else {                                                // 갖고 있지 않다면 console.log 출력
    console.log('해당 속성은 없습니다.');                
}

// < 새로운 속성을 추가할 때 >
for (let i = 0; i < paragraphAll.length; i++) {         
    if (!paragraphAll[i].hasAttribute('class')) {           // p가 'class' 속성을 갖고 있는가?
        paragraphAll[i].setAttribute('class', `p${i + 1}`); // 갖고 있다면 'class(속성명)'과 `p${i + 1}(밸류값)`을 출력
    }
}

// < 기존 존재하는 속성의 값을 변경 >
input.addEventListener('click', function () {
    this.setAttribute('type', 'text'); // this => input(자기 자신) // type을 text로 바꾸겠다
});

/* =================================================================================================== */
/* 
    < 사용자 정의 속성에 대한 접근 및 변경 - dataset >

- dataset 프로퍼티를 이용하여 사용자 정의 속성에 대한 접근 및 변경을 
  멤버연산자(.)를 통해 접두사(data-)가 없는 형식으로 접근 가능.
  사용자 정의 속성명이 존재하지 않는 경우에는 setAttribute 와 같이 사용자 속성에
  대응되는 값을 새롭게 추가.

형식    :     객체참조.dataset.접두사가_없는_사용자_속성명
*/

// data-count = 1

paragraphAll[0].dataset.count = 1;     // 새로운 사용자 정의 속성 추가
console.log(paragraphAll[0].dataset.count);

paragraphAll[0].dataset.bgcolor = 'red';

/* 
    접두사가_없는_사용자_속성명 지정시 단어 단위로 첫 글자에 대한 대문자 형태로 구분하면
    자동으로 단어 사이를 하이픈(-)으로 연결하고 연결 단어의 첫 글자를 소문자로 변경하여
    사용자 속성명이 새롭게 조립되는 것을 확인 가능.
*/

paragraphAll[0].dataset.textColor = 'blue';
paragraphAll[0].dataset.count = 2;     // 기존 사용자 정의 속성의 값 변경