/*

1 - Criar uma classe para representar carros. Os carros possuem uma marca, uma cor, um gasto médio de combustívl por Kilômetro rodado. Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.

*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularViagem(precoCombustivel, distanciaEmKm) {
        return this.gastoMedioPorKm * distanciaEmKm * precoCombustivel;
    }

}

const uno = new Carro('Fiat', 'prata', 1/12);
console.log(uno);

const palio = new Carro('Fiat', 'preto', 1/10);

console.log(uno.calcularViagem(5,70));
console.log(palio.calcularViagem(5,70));