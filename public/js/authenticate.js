console.log('authenticatjs is running...');
let firstStep = document.querySelector('.first-step');
let secondStep = document.querySelector('.second-step');
let nextStep = document.querySelector('.nextstep');
let goback = document.querySelector('.goback');

let errMsg= document.querySelector('.err-msg');
let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let confirmPassword = document.querySelector('.confirm_password');
let checkbox = document.querySelector('#checkbox');
let passwordValidation = document.getElementById('password-validation-check');
let passwordNotMatched = document.getElementById('password-not-matched');
let form =document.querySelector('#signup');
let input = document.querySelectorAll('input');

form.addEventListener('keydown', function(event){
   if(event.keyCode === 13){
       console.log('keys match');
       event.preventDefault();
       nextStep.click();
   }
    
})

// eventlisnter occurs when matching confirmpassword with password.
confirmPassword.addEventListener('focus',function(){
    confirmPassword.addEventListener('keyup',function(){
        switch(confirmPassword.value){
            case password.value:{
                console.log('password has matched and this is comming from event of confirmpassword.');
                confirmPassword.style.backgroundColor  = 'rgba(150,250,150,0.5)';
                passwordNotMatched.style.display = 'none';
            break;
        }
            default:{
                console.log('password not matched.');
                confirmPassword.style.backgroundColor ='rgba(200,100,100,0.3)';
            break;}
        }
    })
})    

// handling Next step button, and checkbox if it is clicked for once incase yes then allow, if not then change the button to disable mood.

let checkCount = 0;
    checkbox.addEventListener('click',function(){
        checkCount += 1;
        console.log(checkCount);
        let mod = checkCount%2;
        console.log(mod);
        switch(mod){
            case 0:{
                nextStep.disabled =true;
                nextStep.style.backgroundColor = "grey";
                nextStep.style.opacity = '0.5';
                console.log('want to go next? click checkbox.');
                break;
            }
            
        default:{
            nextStep.disabled =false;
            nextStep.style.backgroundColor = "rgb(43, 185, 102)";
            nextStep.style.opacity = '1';
            console.log('All values are filled');
            
                nextStep.addEventListener('click',function() {
                    
                        if(fname.value  && lname.value && email.value && password.value && password.value.length >= 8 && password.value.length <=32 && password.value === confirmPassword.value){
                                
                                nextStep.disabled =false;
                                form.addEventListener('keydown', function(event){
                                    if(event.keyCode === 13){
                                        let submit = document.querySelector('#submit');
                                        console.log('keys match');
                                        event.preventDefault();
                                        submit.click();
                                    }
                                 })
                                firstStep.style.display = 'none';
                                secondStep.style.display = 'block';
                                goback.style.display = 'block';
                                goback.addEventListener('click',function(){
                                    firstStep.style.display = 'block';
                                    secondStep.style.display = 'none';
                                    goback.style.display = 'none';
                                    })
                        }else if(password.value.length <= 8 || password.value.length >=32 ){
                            passwordValidation.style.display = 'block';
                            passwordValidation.style.backgroundColor = 'rgba(200,100,100,0.5)';
                            passwordValidation.innerHTML= 'The length of password should be in between 8-32 char.';
                            console.log('password length is not matched');
                        }else if(password.value !== confirmPassword.value){
                            passwordNotMatched.style.display = 'block';
                            passwordNotMatched.style.backgroundColor = 'rgba(200,100,100,0.5)';
                            passwordNotMatched.innerHTML = 'passwords not matched!';
                        }
                    })
                      
                    
                    
        }
        break;
    }
    });

console.log('authjs end...')
