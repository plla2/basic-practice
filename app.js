const title = document.querySelector(".hello h1");
title.innerText = "Click me!";
console.log(title);

function handleTitleClick() {
  console.log("title was clicked");
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick); // title을 클릭했을 때의 이벤트
title.addEventListener("mouseenter", handleMouseEnter); // title위에 마우스를 올렸을 때의 이벤트
title.addEventListener("mouseleave", handleMouseLeave); // title 위에서 마우스가 벗어났을 때의 이벤트
