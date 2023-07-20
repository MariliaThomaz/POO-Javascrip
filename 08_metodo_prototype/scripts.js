//criar uma função
function Criacachorro (raca, pata, cor){ 
  this.raca =raca; //o this ele refercia  raca = raca
  this.pata = pata;
  this.cor = cor;

}

//criar  um metodo  ligado  com prototype
Criacachorro.prototype.uivar = function(){
  console.log("Auuuuuu");
}//Criacachorro.prototype

Criacachorro.prototype.latir = function(){
  console.log("au au");
}

//vamos estaciar novo cachorro
let husky = new Criacachorro('Husky', 4 ,'banco e zinza');
husky.uivar();
   