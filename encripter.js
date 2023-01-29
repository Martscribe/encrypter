const encrypt = () => {
    let input = document.getElementById("input").value.toLowerCase();
    input = input.replace(/e/g, "enter");
    input = input.replace(/i/g, "imes");
    input = input.replace(/a/g, "ai");
    input = input.replace(/o/g, "ober");
    input = input.replace(/u/g, "ufat");
    document.getElementById("output").value = input;
    }

const decrypt = () => {
    let input = document.getElementById("input").value;
    input = input.replace(/enter/g, "e");
    input = input.replace(/imes/g, "i");
    input = input.replace(/ai/g, "a");
    input = input.replace(/ober/g, "o");
    input = input.replace(/ufat/g, "u");
    document.getElementById("output").value = input;
    }

const copy = async () => {
    let output = document.getElementById("output").value;
    try {
        await navigator.clipboard.writeText(output);
        console.log("Copied text: ", output);
        } catch (err) {
        console.error("Failed to copy text: ", err);
        }
}