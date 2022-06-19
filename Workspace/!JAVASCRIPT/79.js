'use strict';

/* let slide_list = document.querySelector('.slide_list');
let btn = document.getElementsByTagName('a');
let index =  document.getElementsByTagName('li');
let i = 0;

// 람다식을 사용할 경우 this 사용 불가

btn[0].addEventListener('click', function () {
    i--;
    slide_list.style.left = `${-400 * i}px`;
    if (i <= 0) {
        this.classList.add('nonVisible')
    } else {
        btn[1].classList.remove('nonVisible')
    }
})

btn[1].addEventListener('click', function () {    
    i++;
    slide_list.style.left = `${-400 * i}px`;
    if (i >= index.length - 1) {
        this.classList.add('nonVisible')
    } else {
        btn[0].classList.remove('nonVisible')       
    }
}) */

// ==================================================================================
// < answer >

let slide_list = document.querySelector('.slide_list'),
    slide_list_li = document.querySelectorAll('.slide_list li'),
    slide_btn = document.querySelectorAll('.main_container a');

let slide_cnt = 0; // 최초 위치
let slideList_length = slide_list_li.length -1;

// < 오른쪽 버튼 >
/* slide_btn[1].addEventListener('click', function () {
    slide_cnt++;
    slide_list.style.right = `${100 * slide_cnt}%`;

    if (slide_cnt >= slideList_length) {
        this.classList.add('nonVisible');
    } else {
        slide_btn[0].classList.remove('nonVisible');
    }
}) */

// < 왼쪽 버튼 >
/* slide_btn[0].addEventListener('click', function () {
    slide_cnt--;
    slide_list.style.right = `${100 * slide_cnt}%`;

    if (slide_cnt <= 0) {
        this.classList.add('nonVisible');
    } else {
        slide_btn[1].classList.remove('nonVisible');
    }
}) */

// ==================================================================================

// 참조 => 람다식, 익명함수

function slideActive (slideMove, checkEnd, self, other) {
    slide_cnt += slideMove;
    slide_list.style.right = `${100 * slide_cnt}%`;

    if (checkEnd()) {
        self.classList.add('nonVisible');
    } else {
        other.classList.remove('nonVisible');
    }
}

// < 오른쪽 버튼 >
slide_btn[1].addEventListener('click', function () {
    slideActive(1, () => slide_cnt >= slideList_length, this, slide_btn[0]);
})

// < 왼쪽 버튼 >
slide_btn[0].addEventListener('click', function () {
    slideActive(-1, () => slide_cnt <= 0, this, slide_btn[1]);
})

// 람다식: () => checkEnd