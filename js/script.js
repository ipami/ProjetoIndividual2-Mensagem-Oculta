/* Botão de codificar/decodificar*/

var code = document.getElementById('codificar');
var decode = document.getElementById('decodificar');
var bCode = document.getElementById('botaocod');

function alteraBotao() {
    if (code.checked) {
        bCode.innerText = "CODIFICAR MENSAGEM!"


    } else if (decode.checked) {
        bCode.innerText = "DECODIFICAR MENSAGEM!"
    }
}


/* Esconder/revelar o incremento */

var cifra = document.getElementById('cifra');
var base64 = document.getElementById('base64');

cifra.addEventListener('click', function () {

    var divIncremento = document.getElementById('incremento');

    if (divIncremento.style.display == "none") {
        divIncremento.style.display = "block";
    } else {
        divIncremento.style.display = "block";
    }

});

base64.addEventListener('click', function () {

    var divIncremento = document.getElementById('incremento');

    if (divIncremento.style.display == "block") {
        divIncremento.style.display = "none";
    }


});


/* Botão transcrever - torna o valor do resultado o valor da caixa de entrada*/

// var transcrever = document.getElementById('botaotransc');
var txtEntrada = document.getElementById('entradatxt');
var saidaTxt = document.getElementById('txtcodificado');

function transcreverTxt() {

    if (saidaTxt.value != 0) {
        txtEntrada.value = saidaTxt.value
    }
}


/* Base 64 */

var codeBase64;
var decodeBase64;

var decodeCifra;
var valorIncremento = document.getElementById('incremento1');


function codeOrDecode() {

    let entrada = txtEntrada.value
    let stringSplit = entrada.split("")
    const verificacao = /\W|_/;


    if (entrada != '') {
        /*base 64 */

        if (base64.checked) {
            if (code.checked) {
                codeBase64 = btoa(txtEntrada.value)
                saidaTxt.value = codeBase64
            } else {
                decodeBase64 = atob(txtEntrada.value)
                saidaTxt.value = decodeBase64
            }

            /*cifra*/

        } else if (cifra.checked) {

            var codeCifra = '';

            if (code.checked) {

                for (var i = 0; i < stringSplit.length; i++) {
                    if (stringSplit[i] == ' ') {
                        codeCifra += ' ';
                    } else if (verificacao.test(stringSplit[i]) == true) {
                        codeCifra += stringSplit[i];
                    } else if (stringSplit[i] == stringSplit[i].toLowerCase()) {
                        var char = stringSplit[i].toUpperCase().charCodeAt(0);
                        var conversao = ((char - 65 + parseInt(valorIncremento.value)) % 26 + 65);
                        codeCifra += String.fromCharCode(conversao).toLowerCase();

                    } else {
                        var char = stringSplit[i].charCodeAt(0);
                        var conversao = ((char - 65 + parseInt(valorIncremento.value)) % 26 + 65);;
                        codeCifra += String.fromCharCode(conversao);
                    }
                }
                saidaTxt.value = codeCifra

            } else {

                var codeCifra = '';

                for (var i = 0; i < stringSplit.length; i++) {
                    if (stringSplit[i] == ' ') {
                        codeCifra += ' ';
                    } else if (verificacao.test(stringSplit[i]) == true) {
                        codeCifra += stringSplit[i];
                    } else if (stringSplit[i] == stringSplit[i].toLowerCase()) {
                        var char = stringSplit[i].toUpperCase().charCodeAt(0);
                        var conversao = ((char - 65 - parseInt(valorIncremento.value)) % 26 + 65);
                        codeCifra += String.fromCharCode(conversao).toLowerCase();

                    } else {
                        var char = stringSplit[i].charCodeAt(0);
                        var conversao = ((char - 65 - parseInt(valorIncremento.value)) % 26 + 65);;
                        codeCifra += String.fromCharCode(conversao);
                    }
                }
                saidaTxt.value = codeCifra

            }

        }
    } else {
        alert("Hm... Parece que você não inseriu o texto a ser codificado/decodificado. Por favor, insira o texto no local indicado.")
    }

}


/*modal com informações sobre o projeto*/

var mostrarInfo = document.getElementById('sobreoprojeto');
var modal = document.getElementById('modal');

mostrarInfo.addEventListener('click', function () {


    if (modal.style.display = "none") {
        modal.style.display = "flex";
    }

})

var fecharInfo = document.getElementById('botaofechar');

fecharInfo.addEventListener('click', function () {

    if (modal.style.display = "flex") {
        modal.style.display = "none";
    }


})