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


Cachorro.prototype.raca = 'SRD';

//cria  objeto Symbol
let patas = Symbol();

Cachorro.prototype[patas] = 4;

let larodor = new Cachorro('Labrador', 'Amarelo');


//Conse consultar que  rasa  ochorro é criado
console.log(Cachorro.prototype.raca); //este  atibuido valor  fiquixo (como  fose  uma costati)



console.log(larodor.raca);//foi dado novo dado 

//acessedo symbol
console.log(Cachorro.prototype[patas]);

//caso novo obejto ladbrado queria acessoa patas
console.log(larodor[patas]);