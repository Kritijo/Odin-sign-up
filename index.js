let password = document.querySelector("#password");
let confirm_password = document.querySelector("#confirm_password");

function validate(){
    if(password.value!==confirm_password.value){
        confirm_password.setCustomValidity('Passwords do not match');
    } else{
        confirm_password.setCustomValidity('');
    }
}

password.addEventListener("change",validate);
confirm_password.addEventListener("change",validate);