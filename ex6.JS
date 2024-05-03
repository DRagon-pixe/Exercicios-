// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos. 
// Exiba uma mensagem indicando se a pessoa é maior de idade ou não.
let age = parseInt(prompt("Insira sua idade:"))

if (age > 18 ) {
    alert("Maior de idade")
}

else if (age < 18 ) {
    alert("Menor de idade")
}
