'use strict';

// window.scrollX => window 생략 가능

/* ==================================================================================================== */

let li = document.getElementsByTagName('li');

window.addEventListener('load', () => {         // load 기능 설정 시 'window' 사용함에 주의
    for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = 'yellow';
    }
})

/* ==================================================================================================== */

let scrollBox = document.querySelector('.scrollBox');

document.addEventListener('scroll', () => {
    let posX = parseInt(window.scrollX),
    posY = parseInt(window.scrollY);
    // let posX = Math.trunc(window.screenX),
    // posY = Math.trunc(window.screenY);

    scrollBox.style.display = 'block';
    scrollBox.innerHTML = `스크롤량<br>( x = ${posX}, y = ${posY})`;

/* ==================================================================================================== */

    /* if (posX > 500 || posY > 500) {
        window.scroll(0, 0);        // x값과 y값 모두 0, 0 으로 설정
        // window.scrollTo(0, 0);   // scroll과 scrollTo 기능 동일
    } */

/* ==================================================================================================== */

    /* if (posX > 500) {
        let stopTimeout = setInterval(() => {
            window.scroll(posX -= 5, posY);

            if (posX <= 0) {
                clearInterval(stopTimeout);
            }
        }, 5);
    };

    if (posY > 500) {
        let stopTimeout = setInterval(() => {
            window.scrollBy(posX, -5);
            posY = parseInt(window.scrollY);
        
            if (posY <= 0) {
                clearInterval(stopTimeout);
            }
        }, 5);
    }; */

/* ==================================================================================================== */

    if (posX > 500) {
        backScroll(() => window.scroll(posX -= 5, posY));
    }

    if (posY > 500) {
        backScroll(() => window.scroll(posX, posY -= 5));
    }

    function backScroll(backSc) {
        let stopTimeout = setInterval(() => {
            backSc();

            if(posX < 0 || posY < 0) {
                clearInterval(stopTimeout);
            }
        }, 5);
    }

    setTimeout(() => {
        scrollBox.style.display = 'none';
    }, 5000);

});
