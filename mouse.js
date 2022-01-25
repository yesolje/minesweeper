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


