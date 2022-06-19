'use strict'

let clipslideIndex = 0;
clipshowSlides();

function clipshowSlides() {
    let i;
    let clipslides = document.getElementsByClassName("clipSlides");
    for (i = 0; i < clipslides.length; i++) {
        clipslides[i].style.display = "none";
    }
    clipslideIndex++;
    if (clipslideIndex > clipslides.length) { clipslideIndex = 1 }
    clipslides[clipslideIndex - 1].style.display = "block";
    setTimeout(clipshowSlides, 2000);
}