let servico = prompt("Escolha uma das opções: \n1 = Abastecer com gasolina \n2 = Abastercer com álcool \n3 = Calibrar os pneus")
let valor


//criando switch case
switch (servico) {
  case "1":
    valor = Number(prompt("Insira o valor desejado:"));
    let litro = valor / 5;
    console.log("A quantidade abastecida foi de:" + litro+" litros")
    break;
  
  case "2":
    valorAlcool = Number(prompt("Insira o valor desejado:"))
    let litroAlcool = valorAlcool / 3
    console.log("A quantidade abastecida foi de:" + litroAlcool+ " litros")
    break;
  
  case "3":
    console.log("Pneus calibrados com sucesso!")
    break;
  
    default:
    break;
}