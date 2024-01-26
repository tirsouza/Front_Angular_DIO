/* 

2 - Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura*altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça a José para dizer o valor do seu IMC;

*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (Math.pow(this.altura,2));
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return('Abaixo do Peso');
        } else if (imc >= 18.5 && imc < 25) {
            return('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return('Acima do Peso');
        } else if (imc >= 30 && imc < 40) {
            return('Obeso');
        } else {
            return('Obesidade Grave');
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.calcularImc());
console.log(jose.classificarImc());
const renan = new Pessoa('Renan', 63, 1.75);
console.log(renan.calcularImc());
console.log(renan.classificarImc());
const tiago = new Pessoa('Tiago', 65, 1.6);
console.log(tiago.calcularImc());
console.log(tiago.classificarImc());