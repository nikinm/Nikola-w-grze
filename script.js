function randomSigns() {
  var signs = ["%", "$", "#", "@", "!", "^", "*", "&", "(", ")"];
  return signs[Math.floor(Math.random() * signs.length)];
}

let screens = document.querySelectorAll(".screen");
function rain() {
  screens.forEach((screen) => {
    let element = document.createElement("div");
    element.classList.add("drop");
    screen.appendChild(element);

    let screenWidth = screen.clientWidth;

    let left = Math.floor(Math.random() * (screenWidth - 40));
    element.style.left = left + "px";

    let size = Math.random() * (5 - 1) + 1;
    element.style.fontSize = 35 + size + "px";

    element.innerText = randomSigns();

    let duration = Math.random() * 1 + 1;
    element.style.animationDuration = duration + "s";

    setTimeout(() => {
      element.remove();
    }, duration * 1000);
  });
}

const rainInterval = setInterval(rain, 50);

setTimeout(() => {
  clearInterval(rainInterval);
  screens.forEach((screen) => {
    screen.style.transition = "background-color 3s";
    screen.style.backgroundColor = "black";

    setTimeout(() => {
      screen.innerHTML = "<h1>NIKOLA<br>W GRZE</h1>";
    }, 3000);
  });
}, 5000);
