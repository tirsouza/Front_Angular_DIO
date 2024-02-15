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

/*
** arrays
*/
let dados: string[] = ["João", "Maria", "Tiago"];
let dados2: Array<string> = ["João", "Maria", "Tiago"];

let infos: (string | number)[] =["Tiago", 30, "João", 77];

/*------------------------------------------------*/

/*
*** Tuplas - respeitar ordem das operações
*/

let boleto:[string, number, number] = ["agua conta", 199.90, 32342342];

/*
 **** arrays métodos 
*/

/*
* Datas
*/
let aniversario:Date = new Date("2022-12-01 05:00");
//console.log(aniversario.toString());

//funções
function addNumber(x: number, y: number): number{
    return x+y;
}

function addToHello(name: string){
    return `Hello ${name}`;
}

function CallToPhone(phone: number | string): number | string {
    return phone;
}

async function getDatabase(id: number): Promise<string> {
    return "Tiago";
}

let soma: number = addNumber(4,7);

console.log(CallToPhone("1113133333"));

