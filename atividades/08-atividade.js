/*****************************************************
Lista de Exercícios
*****************************************************/
/*
Dada a matriz abaixo, faça um programa em JavaScript
que imprima os elementos da sua diagonal principal.
| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
********************************************************
Dada a matriz abaixo, faça um programa em JavaScript
que multiplique seus elementos por um valor x e imprima
a matriz antes e após a multiplicação.
| 8 1 3 |
| 2 9 1 |
| 4 6 2 |
*/

var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
console.table(matriz);

console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);
console.log(matriz[0][2]);
console.log(matriz[1][1]);
console.log(matriz[2][0]);

console.log("-------------------------------------------------------------");

var matriz1 = [
  [8, 1, 3],
  [2, 9, 1],
  [4, 6, 2],
];
let x = 4

console.table(matriz1);

for (let linha = 0; linha < matriz1.length; linha++) 
  for (let coluna = 0; coluna < matriz1[0].length; coluna++)
    matriz1[linha][coluna]*= x;


console.table(matriz1);
