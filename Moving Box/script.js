const box = document.getElementById("box");
const container = document.getElementById("container");
let position = {
  x: 0,
  y: 0,
};

document.addEventListener("keydown", function (event) {
  const step = 10;

  switch (event.key) {
    case "ArrowUp":
      if (position.y > 0) {
        position.y -= step;
      }
      break;
    case "ArrowDown":
      if (position.y < container.clientHeight - box.offsetHeight) {
        position.y += step;
      }
      break;
    case "ArrowLeft":
      if (position.x > 0) {
        position.x -= step;
      }
      break;
    case "ArrowRight":
      if (position.x < container.clientWidth - box.offsetWidth) {
        position.x += step;
      }
      break;
  }

  box.style.transform = `translate(${position.x}px, ${position.y}px)`;
});
