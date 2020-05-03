const emailCheck = () =>{
    let email = document.getElementsByName('email')[0].value;
    let emailMessage = document.getElementsByName('emailmessage')[0];

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        emailMessage.style.display = 'none';
        return true;
    }
    else if(email == ""){
        emailMessage.innerHTML = "Empty field"
        emailMessage.style.display = 'block';
        return false;
    }
    else {
        emailMessage.innerHTML = "That's not a valid e-mail"
        emailMessage.style.display = 'block';
        return false;
    }
}

const termsCheck = () =>{
    let terms = document.getElementsByName("checkboxG1")[0];
    if(terms.checked) return true;
    else return false;
}

const reCaptcha = () =>{
    let Cap = document.getElementsByName("checkboxG2")[0];
    if(Cap.checked) return true;
    else return false;
}

const passwordCheck = () => {
    let password1 = document.getElementsByName("password1")[0].value;
    let passmessage = document.getElementsByName('pass1message')[0];
    let message = 'Password is missing:';
    let isPasswordGood = true;

    if(!(/[a-z]/.test(password1))){
        isPasswordGood = false;
        message+= " small letter";
    }
    if(!(/[A-Z]/.test(password1))){
        if(!isPasswordGood) message+= ", big letter";
        else message+= " big letter";
        isPasswordGood = false;
    }
    if(!(/\d/.test(password1))){
        if(!isPasswordGood) message+= ", number";
        else message+= " number";
        isPasswordGood = false;
    }
    let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(!(format.test(password1))){
        if(!isPasswordGood) message+= ", special sign";
        else message+= " special sign";
        isPasswordGood = false;
    }
    if(!isPasswordGood){
        passmessage.style.display = 'block';
        passmessage.innerHTML = message;
        return false;
    }else{
        passmessage.style.display = 'none';
        return true;
    }
}

const passwordCheckMatch = () => {
    let password1 = document.getElementsByName("password1")[0].value;
    let password2 = document.getElementsByName("password2")[0].value;
    let pasMes = document.getElementsByName("pass2message")[0];
    if(password1 == password2) {
        pasMes.style.display = 'none';
        return true;
    }
    else {
        pasMes.style.display = 'block';
        return false;
    }
}

const formCheck = () => {
    if(passwordCheck() && termsCheck() && reCaptcha() && emailCheck()){
        alert("Formularz wyslano")
        
    }
    else{
        console.log("eh")
    }
}

const email = document.getElementsByName('email')[0];
email.addEventListener('input', emailCheck);

const password1 = document.getElementsByName("password1")[0];
password1.addEventListener('input',passwordCheck)

const password2 = document.getElementsByName("password2")[0];
password2.addEventListener('focusout', passwordCheckMatch)

const button = document.getElementsByName('submit')[0];
button.addEventListener('click', function(event){
    event.preventDefault();
    formCheck();
});

