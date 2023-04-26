const fonts = ["cursive", "sans-serif", "serif", "monospace"];
let captchaValue = "";
initCaptcha();
function validation(){
    var name=document.getElementById("name").value;
    var lastName=document.getElementById("lastName").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    var error_message=document.getElementById("error_message");
    var captcha = document.getElementById("captcha-form").value;
    var text;

    error_message.style.padding="10px";

    if (name.length <2) {
        text= "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if (lastName.length <2) { 
        text= "Please Enter Correct Last Name";
        error_message.innerHTML = text;
        return false;
    }

    if (isNaN(phone) || phone.length != 11) {
        text= "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }

    if (email.indexOf("@")== -1 || email.length <6) {
        text= "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if (message.length <=140){
        text= "Please Enter More Than 140 Characters";
        error_message.innerHTML = text;
        return false;
    }

    if(captcha.length == 0)
    {
        text = "Please Enter the Captcha";
        error_message.innerText = text;
        return false;
    }

    if(captcha != captchaValue)
    {
        text = "Please Re-Enter the Captcha";
        error_message.innerText = text;
        return false;
    }

    alert("Form Submitted Successfully!")
    return true;
}
    
    function generateCaptcha(){
        let value = btoa(Math.random()*1000000000);
        value = value.substring(0, 5+Math.random()*5);
        captchaValue = value;
    }
    function setCaptcha()
    {
        let html = captchaValue.split("").map((char)=>{
            const rotate = -20 + Math.trunc(Math.random()*30);
            const font = Math.trunc(Math.random()*fonts.length);
            return `<span
            style = "
            transform:rotate(${rotate}deg);
            font-family:${fonts[font]}
            "
            >${char}</span>`
        }).join("");
        document.querySelector(".wrapper .Captcha .preview").innerHTML = html;
    }
    function initCaptcha(){
        document.querySelector(".wrapper .Captcha .captcha-refresh").addEventListener("click", function(){
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
    }