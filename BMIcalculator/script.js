let form = document.querySelector('form');
 
form.addEventListener('submit',function(e){
    e.preventDefault();
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);

    if(isNaN(height) || isNaN(weight) || height == null || weight == null){
     alert("Please enter valid height and weight"); 
     return;
    }
    let bmi = (weight / ((height*height)/10000)).toFixed(2);

    let result = document.querySelector('.result');
     
    if(bmi < 18.6){
        result.innerHTML = `<span> Your bmi is ${bmi} <br><br>&nbsp&nbsp <span style ="color:red">Underweight </span></span>`;
    }
    else if(bmi >= 18.6 && bmi < 24.9){
        result.innerHTML = `<span> Your bmi is ${bmi} <br><br>&nbsp&nbsp <span style ="color:green">Normal </span> </span>`;
    }
    else{
        result.innerHTML = `<span> Your bmi is ${bmi} <br><br> &nbsp&nbsp <span style ="color:red">Overweight </span></span>`;
    }
})
