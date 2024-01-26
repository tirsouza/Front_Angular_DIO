/* Faça um programa para calcular o valor de uma viagem.
3 variáveis:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;
*/

let precoComb = 3.17;
let kmPorLitro = 9.5;
let distanciaEmKm = 90;

let litrosConsumidos = distanciaEmKm / kmPorLitro;
let valorViagem = precoComb * litrosConsumidos;

console.log(valorViagem.toFixed(2));