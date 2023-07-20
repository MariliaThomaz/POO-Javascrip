//criar classe 
class Cachorro {
  //metetodo que  rece  os  parametros
  constructor(raca, cor ){
    this.raca = raca;
    this.cor = cor;

  }
  //crimos um metodo
  latir(){
    console.log("au au");
  }
}

//seta já  um valor direto um objeto 
Cachorro.prototype.patas =4;

let larodor = new Cachorro('Labrador', 'Amarelo');

console.log(larodor.patas);

larodor.latir();