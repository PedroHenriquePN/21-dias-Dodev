//2 - Desenvolva um algoritmo que usando a estrutura FOR mostre no console uma contagem de 0 a 50, 
//porém, essa contagem tem que ser feita de 5 em 5.
//Ex.: 0 5 10 15 20 25 … 45 50 Fim!

let valor = Number(prompt("Insira o valor maximo para contagem:"));

for (let contador = 0; contador<= valor; contador+=5) {
  console.log(contador)
}