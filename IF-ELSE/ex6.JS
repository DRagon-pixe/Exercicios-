// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos. 
// Exiba uma mensagem indicando se a pessoa é maior de idade ou não.
let year = parseInt(prompt("Insira o ano que você nasceu:"))

let age = 2024 - year

if (age >= 18 ) {
    alert("Você é maior de idade")
}

else {
    alert("Menor de idade")
}
