//cria  uma  classe 
let cachorro = {
    patas: 4,
    rasa: 'SRD',
    latir: function() {
        console.log( "au au ");
    }
}

//crio classe labrador com ojetos da outro classe
let labrador = Object.create(cachorro);

//usar o metodo do Prototype usa metodo que esta na classe que tem  objeto latir
labrador.latir();//estou estacinado objeto apatir de um classe

//eu posso definr a rassa do minha classe labrador
labrador.rasa = "labrador";

console.log("classe 2 labrador: ", labrador.rasa);
console.log("classe 1 cachorro: ", cachorro.rasa);

let PastorAlemao =Object.create(cachorro);
PastorAlemao.rasa = "Pasto Alemão";

console.log("classe 3 pastoalemao: ", PastorAlemao.rasa);