console.log(1);
console.log(2);
// 동기적 프로그램. 순차적으로 진행이 된다.

// setTimeout(function () {
//   // 비동기적 함수 _ 진행이 먼저 되면서 나중에 실행됨
//   console.log(3);
// }, 2000);

// console.log(4);

function fn1(callback) {
  setTimeout(function () {
    console.log(3);
  }, 3000);
  callback();
}

function fn2() {
  console.log(4);
}

fn1(fn2);
