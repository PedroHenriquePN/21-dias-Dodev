//4 - Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número 
//e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.


let valor = Number(prompt("Insira o numero para a tabuada:"))

for (let i = 0; i <= 10; i++) {
  console.log(valor + " X " + i + " = " + valor * i)
}


valor++
for (let i = 0; i <= 10; i++) {
  console.log(valor + " X " + i + " = " + valor * i)
}

valor++
for (let i = 0; i <= 10; i++) {
  console.log(valor + " X " + i + " = " + valor * i)
}