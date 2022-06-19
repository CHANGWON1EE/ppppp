console.log('콘솔 출력 테스트');
console.log('n = %d, k = %d', 4, 5.4);
console.log('n = %d, k = %i', 4, 5.4);

console.log('n1 = %d, n2 = %d\n', 1, 2, '출력완료');
console.log('n1 = %d, n2 = %d', 1, 2, '출력완료');

console.log(
    'n1 = %d, n2 = %d',
    3,
    8,
    '출력완료\n'
);

console.log(`n1 = %d, n2 = %d
`, 5, 8, '출력완료');

console.log(`

-------------------------

`);

console.log('2000년 ' + 10 + '월 ' + 21 + '일 ' + true + null);

console.log(`n1 = ${7}, n2 = ${9} 출력완료`);
console.log('n1 = ${7}, n2 = ${9} 출력완료');

process.stdout.write('개행 안하고 출력.');
process.stdout.write(`템플릿 ${(5)}`);