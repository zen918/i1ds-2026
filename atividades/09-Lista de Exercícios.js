console.log("/---------------------------------parte 01---------------------------------/");
console.log("//");
var nome = "robson";
var idade = 36;
var cidade = "jau";

//Demonstrando no console várias informações e pulo de linha com \n
console.log(
  "Meu nome é",
  nome,
  "e eu tenho",
  idade,
  "anos\n",
  "e moro em",
  cidade,
);
console.log(
  "-------------------------------------------------------------------------",
);

var num1 = 45;
var num2 = 5;

var soma = num1 + num2;
var subtracao = num1 - num2;
var multiplicacao = num1 * num2;
var divisao = num1 / num2;
var restoDivisao = num1 % num2;

console.log("Somando", num1, " + ", num2, " = ", soma);
console.log("subtraindo", num1, " - ", num2, " = ", subtracao);
console.log("multiplicando", num1, " * ", num2, " = ", multiplicacao);
console.log("dididindo", num1, " / ", num2, " = ", divisao);
console.log("O Resto da Divisão do", num1, " % ", num2, " = ", restoDivisao);
console.log(
  "-------------------------------------------------------------------------",
);

var comprimento = 10;
var altura = 3;
var area = comprimento * altura;

console.log(
  "se a altura do retangulo é",
  altura,
  "e o comprimento é de",
  comprimento,
  "a area é =",
  area,
);
console.log(
  "---------------------------------------------------------------------------------------------",
);

var C = 10;
var L = 5;
var H = 3;
var volume = C * L * H;
console.log("se o comprimento do paralelepípedo é", C);
console.log("e a largura é", L);
console.log("e a altura é", H);
console.log("o volume é =", volume);
console.log(
  "-------------------------------------------------------------------------",
);

var valor = 100;
var desconto = 10 / 100;
var valorfinal = valor - valor * desconto;
console.log("valor do produto é de", valor);
console.log("alicando desconto de", desconto, "%");
console.log("total da compra é de", valorfinal);
console.log(
  "-------------------------------------------------------------------------",
);

var celcius = 20;
var fahrenheit = celcius * 1.8 + 32;

console.log(celcius, "graus celcius é igual a", fahrenheit, "graus fahrenheit");
console.log(
  "-------------------------------------------------------------------------",
);

var altura = 1.75;
var peso = 65;
var imc = peso / (altura * altura);
console.log(
  "uma pessoa que mede",
  altura,
  "e pesa",
  peso,
  "kg tem o imc =",
  imc,
);
console.log(
  "-------------------------------------------------------------------------",
);

var nota = 7;
var nota2 = 7;
var nota3 = 7;
var media = (nota + nota2 + nota3) / 3;
console.log(
  "a media final do aluno que tirou as notas",
  nota,
  nota2,
  nota3,
  "é de =",
  media,
);
console.log(
  "---------------------------------------------------------------------------------",
);


var a = 1;
var b = -5;
var c = 6;

var delta = (b ** 2) - (4 * a * c);

console.log("O valor de Delta é: " + delta); 
console.log(
  "-------------------------------------------------------------------------",
);

var hora = 5;
var minutos = hora * 60;
var segundos = hora * 3600;

console.log(hora, "horas é igua á", minutos, "min");
console.log(hora, "horas é igua á", segundos, "seg");

console.log("/---------------------------------parte 02---------------------------------/");
var num = -5;
var num1 = 0;
var num2 = 5;


if (num > 0) {
    console.log("Positivo");
} else if (num < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

if (num1 > 0) {
    console.log("Positivo");
} else if (num1 < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

if (num2 > 0) {
    console.log("Positivo");
} else if (num2 < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}
console.log("----------------------------------------------------------------------")

var numero = 10;
var numero1 = 9;


if (numero % 2 === 0) {
    console.log(numero + " é Par");
} else {
    console.log(numero + " é Ímpar");
}

if (numero % 3 === 0) {
    console.log(numero1 + " é Par");
} else {
    console.log(numero1 + " é Ímpar");
}
console.log("----------------------------------------------------------------------")

var num = 12;
var num1 = 4

if (num % 3 === 0) {
  console.log(num + " é múltiplo de 3.");
} else {
  console.log(num + " não é múltiplo de 3.");
}

if (num1 % 3 === 0) {
  console.log(num1 + " é múltiplo de 3.");
} else {
  console.log(num1 + " não é múltiplo de 3.");
}
console.log("----------------------------------------------------------------------")

function recuperação(nota) {
  let frase;
  if (nota < 5) {
    frase = "reprovado";
  } else if (nota >= 5 && nota <= 6) {
    frase = "recuperação";
  } else {
    frase = "aprovado";
  }
  return frase;
}
var idade = 4;
console.log("Idade:", idade, "-", recuperação(idade));
idade = 6;
console.log("Idade:", idade, "-", recuperação(idade));
idade = 7;
console.log("Idade:", idade, "-", recuperação(idade));
idade = 10;
console.log("Idade:", idade, "-", recuperação(idade));
console.log("----------------------------------------------------------------------")






