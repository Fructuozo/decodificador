var textInput = document.querySelector('#text');
var textOutput = document.querySelector('#output');

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    document.getElementById('output').innerHTML = '<textarea readonly id="text">' + resultCripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {
    
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="text">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('text');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}


function copiar() {
    var textoCop = document.querySelector('#output textarea');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}
