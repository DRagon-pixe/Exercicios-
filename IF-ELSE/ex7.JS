// Exercício 7: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele pague. Faça um programa para loja, 
// que solicite o valor total da compra ao usuário e assim, aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

let sale =parseInt(prompt("Insira o valor do produto:"))

if (sale <= 100.00) {
    alert("Preço a se pagar: " + sale)
}
else if (sale >= 100.01 && sale <= 200.00) {
let saled = sale * 0.9

    alert("Preço a se pagar: " + saled)
}
else if (sale >= 200.01) {
let saled2 = sale * 0.8
    
    alert("Preço a se pagar: " + saled2)
}