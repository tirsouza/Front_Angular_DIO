"use strict";
/*
* variaveis
*/
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Tiago";
let idade = 30;
let altura = 1.86;
// tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
// tipos abrangentes: any, void
let retornoView = false;
let retorno;
//objeto - sem previsibilidade
let produto = {
    name: "Tiago",
    cidade: "Uberlândia",
    idade: 26,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};
/*------------------------------------------------*/
/*
** arrays
*/
let dados = ["João", "Maria", "Tiago"];
let dados2 = ["João", "Maria", "Tiago"];
let infos = ["Tiago", 30, "João", 77];
/*------------------------------------------------*/
/*
*** Tuplas - respeitar ordem das operações
*/
let boleto = ["agua conta", 199.90, 32342342];
/*
 **** arrays métodos
*/
/*
* Datas
*/
let aniversario = new Date("2022-12-01 05:00");
//console.log(aniversario.toString());
//funções
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
function CallToPhone(phone) {
    return phone;
}
let soma = addNumber(4, 7);
console.log(CallToPhone("1113133333"));
