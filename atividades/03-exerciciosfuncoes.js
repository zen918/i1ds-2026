/*****************************************************
Lista de Exercícios
*****************************************************/
/*
1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa a retorne sua idade.

2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. Considere que o
 veículo faz uma média de 12 Km/L.
*/

function subtrair(valor1, valor2) {
  return valor1 - valor2;
}

let v1 = 2026;
let v2 = 2008;

console.log("A idade é de v1 - v2 =", subtrair(v1, v2));

function multiplicar(valor3, valor4) {
  return valor3 * valor4;
}

let v3 = 5;
let v4 = 12;

console.log("A distancia percorida é de v1 * v2 =", multiplicar(v3, v4));
