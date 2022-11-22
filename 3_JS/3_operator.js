/*
    연산자(Operator) : 산술, 할당, 비교 등을 통해서 새로운 값을 생성.
    피연산자 : 연산에 사용되는 값.

*/

console.log(5-1);  //5에서 1을 빼서 1이라는 새로운 값 생성.
console.log(10 > 4); // 10과 4를 비교해서 true라는 새로운 값을 생성

//산술 연산자 : 피연산장 ㅔ산술을 통해서 새로운 값 생성
console.log(5 + 1);
console.log(10 - 4);
console.log(10 * 2);
console.log(10 / 3);
console.log(10 % 6); //나머지를 구하는 연산자
console.log(4 - 2 * 4); //사칙연산 적용 => 4-(2*4) => -4

//할당 연산자 : 우항의 값을 좌항에 할당한다.
var num = 10;
num = num + 10;
console.log(num);

//산술 할당 연산자: 자기 자신에 우항을 산술한 결과를 바로 할당한다.
var num02 = 20;
num02 *= 10 -5;
console.log(num02);


/* 단항 산술 연산자 : 1개의 피연산자에 산술을 적용하여 할당 
   ++ : 1을 증가시켜 할당
   -- : 1을 감소시켜 할당
   + : 값의 변화가 없다.
   - : 양수는 음수로, 음수는 양수로 반전시켜 할당.

   전위 연산자 : 피연산자의 앞에 사용. => 우선순위가 가장 먼저다.
   후위 연산자 : 피연산자의 뒤에 사용. =>우선순위가 가장 마지막이다 => 심지어 할당 연산자보다 늦다.

   */

var num03 = 5;
num03++; // 1을 증가시켜 num03에 할당

console.log(num03);
++num03;
var num04 = 10 + num03++;
console.log(num03);
console.log(num04);
console.log(num03--);
console.log(--num03);