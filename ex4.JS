// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas 
// e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 
// ou a mensagem de REPROVADO para média inferior a 5,0.
let score = parseInt(prompt("Insira uma nota:"))
let score2 = parseInt(prompt("Insira uma nota:"))
let score3 = parseInt(prompt("Insira uma nota:"))
let score4 = parseInt(prompt("Insira uma nota:"))
let notaA = (score + score2 + score3 + score4 )/4

if (notaA > 7.0) {
    alert("APROVADO")
}
if (notaA < 5.0) {
    alert("REPROVADO")
}
if (notaA < 7.0 && notaA > 5.0) {
    alert("RECUPERADO")
}