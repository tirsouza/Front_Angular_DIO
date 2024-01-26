function verificaIdade(idade) {
    if (idade < 18) {
        console.log('Menor de Idade');
    } else {
        console.log('Maior de Idade');
    }
}

(function () {
    verificaIdade(16);
})();