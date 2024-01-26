/* 

Calcule o IMC.
IMC = peso / (altura*altura)

Abaixo de 18.5: Abaixo do peso;
Entre 18.5 e 25: Peso normal;
Entre 25 e 30: Acima do peso;
Entre 30 e 40: Obeso;
Acima de 40: Obsesidade Grave;

*/

let peso = 150;
let altura = 1.8
let imc = peso / (altura*altura);

if (imc < 18.5) {
    console.log('Abaixo do Peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do Peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}