const numero = Number(prompt("Digite um número: "));
const texto2 = prompt("Digite um texto: ");
const numeroTitulo = document.getElementById('numeroTitulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = texto2;

const soma = Number(prompt("Digite um número para soma: "));
const numSoma = document.getElementById("soma");
numSoma.innerHTML = soma;

const result = numero + soma;
const numResult = document.getElementById("result");
numResult.innerHTML = result;