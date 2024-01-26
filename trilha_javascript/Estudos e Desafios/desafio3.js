/*
Calcular a média de 3 notas obtidas por um aluno e imprimir sua média e classificação conforme a tabela abaixo: 

Média = (nota 1 + nota 2 + nota 3)/3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, aprovação;
*/

let nota1 = 4,
    nota2 = 2,
    nota3 = 8;

let media = (nota1 + nota2 + nota3)/3;

if (media < 5) {
    console.log(media.toFixed(2), 'Reprovado');
} else if (media >= 5 && media <= 7 ) {
    console.log(media.toFixed(2), 'Recuperação');
} else {
    console.log(media.toFixed(2), 'Aprovado');
}