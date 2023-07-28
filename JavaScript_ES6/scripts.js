// 1 - var, let  e const
var x = 10;
var y = 15;

if (y > 10) {
    var x = 5;
    console.log(x);
}
console.log(x);//obisavemos que  o valor de x muda apos  entra no if

/********************************************************************** */

let a = 10;
let b = 15;
//eu  suando  let  o valor não modifca  

if (b > 10) {
    let a = 5;
    console.log(a);// resooita daquue é 5
}
console.log(a);// este valoe sera  10
//usando  let  deixa  o codico mais  confiavel

/********************************************************************** */


function logName() {
    const name = "Carol";
    console.log(name);//o valor não muda

}
const name = 'Pedro'// não erdo  valor de  Carol
logName();
console.log(name);

// name = 'Vick';  ora dar erro poisa  poisa a varivel  const  é valor  constante

/****************************************************************** */

//2 arrow functions

//fução tradicoinal
const sum = function sum(a, b) {
    return a + b;
}

//usando novo modelo de  função  como arrow function
const arroWSoma = (a, b) => {
    return a + b
}
const arroWSomaResumida = (a, b) => a + b;// outra  forma de fazer 

//arrow functions com  o corpo
const greeting = (nome) => {
    if (nome) {
        return 'Ola ' + nome + '!';
    } else {
        return 'Ola';
    }
}


console.log(sum(5, 5));
console.log(arroWSoma(5, 5));
console.log("ArroW Resumida: ", arroWSomaResumida(5, 5));

console.log(greeting('Marilia'));
console.log(greeting());

//pode fazer uma arrow functions sem parametro

const aRRowSemPa = () => console.log('sem parametro');
aRRowSemPa();


//sobre herças antiga
const user = {
    name: 'Tiago',
    sayUserName() {
        var self = this;
        setTimeout(function () {
            console.log(self)
            console.log("Usernema: " + self.name)
        }, 500);
    },

    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log("Usernema com Arrow: " + this.name)
        }, 700);
    },
}
//user.sayUserName();// oque aconetce que  função  Setimeut não  erdou de fato name
// e  para  isto  Bridat  fazendo varivel fora 

//user.sayUserNameArrow(); // não pricia brincad  por si só ele  é anonimo


/* isto é uma função anonima 
sayUserName(){
       setTimeout(function(){
           console.log(this)
           console.log("Usernema: "+this.name)
       }, 500);
   }
*/
/*********************************************************************************************** */

//3 filter 

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

const vendoNomero = arr.filter((n) => {// esta  linha faz  papel  lupe como pegase um nuemro de cada ves e faze  analise do if

    if (n >= 3) {
        return n
    }
})

console.log(vendoNomero)

//arry de  obejtos
const users = [
    { name: 'Jose', available: true },
    { name: 'Caro', available: false },
    { name: 'Paula', available: false },
    { name: 'Marilia', available: true },
]

const verficandoDispo = users.filter((user) => user.available) // querendo ver quer esta disponivel

console.log(verficandoDispo)
const verficandoNot = users.filter((user) => !user.available)
console.log(verficandoNot)

//*********************************************************************** */

// 4 map
const produduto = [
    {nome: 'Camietsa', preco: 35.00 , categoria: 'Ropa'},
    {nome: 'Maquina Fotografica', preco: 300.00 , categoria: 'Eletronico'},
    {nome: 'Umidificador de Ar', preco: 200.00 , categoria: 'Eletronico'},
     {nome: 'Calça jeans', preco: 140.00 , categoria: 'Ropa'},
]
console.log(produduto)

produduto.map((produdu)=> {
    if(produdu.categoria ==='Ropa'){
        produdu.Promocao = true //atibundo  Promo
    }
})
console.log(produduto)
//******************************************************************************** */
// 5 templates  literals
const noem = 'Marilia'
const idade = 26

console.log(`O nome do usario é: ${noem} e idade dele(a): ${idade} anos`)

/**************************************************************************************** */


// 6 destructuring

const frutas = ['maça', 'laraja', 'goiba']

const [f1, f2, f3] = frutas;// ele  erda  oque estva  outra  array  e reconhe  por posição
console.log(f2);// 

const pintura ={
    tinta: 'azul',
    marca: 'gato preto',
    valor: 6.00,
    categoria: 'olho'
}
const {tinta:corDatinta, marca, valor:preco, categoria} = pintura

console.log(` Acor da tinta é: ${corDatinta}, a marca: ${marca},
o valor dela é: ${preco}, sua categoria é: ${categoria}`)

/************************************************************************************************ */

// 7 spead operator
const a2 = [4, 5, 6]
 const a1 = [1, 2, 3]
 

 const a3 =[...a2, ...a1] //aqui estamo unido ois arry em  uma  só arry 
 console.log(a3)

  const a4 = ['JOSE', ...a1, 'Marioa']

 console.log(a4)

 //uniao com objtos
 const carNome ={name: 'Fusca'}
 const carMarca = {marca:'Volkswagen' }
 const carkm = {km: 1234567, preço: 77700000}
 //unido  os  objetos
 const car = {...carNome, ...carMarca, ...corDatinta, baril:7}

 console.log(car)

 /**************************************************************** */

 //8 calsse
 
 class Producto{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
    //funçao desconto
    preDescto(disconto){
        return this.preco *((100 - disconto)/100)
    }
 }
//aqui  estanmos  um objeto para  classe
const  blusa = new Producto('cameita gola polo', 60.00)

console.log(blusa.nome) 
console.log(blusa.preDescto(10))

//motivo ter  uma classe  posso repetir o que tem nele

const tenis = new Producto("Tenis Naick", 160.00)

console.log(tenis.preDescto(10))
/********************************************************************** */

//heraça

class HeracaPro extends Producto{
    constructor(nome, preco, cor){
        super(nome, preco)
        this.cor =cor

    }
    exiber(){
        console.log("As cores são: ")
        this.cor.forEach((cor) => {
            console.log(this.cor)
        });
    }
}

const chapel = new HeracaPro("Bone", 45.00,['preto', 'azul', 'branco'])
console.log(chapel.nome)
console.log(chapel.preDescto(10))
console.log(chapel.cor)