let signInForm = document.querySelector(".signInForm");

//submit 이벤트는 form 안에서 엔터키를 누르거나 submit 버튼을 누르면 일어난다.
signInForm.addEventListener("submit", function (e) {
  e.preventDefault(); // form 태그의 submit 이벤트는 새로고침이 일어나기 때문에 막는다.
  console.log("submit!");

  let form = new FormData(signInForm);
  console.log(form.entries());
  let obj = {};
  for (let pair of form.entries()) {
    obj[(pair[0] = pair[1])];
  }

  axios.post("http://101.101.43.218/users", obj).then(function (res) {
    console.log(res);
  });
});
