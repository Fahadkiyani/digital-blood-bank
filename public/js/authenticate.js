// let form = document.querySelector('#signup');
submit.addEventListener('click', function authenticateMe() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    let passwordNotMatched = document.getElementById('password-not-matched');
    let submit =document.getElementById('submit');
    let form =document.querySelector('#signup');

    
    
    if (password === confirmPassword) {
        form.action = "/user/signup";
        form.method = "POST";
        submit.type = "submit";
        console.log('matched');
    } else {
        passwordNotMatched.style.display = "block";
        passwordNotMatched.style.background = "#F9A5A5";
        passwordNotMatched.innerHTML = "Passwords does not match"
        console.log('passwords not matched')
    }
    
});
