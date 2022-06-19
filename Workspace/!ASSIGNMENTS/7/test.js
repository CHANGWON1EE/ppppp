// < button >

// let img = document.querySelector('.img');
let img = document.querySelectorAll('.mySlides img');
let im = document.querySelector('.im');
let input = document.querySelectorAll('input');
let button = document.querySelectorAll('button');
let numbertext = document.getElementsByClassName('numbertext');
let text = document.getElementsByClassName('text');
let dot = document.getElementsByClassName('dot');

let i = 1;

/* ==================================================================================================== */
// < leftbutton >

button[0].addEventListener('click', () => {
    if (i > 1) {
        i--;
    } else if (i <= 1) {
        i = img.length;
    }
    
    numbertext[0].textContent = `${i} / ${img.length}`;
    text[0].textContent = `Caption${i}`;

    dot[i - 1].className += " active";
    dot[i].className = dot[i - 1].className.replace(" active", "");

    // img[0].setAttribute('src', `image/section_image${i}.jpg`);
    img[0].src = `image/section_image${i}.jpg`;
})

/* ==================================================================================================== */
// < rightbutton >

button[1].addEventListener('click', () => {
    if (i < img.length) {
        i++;
    } else if (i >= img.length) {
        i = 1
    }
    numbertext[0].textContent = `${i} / ${img.length}`;
    text[0].textContent = `Caption${i}`;

    dot[i - 1].className += " active";
    dot[i - 2].className = dot[i - 1].className.replace(" active", "");
    // dot[0].className = dot[img.length - 1].className.replace(" active","");
    // dot[dot.length - 1].className.replace(" active", "");

    // img[0].setAttribute('src', `image/section_image${i}.jpg`);
    img[0].src = `image/section_image${i}.jpg`;

})

/* ==================================================================================================== */

/*     input[0].addEventListener('click',()=> {
        im.setAttribute('src', `image/section_image${i}.jpg`);
        // im.src = `image/section_image${i}.jpg`;
        i--;

        if (i < 0) {
            i++;
        }
    });

    input[1].addEventListener('click',()=> {
        im.setAttribute('src', `image/section_image${i}.jpg`);
        // im.src = `image/section_image${i + 1}.jpg`;
        i++;

        if (i > 6) {
            i--;
        }
    }); */

// input[0].addEventListener('click',()=> {
//     // im.setAttribute('src', 'image/bg2.jpg');
//     im.src = 'image/section_image2.jpg';
// })

// input[1].addEventListener('click',()=> {
//     im.setAttribute('src', 'image/section_image1.jpg');
// })