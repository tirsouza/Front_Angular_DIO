class Pessoa {
    nome;
    idade;
    //anoDeNascimento;
        
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        //this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}`);
    } else if (pessoa2.idade > pessoa1.idade) {
        console.log(`${pessoa2.nome} é mais velho(a) que ${pessoa1.nome}`);
    } else {
        console.log(`${pessoa1.nome} é ${pessoa2.nome} tem a mesma idade`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

compararPessoas(vitor, renan);