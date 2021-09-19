let a, b, result;

function setValues() {
    a = Number(document.getElementById('num1').value);
    b = Number(document.getElementById('num2').value);
}

function tambah() {
    setValues();
    result = a + b;
    document.getElementById('hasil').value = result;
}

function kurang() {
    setValues();
    result = a - b;
    document.getElementById('hasil').value = result;
}

function kali() {
    setValues();
    result = a * b;
    document.getElementById('hasil').value = result;
}

function bagi() {
    setValues();
    result = a / b;
    document.getElementById('hasil').value = result;
}


function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("hasil").value = "";
}
