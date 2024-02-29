let num1 = Number(prompt("Insira o primeiro numero:"))
let num2 = Number(prompt("Insira o segundo numero:"))
let operacao = prompt("Escolha a operação desejada : \n1 = + \n2 = - \n3 = * \n4 = /")

switch (operacao) {
  case "1":
    console.log(num1 + num2)
    break;
  case "2":
    console.log(num1 - num2)
    break;
  case "3":
    console.log(num1 * num2)
    break;
  case "4":
    console.log(num1 / num2)  
    break; 
  default:
    console.log("Operação inválida.");
    break;
}