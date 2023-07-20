
// criar  um objeto  cacorro
//criando  uma constate
const cacorro ={
     raca:'Nao foi definido',
    //criando um metodo//função
    uivar: function(){
        console.log("AUUUUUUUUUUUUUUUU");
    },
    rosnar: function(){
        console.log("Grrrrrrr");
    },
        //cria  um metodo para definir raça do cachorro
    ReceberRaca: function(raca){

        this.raca =raca;
        //this refencinado objeto raca
    },
    //meto que exibe a função
    ExbaRaca: function(){
        return "A raça é: " +this.raca;
    }
}

console.log(cacorro.raca);//temos  uma  proedade de rasa que não  é definica

cacorro.ReceberRaca('dog alemão');//aqui estou passando uma intrige  para  metodo 

console.log(cacorro.raca);

console.log(cacorro.ExbaRaca());