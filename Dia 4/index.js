let fome = prompt("Você está com fome? S/N" );
let dinheiro = prompt("Você tem dinheiro? S/N");
let restaurante = prompt("O restaurante está aberto? S/N");

if (fome === "N" || dinheiro === "N") {
  console.log("Hoje a janta será em casa")
}
if (fome === "S" && dinheiro === "S" && restaurante === "N") {
  console.log("Peça um delivery!")
}
if (fome === "S" && dinheiro === "S" && restaurante === "S") {
  console.log("Hoje o jantar será no seu restaurante preferido!")
}
