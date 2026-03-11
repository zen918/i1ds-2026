/***************************************************** 
Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta; 
*/

let pessoa = "robsom";
let banco = "tangamandapio";
let agencia = 51815;
let conta = 9118;
let saldo = 500000;

console.log("pessoa :", pessoa);
console.log("banco :", banco);
console.log("numero da agencia :", agencia);
console.log("numero da conta :", conta);
console.log("saldo total de :", saldo);

console.log("pix trasferido no valor de: 100000");
saldo = saldo - 100000
console.log("pix recebido no valor de: 200000");
saldo = saldo + 200000
console.log("pix trasferido no valor de: 50000");
saldo = saldo - 50000
console.log("pix trasferido no valor de: 100000");
saldo = saldo - 100000
console.log("pix recebido no valor de: 300000");
saldo = saldo + 300000

console.log("pessoa :", pessoa);
console.log("banco :", banco);
console.log("numero da agencia :", agencia);
console.log("numero da conta :", conta);
console.log("saldo total de :", saldo);