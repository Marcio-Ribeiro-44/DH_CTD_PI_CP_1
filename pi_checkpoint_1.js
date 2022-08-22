var readlineSync = require("readline-sync");

console.log(`
     
    Tipos de prato:

    1 - Pipoca
    2 - Macarrão
    3 - Carne
    4 - Feijão
    5 - Brigadeiro

 `);

var prato = readlineSync.question("Escolha um prato: ");

switch (prato) {
  case "1":
    console.log("Pipoca");
    break;
  case "2":
    console.log("Macarrão");
    break;
  case "3":
    console.log("Carne");
    break;
  case "4":
    console.log("Feijão");
    break;
  case "5":
    console.log("Brigadeiro");
    break;
  default:
    console.log("Prato inexistente!");
}

var tempo = readlineSync.question("Informe o tempo de preparo: ");

if (
  (prato == 1 && tempo < 10) ||
  ((prato == 2 || prato == 5) && tempo < 8) ||
  (prato == 3 && tempo < 15) ||
  (prato == 4 && tempo < 12)
) {
  console.log(tempo + " segundos");
  console.log("Tempo insuficiente!");
} else if (
  (prato == 1 && tempo > 10 * 2 && tempo <= 10 * 3) ||
  ((prato == 2 || prato == 5) && tempo > 8 * 2 && tempo <= 8 * 3) ||
  (prato == 3 && tempo > 15 * 2 && tempo <= 15 * 3) ||
  (prato == 4 && tempo > 12 * 2 && tempo <= 12 * 3)
) {
  console.log(tempo + " segundos");
  console.log("A comida queimou!");
} else if (
  (prato == 1 && tempo > 10 * 3) ||
  ((prato == 2 || prato == 5) && tempo > 8 * 3) ||
  (prato == 3 && tempo > 15 * 3) ||
  (prato == 4 && tempo > 12 * 3)
) {
  console.log(tempo + " segundos");
  console.log("Kabumm!");
} else if (
  (prato == 1 && tempo >= 10 && tempo <= 10 * 2) ||
  ((prato == 2 || prato == 5) && tempo >= 8 && tempo <= 8 * 2) ||
  (prato == 3 && tempo >= 15 && tempo <= 15 * 2) ||
  (prato == 4 && tempo >= 12 && tempo <= 12 * 2)
) {
  console.log(tempo + " segundos");
  console.log("Prato pronto, bom apetite!!!");
} else {
  console.log("Tempo inexistente!");
}
