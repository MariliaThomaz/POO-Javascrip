    const pessoa = {//crio  um  obejto
        maos: 2,//crio uma  proedade  para objeto
    }

 


  //crio um novo objeto que  ira eder dados  do pessoa

  const pessoaNova = Object.create(pessoa);

  console.log("exibindo dados  pessoa nova",pessoaNova.maos);//mostrando  que  pessoa  nova pessoaNova  é  Prototpes de  pessoa

  //mas queise saber  se pessoaNOVA tem proedade mãos?
  console.log(pessoaNova.hasOwnProperty('maos')); // respta, não, mais conseque acessar ele pois  esta Prototpe dele

  console.log(Object.getPrototypeOf(pessoaNova) === pessoa); //verificando se de fato o pessoas noca  é Prototpe pessoa
   //sim ele fala é verdad --> true