/*const alunos = ['João', 'Vitor', 'Malena'];



//Adicionar item na lista
alunos.push('Miguel');
alunos[4] = 'Josias';

// Remover da posição
// alunos.pop(); - remove o último da lista
// alunos.shift(); - remove o primeiro da lista

// Teste de verificação
console.log(alunos);
console.log(alunos.pop());
console.log(alunos);
*/

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

// notas.length - mostra o tamanho da lista.

console.log(notas.length);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;

}
const media = soma / notas.length;
console.log(soma);
console.log(media.toFixed(2));