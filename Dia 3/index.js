let nome = prompt('Insira o seu nome:')
let idade = parseInt(prompt('Insira sua idade:'))
let altura = parseFloat(prompt('Insira sua altura em cm:'))
let peso = parseInt(prompt('Insira o seu peso:'))

let imc = peso / (altura*altura) * 10000
let anoNasci = 2024 - idade

console.log("Olá " + nome + ",você tem "+idade+" ,nasceu em "+anoNasci+" ,tem "+altura+ " de altura, pesa "+peso+ " ,seu IMC é "+imc+ "Kg/m2")