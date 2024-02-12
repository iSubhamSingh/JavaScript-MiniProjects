let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let reference;
 
let num = Math.floor(Math.random()*90000) + 10000;
   
let startChange = function (){
    function changeColor() {
        let str = "ABCDEF";
        let char = str[Math.floor(Math.random()*str.length)];
        let color = `#${char}${num} `
        document.body.style.backgroundColor = color;
    }
     reference = setInterval(changeColor,1000);
}

let stopChange = function (){
    clearInterval(reference);
}

 
start.addEventListener('click', startChange);
stop.addEventListener('click', stopChange);