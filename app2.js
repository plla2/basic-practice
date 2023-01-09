const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }

  h1.classList.toggle(clickedClass); // 위의 주석처리 된 문장들과 똑같이 작동한다.
}

h1.addEventListener("click", handleTitleClick);
