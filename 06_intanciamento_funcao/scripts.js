//criar umação com atribuição
function criacachorro (raca, pata, cor){ 

    //cria  um  objeto vasio
      let cachorro = Object.create({});
      cachorro.raca = raca;
      cachorro.pata = pata;
      cachorro.cor = cor;

      //Cria um metodo
      cachorro.latie = function(){
        console.log("au au au");
      }

      
      return cachorro;
      //nos estacimos um objeto com uma base  de uma classe
      //isto é constuter  por função
}

//cria um  metodo e chamar a função
    let doberman = criacachorro('Doberman', 4, 'preta');
     console.log(doberman);

     //exibindo latir
     doberman.latie();