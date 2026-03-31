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

function recuperação(nota) {var frase;
  if (nota < 5) {
    frase = "reprovado";
  } else if (nota >= 5 && nota <= 6) {
    frase = "recuperação";
  } else {
    frase = "aprovado";
  }
  return frase;
}
var nota = 4;
console.log("nota:", nota, "-", recuperação(nota));
nota = 6;
console.log("nota:", nota, "-", recuperação(nota));
nota = 7;
console.log("nota:", nota, "-", recuperação(nota));
nota = 10;
console.log("nota:", nota, "-", recuperação(nota));
console.log("----------------------------------------------------------------------")

function podeVotar(idade) {
  var frase;
  if (idade < 16) {
    frase = "Não pode Votar";
  } else if (idade >= 18 && idade <= 69) {
    frase = "Pode votar, e é obrigatório!";
  } else {
    frase = "Pode votar, mas é opcional!";
  }
  return frase;
}
var idade = 22;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 26;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 13;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 70;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 17;
console.log("Idade:", idade, "-", podeVotar(idade));
console.log("----------------------------------------------------------------------")

var num = 25; 
var num1 = 79; 

if (num >= 10 && num <= 50) {
    console.log("O número está entre 10 e 50.");
} else {
    console.log("O número está fora do intervalo.");
}

if (num1 >= 10 && num1 <= 50) {
    console.log("O número está entre 10 e 50.");
} else {
    console.log("O número está fora do intervalo.");

}
console.log("----------------------------------------------------------------------")

var login = "robson";
var senha = "819";

var loginUser = "adm";
var senhaUser = "1234";

if (loginUser == login && senhaUser == senha) {
  console.log("Login Realizado com Sucesso!");
}

if (loginUser == login && senhaUser == senha) {
  console.log("Acesso Permitido!");
} else {
  console.log("Acesso Negado!");
}

var loginUser = "robson";
var senhaUser = "819";

if (loginUser == login && senhaUser == senha) {
  console.log("Login Realizado com Sucesso!");
}

if (loginUser == login && senhaUser == senha) {
  console.log("Acesso Permitido!");
} else {
  console.log("Acesso Negado!");

}
console.log("----------------------------------------------------------------------")

var x = 25;
var y = 15;
var maior;

if (x > y) {
    maior = x;
} else if (y > x) {
    maior = y;
} else {
    maior = "esse é o maior numero";
}

console.log("o maior numero é", maior); 
console.log("----------------------------------------------------------------------")

var a = 10, b = 35, c = 15;
var maior;

if (a >= b && a >= c) {
    maior = a;
} else if (b >= a && b >= c) {
    maior = b;
} else {
    maior = c;
}
console.log("O maior é: " + maior);
console.log("----------------------------------------------------------------------")

function classificarIdade(idade) {
  if (idade < 12) {
    return "Criança";
  } else if (idade < 18) {
    return "Adolescente";
  } else if (idade < 60) {
    return "Adulto";
  } else {
    return "Idoso";
  }
}


console.log(classificarIdade(10));
console.log(classificarIdade(15)); 
console.log(classificarIdade(30)); 
console.log(classificarIdade(65)); 
console.log("----------------------------------------------------------------------")

console.log("/---------------------------------parte 03---------------------------------/");

function obterDiaSemanaSwitch(numero) {
    switch (Number(numero)) {
        case 1: return "Domingo";
        case 2: return "Segunda-feira";
        case 3: return "Terça-feira";
        case 4: return "Quarta-feira";
        case 5: return "Quinta-feira";
        case 6: return "Sexta-feira";
        case 7: return "Sábado";
        default: return "Valor inválido";
    }
}

console.log(obterDiaSemanaSwitch(5)); 
console.log(obterDiaSemanaSwitch(1)); 
console.log(obterDiaSemanaSwitch(3)); 
console.log(obterDiaSemanaSwitch(9)); 
console.log("----------------------------------------------------------------------")

function obtermesano(numero) {
    switch (Number(numero)) {
        case 1: return "janeiro";
        case 2: return "fevereiro";
        case 3: return "março";
        case 4: return "abril";
        case 5: return "maio";
        case 6: return "junho";
        case 7: return "julho";
        case 8: return "Agosto";
        case 9: return "setembro";
        case 10: return "outubro";
        case 11: return "novembro";
        case 12: return "dezembro";
        default: return "Valor inválido";
      
    }
}

console.log(obtermesano(3)); 
console.log(obtermesano(6)); 
console.log(obtermesano(10)); 
console.log(obtermesano(8)); 
console.log(obtermesano(14)); 
console.log("----------------------------------------------------------------------")

var mes = 11;




switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log("Primeiro trimestre!");
    break;


  case 4:
  case 5:
  case 6:
    console.log("Segundo trimestre!");
    break;
    
  case 7:
  case 8:
  case 9:
    console.log("Terceiro trimestre!");
    break;


  case 10:
  case 11:
  case 12:
    console.log("Quarto trimestre!");
    break;


  default:
    console.log("Mês incorreto!");
    break;
}
console.log("----------------------------------------------------------------------")
var operacoes = "somar";
switch (operacoes) {
  case "somar":
    console.log("Você clicou no 'somar'");
    break;
  case "subtarir":
    console.log("Você clicou no 'subtarir'");
    break;
  case "multiplicar":
    console.log("Você clicou no 'multiplicar'");
    break;
  case "dividir":
    console.log("Você clicou no link 'dividir'");
    break;

}
console.log("----------------------------------------------------------------------")

 
function avaliarDesempenho(nota) {
  
    var notaMaiuscula = nota.toUpperCase(); 
    var resultado;

    switch (notaMaiuscula) {
        case 'A':
            resultado = 'Excelente';
            break;
        case 'B':
            resultado = 'Bom';
            break;
        case 'C':
            resultado = 'Regular';
            break;
        case 'D':
            resultado = 'Ruim';
            break;
        default:
            resultado = 'Nota inválida';
    }

    return resultado;
}


console.log(avaliarDesempenho('A')); 
console.log(avaliarDesempenho('b')); 
console.log(avaliarDesempenho('C')); 
console.log(avaliarDesempenho('D')); 
console.log(avaliarDesempenho('E')); 



console.log("----------------------------------------------------------------------")
console.log("/---------------------------------parte 04---------------------------------/");

for (var i = 1; i <= 100; i++) {
  console.log(i);
}
console.log("----------------------------------------------------------------------")

for (var i = 100; i >= 1; i--) {
  console.log(i);
}
console.log("----------------------------------------------------------------------")

for (var i = 2; i <= 50; i += 2) {
  console.log(i);
}
console.log("----------------------------------------------------------------------")

for (var i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("----------------------------------------------------------------------")

var soma = 0;
for (var i = 1; i <= 100; i++) {
  soma += i;
}
console.log(soma); 

console.log("----------------------------------------------------------------------")
function fatorialIterativo(num) {
  if (num < 0) return -1; // Fatorial de número negativo não existe
  if (num === 0 || num === 1) return 1;
  
  var resultado = 1;
  for (var i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(fatorialIterativo(5)); 

console.log("----------------------------------------------------------------------")

var numero = 9; 

console.log(`Tabuada do ${numero}:`);

for (var i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

console.log("----------------------------------------------------------------------")

var contador = 0;

for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        contador++;
    }
}

console.log(contador); 

console.log("----------------------------------------------------------------------")
for (var i = 0; i <= 100; i += 5) {
  console.log(i);
}

console.log("----------------------------------------------------------------------")
for (var i = 1; i <= 5; i++) {
  console.log('*'.repeat(i));
}
console.log("----------------------------------------------------------------------")
console.log("/---------------------------------parte 05---------------------------------/");


var numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


console.log(numeros);


for (var i = 0; i < numeros.length; i++) {
    console.log(`Posição ${i}: ${numeros[i]}`);
}
console.log("----------------------------------------------------------------------")

var soma = 0;
for (var i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log (soma)
console.log("----------------------------------------------------------------------")
var soma = 0;

for (var i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

var media = soma / numeros.length;

console.log("A média é:", media);

console.log("----------------------------------------------------------------------")


var maior = numeros[0]; 

for (var i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}
console.log(maior); 

console.log("----------------------------------------------------------------------")


var menor = numeros[0];
for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}
console.log(menor); 

console.log("----------------------------------------------------------------------")
var pares = 0;
var impares = 0;

for (var num of numeros) {
    if (num % 2 === 0) {
        pares++;
    } else {
        impares++; 
    }
}

console.log(`Pares: ${pares}`);   
console.log(`Ímpares: ${impares}`); 

console.log("----------------------------------------------------------------------")
for (var i = 0; i < numeros.length; i++) {
    numeros[i] = numeros[i] * 2;
}
console.log (numeros)

console.log("----------------------------------------------------------------------")
console.log("/---------------------------------parte 06---------------------------------/");



const matriz = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]  
];


console.log("Valores da Matriz 3x3:");


for (var i = 0; i < matriz.length; i++) {
    
    for (var j = 0; j < matriz[i].length; j++) {
        console.log(`Linha ${i}, Coluna ${j}: ${matriz[i][j]}`);
    }
}


console.table(matriz);
console.log("----------------------------------------------------------------------")

console.log("Diagonal Principal:");
for (var i = 0; i < matriz.length; i++) {
  
  console.log(matriz[i][i]);
}
console.log("----------------------------------------------------------------------")
const n = matriz.length;
console.log("Diagonal Secundária:");

for (var i = 0; i < n; i++) {
  
  console.log(matriz[i][n - 1 - i]);
}
console.log("----------------------------------------------------------------------")
var soma = 0;
for (var i = 0; i < matriz.length; i++) {
  for (var j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  }
}