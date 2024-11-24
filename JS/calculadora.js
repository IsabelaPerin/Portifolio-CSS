let num1 = parseFloat(prompt(`Digite o primeiro valor: `));
let num2 = parseFloat(prompt(`Digite o segundo valor: `));

let operacao = prompt(`Qual operação você deseja realizar? (Digite 1 para Adição, 2 para Subtração, 3 para Multiplicação e 4 para Divisão.)`);

let resultado;

switch (operacao) {

    case "1":
        resultado = num1 + num2;
        alert(`Resultado: ${num1} + ${num2} = ${resultado}`);
        break;

    case "2":
        resultado = num1 - num2;
        alert(`Resultado: ${num1} - ${num2} = ${resultado}`);
        break;

    case "3":
        resultado = num1 * num2;
        alert(`Resultado: ${num1} * ${num2} = ${resultado}`);
        break;

    case "4":
        resultado = num1 / num2;
        alert(`Resultado: ${num1} / ${num2} = ${resultado}`);
        break;

    default:
        alert("ERRO - OPERAÇÃO INVÁLIDA");
        break;
}
