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

Cachorro.prototype.raca = 'SRD';



let larodor = new Cachorro('Labrador', 'Amarelo');


//Conse consultar que  rasa  ochorro é criado
console.log(Cachorro.prototype.raca); //este  atibuido valor  fiquixo (como  fose  uma costati)

console.log(larodor.raca);//foi dado novo dado 