let nationBox = document.getElementsByClassName('nationBox'),
// nationBox = document.querySelectorAll('.nationBox'),
slide_img = document.querySelector('#main_container img'),
loop_img = ['../image/bg1.jpg', '../image/bg2.jpg', '../image/bg3.jpg', '../image/bg4.jpg', '../image/bg5.jpg']
beforeNation = nationBox[0];

/* 
네이션 박스 클릭했어
이미지 교체
이전요소 opacity 조정
클릭한 자기자신(this) opacity 조정
직전요소 = 현재요소
*/

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', function () {
        slide_img.setAttribute('src', `${loop_img[i]}`);
        beforeNation.style.opacity = '.5';
        // nationBox[i].style.opacity = '1'; // this를 적극 활용할 것
        // beforeNation = nationBox[i];      // this를 적극 활용할 것
        this.style.opacity = '1';
        beforeNation = this;
    })
}

// 복잡하거나 반복적인

/* ==================================================================================================== */

/* for (let j = 0; j < nationBox.length; j++) {
    nationBox[j].addEventListener('click', function () {
        click(this);
    });
}

function click(self) {
    slide_img.setAttribute('src', `${loop_img[self.textContent - 1]}`);
    beforeNation.style.opacity = '.5';
    self.style.opacity = '1';
    beforeNation = self
} */

/* ==================================================================================================== */

/* for (let j = 0; j < nationBox.length; j++) {
    nationBox[j].addEventListener('click', function () {
        click(this);
    })
}

function click(self) {
    slide_img.setAttribute('src', `../image/bg${self.textContent}.jpg`);
    beforeNation.style.opacity = '.5';
    self.style.opacity = '1';
    beforeNation = self
} */

/* ==================================================================================================== */

// 자기자신 전달
// 1. 인덱스 전달 2. 자기자신 컨텐츠 확인 가능

// aLink.getAttribute('a');
// nationBox.getAttribute('nationBox');

/* ==================================================================================================== */

/* 
< textContent와 getAttribute의 차이 >

textContent: HTML에 존재하는 값 그 자체를 반환

ex) <input type="button">
getAttribute: 특정 요소의 지정된 속성명에 대응되는 값(value)를 반환
setAttribute: 특정 요소의 지정된 속성명에 값(value)을 지정

    < getAttribute >

- 요소의 지정된 속성명에 대응되는 값(value)을 반환.

구조: 객체참조.getAttribute('문자열 형태의 속성명')


    < setAttribute >

- 요소의 지정된 속성명에 값(value)을 지정
  요소에 지정된 속성이 존재하지 않으면 지정된 속성명에 대응되는 값을 새로 생성.

구조: 객체참조.setAttribute('문자열 형태의 속성명', '문자열 형태의 값')

/* ==================================================================================================== */

// < 잘못된 예시 >
/* let nation1 = document.querySelector('.nation1'),
nation2 = document.querySelector('.nation2'),
nation3 = document.querySelector('.nation3'),
nation4 = document.querySelector('.nation4'),
nation5 = document.querySelector('.nation5');

nationBox[0].addEventListener('click', function (){
    slide_img.setAttribute('src', '../image/bg1.jpg');
    nationBox[0].style.opacity = '1';
    nation2.style.opacity = '.5'
    nation3.style.opacity = '.5'
    nation4.style.opacity = '.5'
    nation5.style.opacity = '.5'
})

nationBox[1].addEventListener('click', function (){
    slide_img.setAttribute('src', '../image/bg2.jpg');
    nationBox[1].style.opacity = '1';
    nation1.style.opacity = '.5'
    nation3.style.opacity = '.5'
    nation4.style.opacity = '.5'
    nation5.style.opacity = '.5'
})

nationBox[2].addEventListener('click', function (){
    slide_img.setAttribute('src', '../image/bg3.jpg')
    nationBox[2].style.opacity = '1';
    nation1.style.opacity = '.5'
    nation2.style.opacity = '.5'
    nation4.style.opacity = '.5'
    nation5.style.opacity = '.5'
})

nationBox[3].addEventListener('click', function (){
    slide_img.setAttribute('src', '../image/bg4.jpg')
    nationBox[3].style.opacity = '1';
    nation1.style.opacity = '.5'
    nation2.style.opacity = '.5'
    nation3.style.opacity = '.5'
    nation5.style.opacity = '.5'
})

nationBox[4].addEventListener('click', function (){
    slide_img.setAttribute('src', '../image/bg5.jpg')
    nationBox[4].style.opacity = '1';
    nation1.style.opacity = '.5'
    nation2.style.opacity = '.5'
    nation3.style.opacity = '.5'
    nation4.style.opacity = '.5'
}) */