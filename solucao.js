const prompt = require("prompt-sync")({ sigint: true });

const MAX_FATORIAL = 100;
const MIN_FATORIAL = 0;

function ehNumero(numeroAVerificar) {
  return Number.isNaN(Number(numeroAVerificar)) === false;
}

function pertenceAoIntervalo(numero, max, min) {
  if (max < min) {
    [max, min] = [min, max];
  }

  return numero >= min && numero <= max;
}

function calculaFatorial(n) {
  if (!ehNumero(n) || !pertenceAoIntervalo(n, MAX_FATORIAL, MIN_FATORIAL)) {
    throw new Error(
      "Erro. O número digitado deve ser maior que 0 e menor que 100."
    );
  }

  n = Number.parseInt(n);

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * calculaFatorial(n - 1);
}

let numero = prompt("Digite um numero entre 0 e 100. ");
try {
  let fatorialDoNumero = calculaFatorial(numero);
  console.log(`O fatorial de ${numero} é ${fatorialDoNumero}.`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
}
