function openCalc() {
    document.getElementById('calc').classList.toggle('active');
    document.getElementById('open-calc').classList.toggle('active');
}

function closeCalc() {
    document.getElementById('calc').classList.toggle('active');
    document.getElementById('open-calc').classList.remove('active');
}


function mathPlus() {
    var num1 = parseInt(document.getElementById('number1').value),
        num2 = parseInt(document.getElementById('number2').value),
        res = num1 + num2;
    
    document.getElementById('result').innerHTML = res.toFixed(2);
}

function mathMinus() {
    var num1 = parseInt(document.getElementById('number1').value),
        num2 = parseInt(document.getElementById('number2').value),
        res = num1 - num2;
    
    document.getElementById('result').innerHTML = res.toFixed(2);
}

function mathMultiply() {
    var num1 = parseInt(document.getElementById('number1').value),
        num2 = parseInt(document.getElementById('number2').value),
        res = num1 * num2;
    
    document.getElementById('result').innerHTML = res.toFixed(2);
}

function mathDevide() {
    var num1 = parseInt(document.getElementById('number1').value),
        num2 = parseInt(document.getElementById('number2').value),
        res = num1 / num2;
    
    document.getElementById('result').innerHTML = res.toFixed(2);
}

function mathStepen() {
    var num1 = parseInt(document.getElementById('number1').value),
        num2 = parseInt(document.getElementById('number2').value),
        res = num1 ** num2;
    
    document.getElementById('result').innerHTML = res.toFixed(2);
}