// var fruits= ["apple","mango","pineapple","banana"];
// var vegitable=["potato","ladyfinger","ginger"];
// document.write("<br><br> -----isArray()-----<br> <br>");
// document.write(Array.isArray(fruits));
// document.write("<br><br> -----valueOf()----- <br><br>");
// document.write(fruits.valueOf());
// document.write("<br><br> -----join()-----<br> <br>");
// document.write(fruits.join(" - "));
// document.write("<br><br> -----concat()-----<br> <br>");
// document.write("<br>"+fruits);
// document.write("<br>"+vegitable);
// document.write("<br><br>");
// document.write(fruits.concat(vegitable));
// document.write("<br><br> -----indexOf()----- <br><br>");
// document.write(fruits.indexOf("banana"));



var fruits=["mango","apple","pineapple","banana"];
var demo = fruits;

document.getElementById('res').innerText = demo;

function pop(){
    demo.pop();
    document.getElementById('res').innerText = demo;
}
function push(){
    var x = prompt("enter a fruit name");
    demo.push(x);
    document.getElementById('res').innerText = demo;
}

function slice(){
    var x = demo.slice(1);
    document.getElementById('res').innerText = x;
}

function reverse(){
    demo.reverse();
    document.getElementById('res').innerText = demo;
}

function shift(){
    var x = demo.shift();
    document.getElementById('res').innerText = x;
}


