
var f=document.querySelector("form");

f.addEventListener('submit', (event)=>{
    var e=document.querySelector("#email");
    var phno=document.querySelector("#number");
    var pass1=document.querySelector("#pass1");
    var pass2=document.querySelector("#pass2");
   
    var error3=document.querySelector("#errormsg3");
    var error4=document.querySelector("#errormsg4");
    var error5=document.querySelector("#errormsg5");
    var error6=document.querySelector("#errormsg6");



    var flag=true;

    if(e.value.length!=0)
    {
        if (e.value.includes(' '))
        {
            flag=false;
            error3.innerHTML="*Email should not contain SPACE(' ')";

        }
        if (!e.value.includes("@"))
        {
            flag=false;
            error3.innerHTML="*Email should have contain ('@')";


        }
        if (!e.value.includes("."))
        {
            flag=false;
            error3.innerHTML="*Email should have contain dot('.')";
    
        }
    }
    if ((phno.value.length<10) || (phno.value.length>10))
    {
        flag=false;
        error4.innerHTML="*Number length should be 10";
    }
    if ((pass1.value.length<8) || (pass1.value.length>12))
    {
        flag=false;
        error5.innerHTML="*length should be 8 to 12";
    }
    if (pass1.value!==pass2.value)
    {
        flag=false;
        error6.innerHTML="*Oops!.. Password mis-matched!!";
    }
    else if ((pass1.value.length>=8) && (pass1.value.length<=12))
    {
        var alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var digit="0123456789";
        var s_chr="~!@#$%^&*()_';:><.?,";
        s_chr+='"{}[]/'
        var has_alpha=false;
        var has_digit=false;
        var has_s_chr=false;    

        for (i of pass1.value)
        {
            if (alpha.includes(i))
                has_alpha=true;

            if (digit.includes(i))
                has_digit=true;

            if (s_chr.includes(i))
                has_s_chr=true;

            if (has_alpha==true && has_digit==true && has_s_chr==true)
                break;
        }
        if (!has_alpha || !has_digit || !has_s_chr)
        {
            flag=false;
            error5.innerHTML="*Password should have 1 alphabet, 1 digit and 1 special character";
        }
            
    }

    if (!flag)
        {
            event.preventDefault();
        }
});

