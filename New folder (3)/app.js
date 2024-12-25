let passwordinput=document.getElementById("password");
let btn=document.getElementById("btn");
let result=document.getElementById("result");


btn.onclick = () => {
    let password = passwordinput.value;

    if (password.length < 8){
        result.textContent="Password is too short.";
        result.style.color="red";
    }
    else if (password===password.toUpperCase()) {
        result.textContent="Password must contain lower case letters!";
        result.style.color="red";
    }
    else if (password===password.toLowerCase()) {
        result.textContent="Password must contain upper case letters!";
        result.style.color="red";
    }
    else
    {let hasDigit=false;
        for (let i = 0; i < password.length; i++) {
            if (!isNaN(password[i])) {
                hasDigit=true;
                break;
            }
            
        }
        if (hasDigit) {
            result.textContent="Password is strong.";
            result.style.color="green";
        }else{
            result.textContent="Password must contain a digit";
            result.style.color="red";}
        
    }
}


