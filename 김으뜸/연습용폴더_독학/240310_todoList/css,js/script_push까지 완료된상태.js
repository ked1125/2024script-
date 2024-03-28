const todoElm = document.getElementsByClassName("todo")[0];
const btnElm = document.getElementsByClassName("btn")[0];
const vListElm = document.getElementsByClassName("vList")[0];

const viewList = ["한성용", "홍길동", "이순신"];

btnElm.addEventListener("click", function () {
  console.log(todoElm.value);

  viewList.push(todoElm.value);
  todoElm.value = "";

  let textList = "";
  for (let i = 0; i < viewList.length; i++) {
    textList += `<li><div>${viewList[i]}</div><div>삭제</div></li>`;
  }
  //   여기까진 저장만 함! 콘솔에 textList 라고 쳐보면 저장된값 확인가능

  vListElm.innerHTML = textList;
  //   결과물 출력
});
