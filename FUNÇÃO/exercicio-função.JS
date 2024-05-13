// // Fazer um menu de exercicios utilizando o exemplo dado em aula
// // Criar um menu, onde é possível executar 6 dos exercicios anteriores.
// // Cada exercício deve ser encapsulado em uma função, e o menu deve executar essas funções
// // O usuário poderá escolher qual exercicio ele quer visualizar.
// // O usuário deverá digitar 0 para sair do menu.

// // let opcao = prompt("Escolha uma opção: \n1 - Exemplo Hello World\n2 - Exemplo Repetção")

// // switch (opcao) {
// //     case "1":
// //         console.log("")
// // }

// function exemplo1() {
//     let username = prompt("Digite um nome de usuário:")
// let senha = prompt("Digite a senha:")

// if (username == "admin" && senha == "senha123") {
//     console.log("Login bem sucedido")
// } else {
//     console.log("Você não tem permissão de acesso!")
// }

// }
// function exemplo2() {
//     let score = parseInt(prompt("Insira uma nota:"))
// let score2 = parseInt(prompt("Insira uma nota:"))
// let score3 = parseInt(prompt("Insira uma nota:"))
// let score4 = parseInt(prompt("Insira uma nota:"))
// let notaA = (score + score2 + score3 + score4 )/4

// if (notaA > 7.0) {
//     alert("APROVADO")
// }
// else if (notaA < 7.0 && notaA > 5.0) {
//     alert("RECUPERADO")
// }
// else {
//     alert("REPROVADO")
// }
// }
// function exemplo3() {
//     let peso = parseFloat(prompt("Insira seu peso."))

// let altura = parseFloat(prompt("Insira sua altura."))

// let IMC = peso/(altura*altura);

// console.log(IMC)

// if(IMC < 18.5) {
//     alert("Abaixo do peso")
// }
// else if(IMC >= 18.5 && IMC <= 24.9) {
//     alert("Peso normal")
// }
// else if(IMC >= 25 && IMC <= 29.9) {
//     alert("Sobrepeso")
// }
// else if(IMC >= 30 && IMC <= 34.9) {
//     alert("Obesidade grau 1")
// }
// else if(IMC >= 35 && IMC <= 39.9) {
//     alert("Obesidade grau 2")
// }
// else if(IMC >= 40) {
//     alert("Obesidade grau 3")
// }
// }
// function exemplo4() {
//     let multiplicado = parseInt(prompt("Digite um número"))

// for(let number =0; number <=10; number++) {
//     console.log(multiplicado*number)
// }
// }
// function exemplo5() {
//     let age = parseInt(prompt("Digite sua idade: "))

// while (age < 18) {
    
//     age = parseInt(prompt("Digite novamente sua idade:"))
// } 
//     console.log("Você é maior de idade")
// }
// function exemplo6() {
//     let num = parseInt(prompt("Digite um número"))

// while (num != 0) {
//     num--
//     console.log(num)
// }
// }

// let opcaoDigitada;

// do {
//     opcaoDigitada = prompt("MENU \nEscolha uma opção: \n1 - Exemplo do nome e senha de usuário \n2 - Exemplo da média de nota de auluno \n3 - Exemplo de IMC \n4 - Exemplo de tabuada \n5 -  Exemplo de Idade \n6 - Exemplo de decresimo de número \n Digite 0 para fechar o menu")

//     if (opcaoDigitada == "0") {
//         alert("Você escolheu sair")
//     } else if (opcaoDigitada == "1") {
//         exemplo1();
//     } else if (opcaoDigitada == "2") {
//         exemplo2();
//     } else if (opcaoDigitada == "3") {
//         exemplo3();
//     } else if (opcaoDigitada == "4") {
//         exemplo4();
//     } else if (opcaoDigitada == "5") {
//         exemplo5();
//     } else if (opcaoDigitada == "6") {
//         exemplo6();
//     } else {
//         alert("Esse exercício não existe!")
//     } 
// } while (opcaoDigitada != "0")

let cliques = 0

const somarCliques = () => {
    // cliques = cliques + 1
    //  cliques += 1
    cliques++

    let spanCliques = document.querySelector("#num-cliques")

    spanCliques.innerText = cliques
}

let tituloNome = document.querySelector("#titulo-nome")

const mudarNome = () => {
    tituloNome.innerText = "Thiago Nascimento"
}

tituloNome.addEventListener("click", mudarNome)

document.addEventListener("DOMcontentLoaded", function() {
    alert("ertvbnkghnb tdfsfghfjg hvb fghnfvb")
})

function voltarPagina() {
    window.history.back()
}

function fecharPagina() {
    window.close()
}

window.localStorage