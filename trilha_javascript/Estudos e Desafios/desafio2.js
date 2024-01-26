/* Faça um programa para calcular o valor de uma viagem.
3 variáveis:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

*/

let precoEtanol = 3.00;
let precoGasolina = 6.00;
let kmPorLitroEtanol = 9;
let kmPorLitroGasolina = 10;
let litrosConsumidos = 0;
let distanciaEmKm = 137;
let tipoCombustivel = 'Etanol'; //ou 'Gasolina'

if (tipoCombustivel === 'Etanol') {
    litrosConsumidos = distanciaEmKm / kmPorLitroEtanol;
    console.log((litrosConsumidos * precoEtanol).toFixed(2));
} else if (tipoCombustivel === 'Gasolina') {
    litrosConsumidos = distanciaEmKm / kmPorLitroGasolina;
    console.log((litrosConsumidos * precoGasolina).toFixed(2));
}