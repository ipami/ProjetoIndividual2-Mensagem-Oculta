/* Botão de codificar/decodificar*/

let code = document.getElementById('codificar');
let decode = document.getElementById('decodificar');
let bCode = document.getElementById('botaocod');

function alteraBotao() {
    if (code.checked) {
        bCode.innerText = "CODIFICAR MENSAGEM!"


    } else if (decode.checked) {
        bCode.innerText = "DECODIFICAR MENSAGEM!"
    }
}


/* Esconder/revelar o incremento */

let cifra = document.getElementById('cifra');
let base64 = document.getElementById('base64');
let divIncremento = document.getElementById('incremento');

cifra.addEventListener('click', function () {

    if (divIncremento.style.display == "none") {
        divIncremento.style.display = "block";
    } else {
        divIncremento.style.display = "block";
    }

});

base64.addEventListener('click', function () {


    if (divIncremento.style.display == "block") {
        divIncremento.style.display = "none";
    }


});


/* Botão transcrever - torna o valor do resultado o valor da caixa de entrada*/

let txtEntrada = document.getElementById('entradatxt');
let saidaTxt = document.getElementById('txtcodificado');

function transcreverTxt() {

    if (saidaTxt.value != 0) {
        txtEntrada.value = saidaTxt.value
    }
}


/* Base 64 */

let codeBase64 = '';
let decodeBase64 = '';
let valorIncremento = document.getElementById('incremento1');


function codeOrDecode() {

    let entrada = txtEntrada.value
    let textCode = entrada.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let stringSplit = textCode.split("")
    const verificacao = /\W|_/;


    if (textCode != '') {
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

            let codeCifra = '';

            if (code.checked) {

                for (let i = 0; i < stringSplit.length; i++) {
                    if (stringSplit[i] == ' ') {
                        codeCifra += ' ';
                    } else if (verificacao.test(stringSplit[i]) == true) {
                        codeCifra += stringSplit[i];
                    } else if (stringSplit[i] == stringSplit[i].toLowerCase()) {
                        let char = stringSplit[i].toUpperCase().charCodeAt(0);
                        let conversao = ((char - 65 + parseInt(valorIncremento.value)) % 26 + 65);
                        if (conversao < 65) {
                            while (conversao < 65) {
                                conversao = (conversao - 65) + 91
                            }
                        }
                        codeCifra += String.fromCharCode(conversao).toLowerCase();

                    } else {
                        let char = stringSplit[i].charCodeAt(0);
                        let conversao = ((char - 65 + parseInt(valorIncremento.value)) % 26 + 65);;
                        if (conversao < 65) {
                            while (conversao < 65) {
                                conversao = (conversao - 65) + 91
                            }
                        }
                        codeCifra += String.fromCharCode(conversao);
                    }
                }
                saidaTxt.value = codeCifra

            } else {

                let codeCifra = '';

                for (let i = 0; i < stringSplit.length; i++) {
                    if (stringSplit[i] == ' ') {
                        codeCifra += ' ';
                    } else if (verificacao.test(stringSplit[i]) == true) {
                        codeCifra += stringSplit[i];
                    } else if (stringSplit[i] == stringSplit[i].toLowerCase()) {
                        let char = stringSplit[i].toUpperCase().charCodeAt(0);
                        let conversao = ((char - 65 - parseInt(valorIncremento.value)) % 26 + 65);
                        if (conversao < 65) {
                            while (conversao < 65) {
                                conversao = (conversao - 65) + 91
                            }
                        }
                        codeCifra += String.fromCharCode(conversao).toLowerCase();

                    } else {
                        let char = stringSplit[i].charCodeAt(0);
                        let conversao = ((char - 65 - parseInt(valorIncremento.value)) % 26 + 65);
                        if (conversao < 65) {
                            while (conversao < 65) {
                                conversao = (conversao - 65) + 91
                            }
                        }
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

let mostrarInfo = document.getElementById('sobreoprojeto');
let modal = document.getElementById('modal');

mostrarInfo.addEventListener('click', function () {


    if (modal.style.display = "none") {
        modal.style.display = "flex";
    }

})

let fecharInfo = document.getElementById('botaofechar');

fecharInfo.addEventListener('click', function () {

    if (modal.style.display = "flex") {
        modal.style.display = "none";
    }


})