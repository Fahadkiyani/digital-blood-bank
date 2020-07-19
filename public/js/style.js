console.log("hello world");
let firstStep = document.querySelector('.first-step');
let secondStep = document.querySelector('.second-step');
let nextStep = document.querySelector('#nextstep');
let goback = document.querySelector('.goback');

nextStep.addEventListener('click',function(){
    firstStep.style.display = 'none';
    secondStep.style.display = 'block';
    goback.style.display = 'block';
    goback.addEventListener('click',function(){
        firstStep.style.display = 'block';
        secondStep.style.display = 'none';
        goback.style.display = 'none';
    })
})
