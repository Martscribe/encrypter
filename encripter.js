const encrypt = () => {
    // Obtener el valor del campo de texto
    const input = document.getElementById("input").value;
    let output = "";
    // Recorrer cada letra del texto y reemplazarla según las reglas especificadas
    for (const letter of input) {
        switch (letter) {
        case "e":
            output += "enter";
            break;
        case "i":
            output += "imes";
            break;
        case "a":
            output += "ai";
            break;
        case "o":
            output += "ober";
            break;
        case "u":
            output += "ufat";
            break;
        default:
            output += letter;
    }
    }
    // Mostrar el resultado en la pantalla
    document.getElementById("output").innerHTML = output;
    // Copiar el resultado a la portapapeles
    navigator.clipboard.writeText(output);
};
const decrypt = () => {
    // Obtener el valor del campo de texto
    const input = document.getElementById("input").value;
    let output = "";
    
    // Recorrer cada letra o secuencia del texto y reemplazarla con su letra original
    let i = 0;
    while (i < input.length) {
    switch (input.substring(i, i + 5)) {
        case "enter":
            output += "e";
            i += 5;
            break;
        case "imes":
            output += "i";
            i += 4;
            break;
        case "ai":
                output += "a";
                i += 2;
                break;
        case "ober":
                output += "o";
                i += 4;
                break;
        case "ufat":
                output += "u";
                i += 4;
                break;
        default:
            output += input[i];
            i++;
    }
    }
    // Mostrar el resultado en la pantalla
    document.getElementById("output").innerHTML = output;
    // Copiar el resultado a la portapapeles
    navigator.clipboard.writeText(output);
};

// Asignar las funciones a los botones
    const encryptBtn = document.getElementById("encrypt-btn");
    encryptBtn.addEventListener("click", encrypt);

    const decryptBtn = document.getElementById("decrypt-btn");
    decryptBtn.addEventListener("click", decrypt);  
    