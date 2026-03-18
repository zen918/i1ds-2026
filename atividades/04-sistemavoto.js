/*****************************************************
            Atividade / Desafiadora
*****************************************************/
/*
    Crie uma função que receba a idade de uma pessoa e
    retorne uma frase dizendo se ela pode votar ou não, 
    e se o voto é obrigatório ou opcional.
*/

console.log(
  "------------------------------------------------------------------------",
);
console.log("                                solução01");
console.log(
  "------------------------------------------------------------------------",
);

function notaprova(nota) {
  let frase;
  if (nota < 5) {
    return "reprovado";
  } else if (nota < 7) {
    return "recuperação";
  } else {
    return "aprovado";
  }
}

console.log(notaprova(5));
console.log(notaprova(7));

console.log(
  "------------------------------------------------------------------------",
);
console.log("                                solução02");
console.log(
  "------------------------------------------------------------------------",
);

function situaçaofinal(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;

  if (media < 5) {
    return "reprovado";
  } else if (media < 7) {
    return "recuperação";
  } else {
    return "aprovado";
  }
}

console.log(situaçaofinal(7, 8, 6, 5));
console.log(situaçaofinal(7, 7, 7, 7));

console.log(
  "------------------------------------------------------------------------",
);
console.log("                                solução03");
console.log(
  "------------------------------------------------------------------------",
);

function final(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;
  let situacao;

  if (media < 5) situacao = "reprovado";
  else if (media < 7) situacao = "recuperação";
  else situacao = "aprovado";

  return "media: " + media + " - situação:" + situacao;
}

console.log(final(7, 8, 6, 5));
