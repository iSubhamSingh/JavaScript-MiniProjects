let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reference;

let startChange = function () {
  function changeColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
  }
  reference = setInterval(changeColor, 1000);
};

let stopChange = function () {
  clearInterval(reference);
};

start.addEventListener("click", startChange);
stop.addEventListener("click", stopChange);
