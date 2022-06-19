'use strict';

document.write('<h3>목록</h3>');

document.write('<ul>');
for (let i = 0; i < 5; i++) {
    document.write(`<li>${i + 1}번 목록</li>`);
}
document.write('</ul>');

/* ==================================================================================================== */

document.write('<hr>');

document.write('<h1>중고차</h1>');
document.write('<hr>');

document.write('<h2>2021년식</h2>');
document.write('<ul>');
document.write('<li>세단</li>');
document.write('<ul>');
document.write('<li>그렌져</li>');
document.write('<li>소나타</li>');
document.write('<li>아반떼</li>');
document.write('<li>K7</li>');
document.write('<ol>');
document.write('<li>가솔린</li>');
document.write('<li><strong>디젤</strong></li>');
document.write('</ol>');
document.write('</ul>');
document.write('<li>SUV</li>');
document.write('<li>트럭</li>');
document.write('<li>봉고</li>');
document.write('</ul>');

document.write('<hr>');
document.write('<h2>2021년식</h2>');

document.write('<ul>');
document.write('<li>세단</li>');
document.write('<li>SUV</li>');
document.write('<ul>');
document.write('<li>산타페</li>');
document.write('<li>쏘렌토</li>');
document.write('<ol>');
document.write('<li><i>가솔린</i></li>');
document.write('<li>디젤</li>');
document.write('</ol>');
document.write('<li>셀토스</li>');
document.write('</ul>');
document.write('<li>트럭</li>');
document.write('<li>봉고</li>');
document.write('</ul>');

// for (let i = 0; i < 4; i++) {
//     document.write(`<li>${i + 1}번 목록</li>`);
// }

// document.write('ul>li{$}*4') => HTML이 아니기 때문에 emmet 사용 불가