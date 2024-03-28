const todoElm = document.getElementsByClassName("todo")[0];
const btnElm = document.getElementsByClassName("btn")[0];
const vListElm = document.getElementsByClassName("vList")[0];
const aDelElm = document.getElementsByClassName("allDel")[0];

let viewList = [];
// const로 선언한 변수는 다시 사용을 못하니까? 변화를 못시키니까? let으로 바꿔줬는데..이해안감..ㅜㅜ

btnElm.addEventListener("click", function () {
  console.log(todoElm.value);

  if (todoElm.value != "") {
    viewList.push(todoElm.value);
    viewData();
  } else {
    alert("오늘의 할일을 입력하세요");
  }
});

function vListDel(idx) {
  console.log("삭제 완료 : " + idx);
  viewList.splice(idx, 1);
  viewData();
}

function viewData() {
  todoElm.value = "";

  let textList = "";

  if (viewList.length > 0) {
    for (let i = 0; i < viewList.length; i++) {
      textList += `<li><div>${viewList[i]}</div><div class='del' onclick="vListDel(${i})">🗑️</div></li>`;
    }
    //   여기까진 저장만 함! 콘솔에 textList 라고 쳐보면 저장된값 확인가능

    //   결과물 출력
  } else {
    // viewData 함수를 다른곳에서도 함께 이용하기 위해 따로 빼놨다

    // btnElm.addEventListener("click", function () {});
    // $(".btn").on("click,function(){}");
    textList = "healing😎";
  }

  vListElm.innerHTML = textList;
}

aDelElm.addEventListener("click", function () {
  viewList = [];
  viewData();
});

viewData();

todoElm.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault(); // 기본 엔터 이벤트 제거
    btnElm.click(); // 버튼 클릭과 동일한 효과를 내기 위해 버튼 클릭 호출
  }
});
