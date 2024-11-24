let altura = parseFloat(prompt(`Digite a sua altura em metros:`))

let peso = parseFloat(prompt(`Digite o seu peso em quilogramas:`))

let IMC = (peso / altura * 2)

if (IMC >= 18.5 && IMC <= 24.9) {
    alert(`O seu IMC está dentro do índice saudável`);
}

else {
    alert(`O seu IMC não está dentro do índice saudável.`);
}