//criar classe 
class Cachorro {
  //metetodo que  rece  os  parametros
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;

  }
  //crimos um metodo
  latir() {
    console.log("au au");
  }


  get getCor() {
    return this.cor;
  }

  set setCor(cor) {
    this.cor = cor;

  }
}

//cria  obejto 
let pastorAlemao = new Cachorro('Pasto Alemão', 'não sabe cor poisa não naceu');

console.log("dados 12/07/2023 cachorro: ", pastorAlemao);

//cachorro naceu

//get e  set  funciona como paramtro

pastorAlemao.setCor='Marrom';//atribuia  uma cor

console.log('dados 20/07/2023 cachorro: ', pastorAlemao.getCor);