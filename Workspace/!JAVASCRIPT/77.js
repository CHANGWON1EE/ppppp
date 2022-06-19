'use strict';

// location.href 경로 출력

// 디폴트 블랭크
// left top 뷰포트 기준으로
// 팝업창 지정 => feature를 지정하느냐 안하느냐

/* ==================================================================================================== */

let btn = document.getElementsByTagName('button');

// 현재 페이지에 로드1

console.log(location.href);

btn[0].addEventListener('click', () => {
    location.href = 'test.html';
});

/* ==================================================================================================== */

// 현재 페이지에 로드2
btn[1].addEventListener('click', () => {
    window.open('test.html', '_self');
});

/* ==================================================================================================== */
// 다른 탭에 로드
btn[2].addEventListener('click', () => {
    window.open('test.html');
});

/* ==================================================================================================== */
// 새로운 팝업창1에 로드

let popup1, popup2;

btn[3].addEventListener('click', () => {
    popup1 = open('test.html', '팝업창1', 'width=300px, height=300px');
});

/* ==================================================================================================== */
// 새로운 파업창2에 로드(화면 중앙정렬)
btn[4].addEventListener('click', () => {
    let locationX = (screen.width - 300) / 2;
    let locationY = (screen.height - 300) / 2;
    
    // let locationX = screenLeft + (screen.width - 300) / 2;

    popup2 = open('test.html', '팝업창2', `width=300px, height=300px, left=${locationX}px, top=${locationY}px`); 
    popup2.resizeTo(300, 300);

    // popup2 = open('test.html', '팝업창2', `left=${locationX}px, top=${locationY}px`); 
    // popup2.resizeTo(300, 300);
});

/* ==================================================================================================== */
// 모든 팝업창 닫기
btn[5].addEventListener('click', () => {

    popup1.close();
    popup2.close();
})

