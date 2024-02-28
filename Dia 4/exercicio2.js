//recebendo inforamações do usuario
let nome = prompt("Qual é o seu nome?");
let idade = Number(prompt("Qual é a sua idade?"));
let cnh = prompt("Possui carta de motorista? s/n");
let temCarro = prompt("Possui carro? s/n");

if (idade < 18 || cnh ==="n") {
  console.log(nome+ " ,vc n pode dirigir")
}else if (temCarro === "n" && idade >= 18) {
  console.log(nome+" ,vc pode dirigir mas n tem carro")
}else{
  console.log(nome+", vc será o motorista")
}

