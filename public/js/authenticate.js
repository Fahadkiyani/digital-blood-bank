let password = document.getElementById('password');
password.addEventListener('click', function(e){
    let email =document.getElementById('email').value;
    let emailCheck = document.querySelector('#email-validation-check');
    if (emailCheck.value =''){
        emailCheck.style.display = 'none';
    }else{
        emailCheck.style.display = 'block';
        emailCheck.style.background = "#F9A5A5";
    }
})

    // console.log(emailValidation);



let submit =document.getElementById('submit');
submit.addEventListener('click', function authenticateMe(e) {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    let passwordValidation = document.getElementById('password-validation-check');
    let passwordNotMatched = document.getElementById('password-not-matched');
    let submit =document.getElementById('submit');
    let form =document.querySelector('#signup');
    
    if (password.length < 8) {
        passwordValidation.style.display = "block";
        passwordValidation.style.background = "#F9A5A5";
        passwordValidation.innerHTML = "Passwords length is shorter than 8 character's"
    console.log('passwords length is less than 8 char')
    e.preventDefault();
    } else if( password.length > 32 ) {
        passwordValidation.style.display = "block";
        passwordValidation.style.background = "#F9A5A5";
        passwordValidation.innerHTML = "Password length is greater than 32 character's"
    console.log('passwords length is greater than 32 char');
    e.preventDefault();
    }else{ if (password === confirmPassword) {
        form.action = "/user/signup";
        form.method = "POST";
        submit.type = "submit";
        console.log('matched');
    }else {
        passwordNotMatched.style.display = "block";
        passwordNotMatched.style.background = "#F9A5A5";
        passwordNotMatched.innerHTML = "Passwords does not match"
        console.log('passwords not matched')
        e.preventDefault()
    }
}
    
});
console.log('scripts are runing')