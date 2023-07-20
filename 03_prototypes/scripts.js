    const pessoa = {//crio  um  obejto
        maos: 2,//crio uma  proedade  para objeto
    }

    //conser  ver  Prototype com o metoso 
    console.log(Object.getPrototypeOf(pessoa));
    console.log(Object.getPrototypeOf(pessoa)== Object.prototype);

    //Vendo Prototype erda  cotedo mãos?
    console.log(pessoa.hasOwnProperty('maos'));
    //este metoso hasOwnProperty não crio ele,  mais conseque  pegar lá do metos que tem Object poisa este  mestodo é  filho dele.

    /*
    temos que mente que
    todo objeto tem  Prototype.
    que  osjetos  são endendo coisa
    */
   