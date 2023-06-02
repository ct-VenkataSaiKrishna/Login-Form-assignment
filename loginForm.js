let userNameEl = document.getElementById("userName")
userNameEl.addEventListener("blur",displayUserNameConstraints);


var emailElement = document.getElementById("emailId");
emailElement.addEventListener("blur",displayEmailConstraints);

var passwordFun = document.getElementById("password");
passwordFun.addEventListener("blur",checkPassword);

var confirmedPassword = document.getElementById("confirm-password");
confirmedPassword.addEventListener("blur",confirmedPasswordChecking);


var isUserNameValid;
var isEmailValid;
var isPasswordValid;
var isConfirmPasswordValid;

// function displayUserNameConstraints(){
//     document.getElementById("warning").style.display = "block";
//     document.getElementById("warning").style.color = "red";
// }
// function hideUserNameConstraint(){
    
// }
function displayUserNameConstraints(){
    if( (userNameEl.value).length>=3 && (userNameEl.value).length<=25){
        document.getElementById("userNameWarning").style.display = "none";
        userNameEl.style.border = "2px solid green"
        isUserNameValid = true;
    }
    else{
        document.getElementById("userNameWarning").style.display = "block";
        document.getElementById("userNameWarning").style.color = "red";
        userNameEl.style.border = "2px solid red"
        isUserNameValid = false;
    }
}

function displayEmailConstraints(){
    if((emailElement.value).includes('@gmail.com') && document.getElementById("emailId").value.length >= 10 ){
        emailElement.style.border = "2px solid green";
        isEmailValid = true;
    }else if((emailElement.value).includes('@carwale.com') && (document.getElementById("emailId").value.length >= 10 )){
        emailElement.style.border = "2px solid green";
        isEmailValid = true;
    }else if((emailElement.value).includes('cartrade.com') && (document.getElementById("emailId").value.length >= 10 )){
        emailElement.style.border = "2px solid green";
        isEmailValid = true;
    }else if((emailElement.value).includes('bikewale.com') && (document.getElementById("emailId").value.length >= 10 )){
        emailElement.style.border = "2px solid green";
        isEmailValid = true;
    }else if((emailElement.value).includes('hotmail.com') && (document.getElementById("emailId").value.length >= 10 )){
        emailElement.style.border = "2px solid green";
        isEmailValid = true;
    }else{
        emailElement.style.border = "2px solid red";
        document.getElementById("emailWarning").style.color = "red";
        document.getElementById("emailWarning").style.display = "block";
        isEmailValid = false;
    }
    
}

function checkPassword(){
    var passwordContent= document.getElementById("password").value;
    function matchPassword(password)
    {
        var key = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[! @ # $ % ^ & * ( ) _ - = +]).+$/;
        return key.test(password);
    }
    var matched=matchPassword(passwordContent);
    if(passwordContent.length>=8){
        if(matched==true)
        {
            document.getElementById("password").style.border= "2px solid green";
            document.getElementById("passwordNotMatchWarning").style.display="none";
            isPasswordValid = true; 
        }
        else{
            document.getElementById("password").style.border= "2px solid red";
            document.getElementById("passwordNotMatchWarning").style.color = "red";
            document.getElementById("passwordNotMatchWarning").style.display="block";
            isPasswordValid = false;
        }
    }
    else{
        document.getElementById("password").style.border= "2px solid red";
        document.getElementById("passwordNotMatchWarning").style.color = "red";
        document.getElementById("passwordNotMatchWarning").style.display="block";
        isPasswordValid = false;
    }
}

function confirmedPasswordChecking(){
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("confirm-password").value;
    if(password1 === password2 && password2.length >=8){
        confirmedPassword.style.border = "2px solid green";
        document.getElementById("confirmedPasswordWarning").style.display = "none";
        isConfirmPasswordValid = true;
    }else{
        confirmedPassword.style.border = "2px solid red";
        document.getElementById("confirmedPasswordWarning").style.display = "block";
        document.getElementById("confirmedPasswordWarning").style.color = "red";
        isConfirmPasswordValid = false;

    }
}

var signupBtn = document.getElementsByClassName("signup-btn");
// signupBtn.addEventListener("click",validateform);

function validateform(){
    if(isUserNameValid === true && isEmailValid === true && isPasswordValid === true && isConfirmPasswordValid === true){
        alert('You are signed up');
        document.getElementById("loginForm").reset();//to clear the form values.
        history.go(0);//to refersh the page after signed up successfully.
    }else{
            alert('some details are not filled properly');
    }
}

function showPassword(){
    document.getElementById("password").setAttribute("type","text");
    document.getElementById("togglePassword").setAttribute("class","fa fa-eye-slash")
    var addMargin = document.getElementById("togglePassword");
    addMargin.style = "margin-left : -35px";

}
function hidePassword(){
    document.getElementById("password").setAttribute("type","password");
    document.getElementById("togglePassword").setAttribute("class","fa fa-eye");
}


