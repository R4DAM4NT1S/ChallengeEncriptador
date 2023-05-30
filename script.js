function encriptar() {
    var texto = document.getElementById("inputText").value.toLowerCase();
    //i sirve para afectar tanto minuscula como mayuscula
    //g sirve para toda la oracion
    //m afecta al parrafo
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("muneco1der").style.display = "none";
    document.getElementById("texto1der").style.display = "none";
    document.getElementById("texto2der").innerHTML = txtCifrado;
    document.getElementById("copiarr").style.display = "show";
    document.getElementById("copiarr").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("inputText").value.toLowerCase();
    //i sirve para afectar tanto minuscula como mayuscula
    //g sirve para toda la oracion
    //m afecta al parrafo
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("muneco1der").style.display = "none";
    document.getElementById("texto1der").style.display = "none";
    document.getElementById("texto2der").innerHTML = txtCifrado;
    document.getElementById("copiarr").style.display = "show";
    document.getElementById("copiarr").style.display = "inherit";
}

function copy() {
    var contenido = document.querySelector("#texto2der");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió el texto Encriptado!");
}