function calcularIMC()
{
    //Entrada de dados

let valorPeso = document.getElementById ("peso").value;
let valorAltura = document.getElementById ("altura").value;

//Procesamento

let valorFinal = valorPeso / (valorAltura*valorAltura);

//Saída

document.getElementById("resultado").textContent = "Valor final: " + valorFinal.toFixed(2) + "kg/m²";
}
