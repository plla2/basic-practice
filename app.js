const h1 = document.querySelector(".hello h1");
h1.innerText = "Click me!";
console.log(h1);

function handleTitleClick() {
  console.log("title was clicked");
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("offline!");
}
function handleWindowOnline() {
  alert("online!");
}

h1.addEventListener("click", handleTitleClick); // title을 클릭했을 때의 이벤트
h1.addEventListener("mouseenter", handleMouseEnter); // title위에 마우스를 올렸을 때의 이벤트
h1.addEventListener("mouseleave", handleMouseLeave); // title 위에서 마우스가 벗어났을 때의 이벤트

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
