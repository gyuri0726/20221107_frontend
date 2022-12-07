/*
    동기(Synchronous)와 비동기 (Asynchronous)
       -동기 코드는 순서대로 동작한다. 실행결과를 기다린 후에 다음 코드가 실행된다.
          => 순서를 보장하기 때문에 흐름 파악하기에 좋다. 
          => 완료되기 전까지 다음 코드를 실행하지 않기 때문에 비효율적이다.
       -비동기 코드는 순서를 보장하지 않는다. 실행결과를 기다리지 않고 다음 코드를 실행시킨다. 비동기적으로 동작한다.
          => 순서를 보장하지 않기 때문에 흐름 파악이 비교적 어렵다.
          => 완료되기 전까지 기다리지 않고 다음 코드를 실행하기 때문에 효율적이다.
          => 콜백함수를 통해서 동기적인 코드처럼 작성을 했다. => 콜백지옥에 빠지기 쉽다.
          => 주로 서버에서 데이터를 받아오거나 이미지 파일을 로딩하는 것처럼 오래 걸리는 함수들 중에 비동기 함수가 많다.
       -JavaScript는 기본적으로 동기적인 프로그래밍언어다
          => 비동기 처리는 브라우저, node.js이 도와준다.
         
 
*/

function sum(a, b) {
  return a + b;
}

let num = sum(10, 5);
console.log(num);

console.log("반복문 시작");
for (let i = 0; i < 1000000000; i++) {}

//for문이 끝나기 전까지 실행되지 않는다.
console.log("반복문 끝");

//setTimeout(콜백함수, 지연시간(ms)):
console.log("setTimeout 시작");
setTimeout(function () {
  getMovie(render);
}, 2000);

function getMovie(callback) {
  callback("마녀2");
}

function render(title) {
  console.log(title);
}

function fetchDate() {}

/*Promise : 비동기 코드를 쉽게 처리할 수있는 객체.
       => 인자로 전달된 콜백함수의 첫번째 인자는 resolve, 두번째 인자는 reject 함수가 전달된다.
       => resolve(): 성공했을때. resolve에 전달된 값은 promise.prototype.then의 콜백함수의 첫번째 인자로 전달된다.
       => reject() : 실패했을때. 에러를 발생시킨다. promise.prototype.catch 의 첫번째 인자로 전달된다.
           => catch() 에러를 받아서 처리할때 사용하는 함수. 에러 처리를 안하면 promise.prototype.then 에러가 발생해서 이후의 코드
*/

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (true) {
      resolve(getData);
    } else {
      reject("데이터 조회 실패");
    }
  }, 2000);
});

promise
  .then(function (res) {
    console.log(res);
  })

  .catch(function (err) {
    console.log(err);
  });

function getData(title) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(title);
    }, 3000);
  });
}

// getData("마녀2").then((res) => {
//   renderMovie(res);
// });

// resolve-then : 성공한 데이터를 받아서 다른 처리
// reject-catch : 에러가 발생한다. 에러를 받아서 처리

/*

async/await : 비동기 처리 함수 
    -async 키워드를 함수 앞에 붙이면 Promise를 동기적으로 쉽게 처리할수 있는 함수로 변경된다.
    -Promise를 반환 하는 함수 앞에 await을 붙이면 resolve 혹은 reject 되기 전까지 다음 코드를 실행하지 않는다.
        => Promise의 결과를 반환한다. => await이 없으면 Promise 객체 자체를 반환 한다.
        => async 함수내에서 참조하면 resolve값을 참조하지만 async 함수의 리턴값은 해당 값을 resolve하는 Prmise가 반환된다.
        */

async function renderMovie(title) {
  //프로미스를 반환하는 함수 앞에 await 붙이면 resolve / reject 되기 전까지 다음 코드 실행하지 않는다.
  let res = await getData(title);
  console.log(res);
  return res;
}

let result = renderMovie("어벤져스");
console.log(result.then((res) => console.log(res)));

let songList = [
  { id: 1, title: "cheshire", singer: "ITZY" },
  { id: 2, title: "sadsad", singer: "Ikon" },
  { id: 3, title: "snow", singer: "ITZY" },
];

function getSong(id) {
  return new Promise(function (resolve, reject) {
    //Array.prototype.find(): filter와 비슷한데 처음 요소 하나만 반환한다.
    let song = songList.filter(function (song) {
      return id === song.id;
    });
    if (!song) reject("해당하는 노래가 없습니다");
    resolve(song);
  }, 3000);
}

getSong(3)
  .then(function (res) {
    document.body.innerHTML = `
    <h2> ${res.title} - ${res.singer}</h2>
    `;
  })

  .catch(function (err) {
    document.body.innerHTML = ` <h2>${err}</h2>`;
  });

async function renderSong() {}
