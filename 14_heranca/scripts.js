
class Mamiforo {
  constructor(patas){
    this.patas = patas;
  }
}

let coiote =  new  Mamiforo(4);
console.log('01',coiote.patas);

//faze uma  herança 
//crinado uma  nova classe erda  atributos da Mamifero
class Cachorro  extends  Mamiforo{
  constructor(patas, raca){
    //para  ateração objeto pais tem  por  super
    super(patas,patas);
    this.raca = raca;
  }
  //metodo 
  latir(){
    console.log("au au au");
  }
}

//objeto
let pug  =  new Cachorro(4, "Pug");

console.log(pug.patas);

//pode  chamar  o  metos
pug.latir();