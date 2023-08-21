var btnId = document.getElementById("btn2");
btnId.addEventListener('click', myFunc3);



function myFunc1(){
    document.getElementById("myImage").src = "off.png";
}

function myFunc2(){
    document.getElementById("myImage").src = "on.png";
}

var flag = true;

function myFunc3(){
    if(flag){
        document.getElementById("myImage").src = "off.png";
        flag = false;
}   else{
    document.getElementById("myImage").src = "on.png";
    flag = true;
}
    }

