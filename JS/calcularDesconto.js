let valorDesconto = prompt("Informe o código promocional DESC1, DESC2, DESC3, DESC4 ou DESC5 ");

let valorProduto = 1000;

let desconto = 0;

switch (valorDesconto.toUpperCase()) {

    case "DESC1":
        desconto = 0.05;
        alert("5% de desconto aplicado.");
        break;

    case "DESC2":
        desconto = 0.10;
        alert("10% de desconto aplicado.");
        break;

    case "DESC3":
        desconto = 0.15;
        alert("15% de desconto aplicado.");
        break;

    case "DESC4":
        desconto = 0.20;
        alert("20% de desconto aplicado.");
        break;

    case "DESC5":
        desconto = 0.25;
        alert("25% de desconto aplicado.");
        break;

    default:
        alert("Este cupom é inválido.");
}

let valorComDesconto = valorProduto - (valorProduto * desconto);

alert(`Valor original do produto: R$ ${valorProduto.toFixed(2)}`);
alert(`Valor com desconto: R$ ${valorComDesconto.toFixed(2)}`);