//Paragrafo com plano ideal
const txtCalcularVelocidade = document.querySelector("#txtCalcularVelocidade");

//Paragrafo com roteador ideal
const txtCalcularRoteador = document.querySelector("#txtCalcularRoteador");

// calculo da velocidade ideal
const calcularVelocidade = () => {

    var celularQt = document.querySelector("#celularQt").value;
    var tv4KQt = document.querySelector("#tv4KQt").value;
    var tvQt = document.querySelector("#tvQt").value;
    var PCNotQt = document.querySelector("#PCNotQt").value;
    var xboxQt = document.querySelector("#xboxQt").value;
    var playSQt = document.querySelector("#playSQt").value;


    var cel = celularQt * 6; 
    var tv4 =  tv4KQt * 90; 
    var tv = tvQt * 10; 
    var pc = PCNotQt * 10; 
    var xb = xboxQt * 15; 
    var ps = playSQt * 15;

    var velocidadeIdeal = cel + tv4 + tv + pc + xb + ps;
    
    if (velocidadeIdeal <= 0) {

        velocidadeErro();
    }

    if (velocidadeIdeal > 0 && velocidadeIdeal <= 60) {

        velocidade100();
    }
    
    if (velocidadeIdeal >= 61 && velocidadeIdeal <= 120) {

        velocidade200();
    }
    
    if (velocidadeIdeal >= 121 && velocidadeIdeal <= 180) {

        velocidade300();
    }

    if (velocidadeIdeal >= 181 && velocidadeIdeal <= 240) {

        velocidade400();
    }
    
    if (velocidadeIdeal >= 241 && velocidadeIdeal <= 300) {

        velocidade400400();
    }
    
    if (velocidadeIdeal >= 301) {

        planoB2B();
    }


};

const calcularRoteador = () => {
    var roteadorQt = document.querySelector("#roteadorQt").value;

    if (roteadorQt <= 0) {

        roteadorErro();
    }

    if (roteadorQt > 0 && roteadorQt <= 100) {

        roteadorC20();
    }
    
    if (roteadorQt >= 101 && roteadorQt <= 400) {

        roteadorC5();
    }
    
    if (roteadorQt > 400) {

        roteadorEmpresarial();
    }

};

// texto para erro
function velocidadeErro (){
    txtCalcularVelocidade.innerText = "O valor não pode ser menor ou igual a zero.";
}

// texto para o plano de 100Mg
function velocidade100 (){
    txtCalcularVelocidade.innerText = "O plano de 100/50Mbps é ideal para este cliente.";
}

// texto para o plano de 200Mg
function velocidade200 (){
    txtCalcularVelocidade.innerText = "O plano de 200/100Mbps é ideal para este cliente.";
}

// texto para o plano de 300Mg
function velocidade300 (){
    txtCalcularVelocidade.innerText = "O plano de 400/100Mbps é ideal para este cliente.";
}

// texto para o plano de 400Mg
function velocidade400 (){
    txtCalcularVelocidade.innerText = "O plano de 400/200Mbps é ideal para este cliente.";
}

// texto para o plano de 400/400Mg
function velocidade400400 (){
    txtCalcularVelocidade.innerText = "O plano de 400/400Mbps é ideal para este cliente.";
}

// texto para o plano acima de 400Mg
function planoB2B (){
    txtCalcularVelocidade.innerText = "É necessário um projeto para o cliente.";
}

// texto para erro
function roteadorErro (){
    txtCalcularRoteador.innerText = "O valor não pode ser menor ou igual a zero.";
}


// texto para o roteador C20
function roteadorC20 (){
    txtCalcularRoteador.innerText = "O roteador ideal é o TP-Link 03 antenas C20.";
}

// texto para o roteador C5
function roteadorC5 (){
    txtCalcularRoteador.innerText = "O roteador ideal é o TP-Link 04 antenas C5, com portas Gigabit.";
}

// texto para o roteador C5
function roteadorEmpresarial (){
    txtCalcularRoteador.innerText = "É necessário um projeto para o cliente.";
}
