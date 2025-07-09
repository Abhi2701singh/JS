function check(){
    var age=document.getElementById("age").value;
    
    if(age<18){
        document.getElementById("res").innerHTML = "You can not eligible for vote";
    }
    else{
        document.getElementById("res").innerHTML = "Yes, You can eligible for vote"; 
    }
}