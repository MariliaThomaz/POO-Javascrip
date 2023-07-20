//criar umação função
function criacachorro (raca, pata, cor){ 
  this.raca =raca; //o this ele refercia  raca = raca
  this.pata = pata;
  this.cor = cor;

  this.uivar = function(){
    console.log("auuuuuuuuu");
  }

}

//vamos estaciar novo cachorro
let husky = new criacachorro('Husky', 4 ,'banco e zinza');
husky.uivar();
   