function cal(){
    var opr1 = document.getElementById('name1').value;
    var opr2 = document.getElementById('name2').value;

    var ope = document.getElementById('ope').value;
    
    if (ope=='+'){
        var res = parseInt(opr1) + parseInt(opr2);
        document.getElementById("res").value = res;
    }

    if (ope=='-'){
        var res = parseInt(opr1) - parseInt(opr2);
        document.getElementById("res").value = res;
    }
    if (ope=='*'){
        var res = parseInt(opr1) * parseInt(opr2);
        document.getElementById("res").value = res;
    }
    if (ope=='/'){
        var res = parseInt(opr1) / parseInt(opr2);
        document.getElementById("res").value = res;
    }
    
    
}