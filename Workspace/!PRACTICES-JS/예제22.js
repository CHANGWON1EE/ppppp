'use strict';

// let visibility = document.getElementsByClassName('visibility')
let scrollTop = document.getElementsByClassName('scrollTop');
// let scrollTop = querySelector('.scrollTop');
let scrollBox = document.querySelector('.scrollBox');

/* =================================================================================================== */
// < visibility(scroll) >

document.addEventListener('scroll', () => {
    let posY = parseInt(window.scrollY);

    if (posY > window.innerHeight * .3) {
        scrollTop[0].classList.add('visibility');
    } else {
        scrollTop[0].classList.remove('visibility');
    }

    setTimeout(() => {
        scrollBox.style.display = 'none';
    }, 5000);
});

/* =================================================================================================== */
// < scrollTop >

scrollTop[0].addEventListener('click', () => {
    let posY = parseInt(window.scrollY);

    window.scroll(0, 0)

    backScroll(() => window.scroll(0, posY -= 5));
    function backScroll(backSc) {
        let stopTimeout = setInterval(() => {
            backSc();

            if(posY < 0) {                        // 실행이 되면서 안에서 판단
                clearInterval(stopTimeout);
            }
        }, 5);
    }
})

/* =================================================================================================== */
// < scrollBox >

document.addEventListener('scroll', () => {
    let posX = parseInt(window.scrollX),      // parseInt
    posY = parseInt(window.scrollY);          // 문자열 형태로서, 소수점 아래 부분을 제외한 정수 부분만 추출
    // 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
    // let posX = Math.trunc(window.screenX), // Math.trunc
    // posY = Math.trunc(window.screenY);     // 숫자 형태로서, 정수 부분만 추출
    // 함수는 주어진 값의 소수부분을 제거하고 숫자의 정수부분을 반환합니다.

    scrollBox.style.display = 'block';
    scrollBox.innerHTML = `스크롤량<br>( x = ${posX}, y = ${posY})`;
});

/* =================================================================================================== */
// < answer - scrollTop >

/* let scrollTop = document.querySelector('.scrollTop');

document.addEventListener('scroll', () => {        // 현재 
    if (scrollY > window.innerHeight * .3) {       // 현재 좌표값(scrollY) > 브라우저 내부 * .3 크기보다 클 때
        scrollTop.classList.add('visible');        // 'visible' class 추가
    } else {
        scrollTop.classList.remove('visible');     // 'visible' class 제거
    }
}) */

/* =================================================================================================== */
// < answer - scroll >

/* scrollTop.addEventListener('click', () => {
    let posY = scrollY, posX = scrollX;             // posX(scrollX)를 변수로 지정할 필요는 없지만, 
                                                    // 동기식 | 
    let scrollActive = setInterval(() => {
        scroll(posX, posY -= 5);                    // 비동기식 | 실행이 되면서 안에서 판단
                                                    // 밖에서 실행할 경우 변수 이후 코드가 바로 종료됨
        if (posY <= 0) clearInterval(scrollActive); // 위에서 적용한 변수를 clearInterval에 삽입
    }, 5);
}); */

/* 
예측하기 어려운 이벤트 => 비동기식
사용자가 직접적으로 사용하는 이벤트 => 동기식 | 예측 가능
*/