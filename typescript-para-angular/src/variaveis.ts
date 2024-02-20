/*
* variaveis
*/

//tipos primitivos: boolean, number, string
let ligado=false;
let nome: string = "Tiago";
let idade: number = 30;
let altura: number = 1.86;

// tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangentes: any, void
let retornoView: any = false;
let retorno: void;

//objeto - sem previsibilidade
let produto: object = {
    name: "Tiago",
    cidade: "Uberlândia",
    idade: 26,
};

//objeto tipado - com previsibilidade
type ProdutoLoja= {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
}

/*------------------------------------------------*/