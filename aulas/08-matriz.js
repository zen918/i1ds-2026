// Criando uma matriz
var matrix = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
  [1, 3, 9],
];
console.table(matrix);

//obtendo elemento com base e seus indices

console.log(matrix[0][1]);
console.log(matrix[2][0]);

/******************************************************* 
                    exercicio
********************************************************/
/*
1. crie uma matrix 3x3
2. imprima os valores da diagonal principal
3. altere os valores do item matrix[1][2] para 20 e matrix[2][0] para 30
*/
console.log("-----------------------------------------------------------------------")

var matriz = [
  [7, 9, 2],
  [3, 6, 0],
  [1, 4, 5],
];
console.table(matriz);


console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);
console.log(matriz[0][2]);
console.log(matriz[1][1]);
console.log(matriz[2][0]);

matriz[1][2] = 20
matriz[2][0] = 30

console.table(matriz);







