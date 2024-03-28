const toggleElm = document.getElementsByClassName("toggle_button");
// const toggleElm = document.getElementsByClassName("toggle_button")[0];으로 toggleElm을 선언할 경우, 밑에 있는 모든 코드에서 [0]을 떼어줘야 작동한다. (유사배열속의 0번째 인덱스 값만 취한다는 의미)
// [0]을 떼고 toggleElm에 const toggleElm = document.getElementsByClassName("toggle_button")로 데이터를 저장하여 선언할 경우, toggle_button이라는 클래스네임을 가진 모든 데이터값들을 유사배열형태 [a,b,c,...]로 저장하게 된다.
// const toggleElm = document.querySelector("div.toggle_button")
// 위와 동일한 표현임, 다만 querySelector은 아예 첫번째에서만 잡아오니까 [0]을 안붙이고 선언해야한다.





toggleElm[0].addEventListener("click", function(){
    // alert("click") //ㄱ
    toggleElm[0].classList.add("active") //ㄴ - 액티브상태로 만드는데에서 더이상 변동안되는상태까지.
})

let changToggle = true; // ㄷ 시작! -반복클릭으로 액티브, 무브 반복사용 가능하도록 코딩
toggleElm[0].addEventListener("click",function(){
    if(changToggle == true){
        toggleElm[0].classList.add("active")
        changToggle=false;
    }else{
        toggleElm[0].classList.remove("active")
        changToggle = true;
    }
}) // ㄷ끝!


// toggleElm[0].addEventListener("click",function(){
//     toggleElm[0].classList.toggle("active")
// })  // ㄹ - ㄷ과정이랑 동일한 코딩! (축약된 표현.)