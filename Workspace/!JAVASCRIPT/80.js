'use strict';

let list = document.querySelectorAll('.slide_list li'),
    end_index = list.length,
    bg_img = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg'];

for (let i = 0; i < end_index; i++) {
    list[i].style.background = `url(/image/${bg_img[i]}) no-repeat 0/cover`;
}

let i = 0;

/* ==================================================================================================== */
// < x % y 나머지를 이용해서 배열의 범위를 정하는 방법>

setInterval(() => {
   let idx = i % list.length;
   
   list[idx].style.opacity = 0;
   list[idx].style.left = '100%';

   i++;

   idx = i % list.length;
   list[idx].style.opacity = 1;
   list[idx].style.left = 0;
}, 2000);

/* ==================================================================================================== */

/* setInterval(() => {
    list[i].style.opacity = 0;
    list[i].style.left = '100%';
    
    i++;
    i = i % end_index;
    console.log(i % end_index);
    list[i].style.left = 0;
    list[i].style.opacity = 1;
}, 2000); */

/* ==================================================================================================== */

/* function loop() {
    list[i].style.opacity = 0;
    list[i].style.left = '100%';
    
    if (i >= end_index - 1) {
        i = -1;
    }

    i++;

    list[i].style.left = 0;
    list[i].style.opacity = 1;
}

setInterval(loop, 2000); */

/* ==================================================================================================== */
// < 실패작 - 무식한 방법 >

// list[0].style.opacity = '1';
// list[0].style.left = '100%';
// list[1].style.left = '0';
// list[1].style.opacity = '1';

// list[1].style.opacity = '0';
// list[1].style.left = '100%';
// list[2].style.left = '0';
// list[2].style.opacity = '1';

// list[2].style.opacity = '0';
// list[2].style.left = '100%';
// list[3].style.left = '0';
// list[3].style.opacity = '1';

// list[3].style.opacity = '0';
// list[3].style.left = '100%';
// list[4].style.left = '0';
// list[4].style.opacity = '1';

// list[4].style.opacity = '0';
// list[4].style.left = '100%';
// list[0].style.left = '0';
// list[0].style.opacity = '1';

/* ==================================================================================================== */
