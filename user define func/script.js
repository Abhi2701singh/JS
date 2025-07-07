function greet(){
    var name= document.getElementById('name').value;
    document.getElementsByClassName('greet')[0].innerHTML = "Hello "+ name;
}