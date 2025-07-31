var date = new Date();

function getdate(){
    document.getElementById('res').innerText = date;
}
function year(){
    document.getElementById('res').innerText = date.getFullYear();

}

function month(){
    monts=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    document.getElementById('res').innerText = monts[date.getMonth()];

}

function day(){
    days=['sun','mon','tue','wed','thr','fri','sat'];
    document.getElementById('res').innerText = days[date.getDay()];

}

function hours(){
    document.getElementById('res').innerText = date.getHours();
}
function min(){
    document.getElementById('res').innerText = date.getMinutes();
}
function sec(){
    document.getElementById('res').innerText = date.getSeconds();
}
function time(){
    document.getElementById('res').innerText = date.getTime();
}