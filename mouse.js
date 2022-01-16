//마우스 포지션에 대한 내용

const circle = document.querySelector(".circle");
const tail = document.querySelector(".tail");

let mouseX = 0;
let mouseY = 0;

function getMousePosition(e) {
  var eObj = window.event;
  mouseX = eObj.clientX;
  mouseY = eObj.clientY + document.documentElement.scrollTop;
}

function moveImg() {
  var m_x = parseInt(tail.style.left.replace("px", ""));
  var m_y = parseInt(tail.style.top.replace("px", ""));

  circle.style.left = mouseX + 15 + "px";
  circle.style.top = mouseY + 15 + "px";

  tail.style.left = Math.round(m_x + (mouseX - m_x + 15) / 5) + "px";
  tail.style.top = Math.round(m_y + (mouseY - m_y + 15) / 5) + "px";
}

document.onmousemove = getMousePosition; // 마우스가 움직이면 getMousePosition 함수 실행
setInterval("moveImg()", 30); //계속 반복하여 tail이 circle 좌표와 같아질때 까지

//go 버튼 클릭 시 난이도 정보를 가지고 다음 페이지로 이동
const goButton = document.querySelector("#goButton");
goButton.addEventListener("click", function (event) {
  if (levelstatus == 1) {
    location.href = "minesweeper.html?row=9&column=9&mine=10";
  } else if (levelstatus == 2) {
    location.href = "minesweeper.html?row=16&column=16&mine=40";
  } else if (levelstatus == 3) {
    let row = document.querySelector("#customRow").value;
    let column = document.querySelector("#customColumn").value;
    let mine = document.querySelector("#customMine").value;
    if (row == "" || column == "" || mine == "") {
      alert("custom 모드는 가로,세로,지뢰 수를 설정해야 시작할 수 있습니다!");
      return;
    } else {
      location.href =
        "minesweeper.html?row=" + row + "&column=" + column + "&mine=" + mine;
    }
  }
});
