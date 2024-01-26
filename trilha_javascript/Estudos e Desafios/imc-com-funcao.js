/* 

Calcule o IMC.
IMC = peso / (altura*altura)

Abaixo de 18.5: Abaixo do peso;
Entre 18.5 e 25: Peso normal;
Entre 25 e 30: Acima do peso;
Entre 30 e 40: Obeso;
Acima de 40: Obsesidade Grave;

*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura,2);
}

function classificarImc(imc) {

    if (imc < 18.5) {
        return 'Abaixo do Peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do Peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}

// Main
(function () {

    let peso = 75;
    let altura = 1.75;

    let imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
