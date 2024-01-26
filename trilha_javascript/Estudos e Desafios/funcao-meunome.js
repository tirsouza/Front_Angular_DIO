function escrevaMeuNome(nome) {
    console.log('Meu nome é ' + nome);
}

function verificaIdade(idade) {
    if (idade < 18) {
        console.log('Menor de Idade');
    } else {
        console.log('Maior de Idade');
    }
}

(function () {
    escrevaMeuNome('Tiago');
    escrevaMeuNome('Joao');
    verificaIdade('17');
})();