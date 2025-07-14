var cars=["car1","car2","car3","car4","car5","car6"];

cars.forEach(car);

function car(item , index){
    document.write(index + " => " + item + "<br>");
}

cars.forEach(add);

function add(item , index,array){
    array[index]= item+"0";
}
document.write("<br><br>after add using array <br> <br>")
cars.forEach(afteradd);

function afteradd(item , index){
    document.write(index + " => " + item + "<br>");
}