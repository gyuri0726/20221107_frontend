/*
1.빌트인(Built-in)
 -ECMAScript 사양에 정의 객체. 전역 공통의 기능을 제공한다.
 -표준이기 때문에실행환경에 상관없이 사용이 가능하다.

2.호스트 객체
 -개발의 편의성을 위해서 실행환경에서 제공하는 객체.
 -대표적인 예로 document는 html 문서에 대한 메서드와 프로퍼티를 제공하는 객체. => 브라우저가 제공.
 -실행 환경에 따라서 제공되는 호스트 객체가 달라진다.

3.사용자 정의 객체
 -사용자 필요에 따라 정의한 객체.

*/

/*
    전역 객체 
      -JavaScript 엔진이 가장 먼저 만드는 특수한 객체.
      -JavaScript가 실행되는 환경에 따라 달라진다. => 브라우저에서는 window, node.js 에서는 global을 통해서 접근 가능하다.
      -어디에도 속하지 않는 최상위 객체. => 프로토타입 상에서의 최상위를 의미하는게 아니다.
      -표준 빌트인 객체와 호스트 객체, var 키워드로 선언된 전역 변수, 전역함수를 프로퍼티 갖는다.
         => 전역 객체의 프로퍼티를 참조할때 전역 객체를 생략할수 있다. => window.document 와 documet는 동일한 객체를 가르킨다.
      -여기서는 브라우저 환경에서 생성되는 window 객체 위주로 설명한다.
      -ES11에서 도입된 globalThis를 통해서 실행환경 상관없이 접근이 가능하다.


*/

console.log(globalThis); //globalThis를 통해서 실행환경 관계없이 전역 객체에 접근이 가능하다

window.console.log("console");

var a = 1; // 전역 객체의 프로퍼티가 나온다.
console.log(window.a);

aa = 10;

function sum(a, b) {
  c = 10;
  return a + b;
}

//Date()날짜와 시간과 관련된 메서드와 프로퍼티를 제송하는 객체를 생성 => 생성된 객체를 참조하면 로컬 시간이출력된다.
//=> 1970년1월1일 기준으로 ms 단위로 경과한 시간
//=> 생성된 시점이 기준이 된다.

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1; // 1월이 0부터 시작한다.
let date = today.getDate();
let day = today.getDay(); // 0(일요일) ~ 6 (토요일)

console.log(year, month, date, day);

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
console.log(hours, minutes, seconds);

today.setFullYear(2021);
today.setMonth(9);
