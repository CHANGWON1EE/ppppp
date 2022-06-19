let value;

// 초기화 시키지 않았을 때(아무것도 하지 않았을 때) = undefined
// 명시적으로 아직 초기화를 하지 않았다 할당되지 않은 상태다라는 것을 보여줄 때 = null

// let data = 1;
let cusName;
let cusAge;
let cusPhn = 'Phn';
let blank;

blank = '미입력';

// if (!cusName) {
//     console.log(`고객명 ${blank}`);
// }
// if (!cusAge) {
//     console.log(`나이 ${blank}`);
// }

/* ==================================================================================================== */

if (cusAge == undefined) {
    console.log(`나이 ${blank}`);
}

// if (cusName == undefined) {
//     console.log('미입력')
// }

// if (!cusName) {
//     console.log(blank);
// }

/* ==================================================================================================== */

// cusName = prompt('dd: ');
// cusAge = prompt('dd: ');
// cusPhn = prompt('dd: ');

// value = data;
// value = cusName;

// if (data) {
//     value = cusName;
//     if (cusName) {
//         value = cusAge;
//         if (cusPhn) {
//             value = cusPhn;
//         }
//     }
// }

/* ==================================================================================================== */

// if (cusName) {
//     value = cusAge;
//     if (cusAge) {
//         value = cusPhn;
//     }
// }

/* ==================================================================================================== */

// if (cusName) {
//     value = cusAge;
//     if (cusAge) {
//         value = cusPhn;
//     }
// }

// if (value) {
//     console.log(value);
// } else {
//     console.log('미입력')
// }

/* ==================================================================================================== */

// if (cusName == undefined) {
//     console.log('고객명 미입력')
// }

// if (cusAge == undefined) {
//     console.log('나이 미입력')
// }

// if (cusPhn == undefined) {
//     console.log('연락처 미입력')
// }

/* ==================================================================================================== */

// if (cusName == undefined) {
//     console.log(`고객명 ${blank}`);
// }

// if (cusAge == undefined) {
//     console.log(`나이 ${blank}`);
// }

// if (cusPhn == undefined) {
//     console.log(`연락처 ${blank}`);
// }

/* ==================================================================================================== */

// if (cusName == null || '') {
//     console.log(`고객명 ${blank}`);
// }

// if (cusAge == null || '') {
//     console.log(`나이 ${blank}`);
// }

// if (cusPhn == null || '') {
//     console.log(`연락처 ${blank}`);
// }

/* ================================================================================================== */

// if (cusName == null || '') {
//     cusName = '고객명 미입력'
// }

// if (cusAge == null || '') {
//     cusAge = '나이 미입력'
// }

// if (cusPhn == null || '') {
//     cusAge = '연락처 미입력'
// }

/* ================================================================================================== */

// if (!cusName) {
//     cusName = '미입력'
// }

// if (!cusAge) {
//     cusAge = '미입력'
// }

// if (!cusPhn) {
//     cusPhn = '미입력'
// }

/* ================================================================================================== */

// if (cusName == undefined) {
//     cusName = '미입력'
// }

// if (cusAge == undefined) {
//     cusAge = '미입력'
// }

// if (cusPhn == undefined) {
//     cusAge = '미입력'
// }