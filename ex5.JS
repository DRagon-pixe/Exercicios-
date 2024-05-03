// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. 
// Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

let A = parseInt(prompt("Inisira um Número"))
let B = parseInt(prompt("Inisira um Número"))
let C = parseInt(prompt("Inisira um Número"))

if (A < B && B < C) {
    alert("Crescente")
}

else if (A > B && B > C) {
    alert("Descrecende")
}

else {
    alert("Sem ordem")
}
