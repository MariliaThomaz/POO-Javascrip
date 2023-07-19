//ESTUDO 19_07_2023
//cria classe da conta
class Conta{
    constructor(saldo){
        this.saldo =saldo;

    }
    //cria metodo 
    deposito(valor){
        this.saldo+=valor;
    }

}
//istaciar a classe com valor
let conta = new Conta(1000);

    conta.deposito(1000);//colocar  um  valor dentro  do metodo

console.log(conta.saldo);//esibindo