let button = document.querySelectorAll('.button');
let body = document.querySelector('body');
 
button.forEach(function(button){
    button.addEventListener('click', function (e){
        body.style.backgroundColor = e.target.id;
         
    })
})
 
