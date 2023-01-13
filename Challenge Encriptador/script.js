function encriptar()
{
    btnCopiar.disabled = false;
    var input = document.querySelector(".textareaingresarTexto");
    var mensaje = input.value;
    mensaje = mensaje.toLowerCase()
    var mensajeCifrado = mensaje.replace(/e/igm,"enter");
    mensajeCifrado = mensajeCifrado.replace(/i/igm,"imes");
    mensajeCifrado = mensajeCifrado.replace(/a/igm,"ai");
    mensajeCifrado = mensajeCifrado.replace(/o/igm,"ober");
    mensajeCifrado = mensajeCifrado.replace(/u/igm,"ufat");
    
    document.getElementById("imagen-salida").style.display = "none";
    document.getElementById("texto-Salida").style.display = "none";
    document.CapturoTextarea.valorsalida.value =  mensajeCifrado;
    document.getElementById("btnCopiar").style.display = "inherit";
}

function desencriptar()
{   
    btnCopiar.disabled = false;
    var input = document.querySelector(".textareaingresarTexto");
    var mensaje = input.value;
    mensaje = mensaje.toLowerCase()
    var arr = ["enter", "imes" ,"ai", "ober", "ufat"];
    var arr2 = ["e", "i", "a", "o", "u"];

    for(var posicion = 0; posicion <  arr.length; posicion++)
    {

        palabra = mensaje.indexOf(arr[posicion]);
        var largo = arr[posicion].length
        while (palabra >= 0)
        {
            mensaje = mensaje.slice(0, palabra) + arr2[posicion] + mensaje.slice(palabra + largo);
            palabra = mensaje.indexOf(arr[posicion]);
        }
    }

    document.getElementById("imagen-salida").style.display = "none"; //asi se indica para ocultar una imagen
    document.getElementById("texto-Salida").style.display = "none";
    document.CapturoTextarea.valorsalida.value =  mensaje;
    document.getElementById("btnCopiar").style.display = "inherit";
}

function copiarTexto()
{
    let textoCopiar = document.querySelector("#textareaSalirTexto");
    textoCopiar.select();
    navigator.clipboard.writeText(textoCopiar.value);
    alert("se copio! ✓ ");
}

function limpiarTexto() 
{
    btnCopiar.disabled = true;
    document.querySelector(".textareaSalirTexto").value = "";
    document.querySelector(".textareaingresarTexto").value = "";
    document.getElementById("imagen-salida").style.display = ""; //asi se coloca para mostrar la imagen cuando esta oculta
    document.getElementById("texto-Salida").style.display = "";
}

/*
function encriptar1()
{
    var arr = [];
    var arr2 = [];
    var mensaje = input.value;
    mensaje = mensaje.toLowerCase()
    arr = mensaje.split('');

    for(var posicion = 0; posicion <=  arr.length; posicion++)
    {
        if (arr[posicion] == "e")
        {
            arr2.push("enter") ;
        }
        else
        {
           if(arr[posicion] == "i") 
           {
                arr2.push("imes") ;
           }
           else
           {
                if(arr[posicion] == "a")
                {
                    arr2.push("ai") ;
                }
                else
                {
                    if(arr[posicion] == "o")
                    {
                        arr2.push("ober") ;
                    } 
                    
                    else
                    {  
                        if(arr[posicion] == "u")
                        {
                            arr2.push("ufat") ;
                        }

                        else
                        {
                            arr2.push(arr[posicion]);
                        }
                        
                    }
                }
           }
           
        }
    }
    mensaje = arr2.join('');
    document.CapturoTextarea.valorsalida.value =  mensaje;

}

var button1 = document.querySelector(".btnEncriptar");
button1.onclick = encriptar;

var button2 = document.querySelector(".btnDesencriptar");
button2.onclick = desencriptar;

var button3 = document.querySelector(".btnCopiar");
button3.onclick = copiarTexto;
*/