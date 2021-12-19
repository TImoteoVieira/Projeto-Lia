const textoSinal = document.querySelector("#txtResultadoSinal");
const textoQuedas = document.querySelector("#txtQuedas");
const textoIpv6 = document.querySelector("#txtIpv6");
const textoDns = document.querySelector("#txtDns");
const textoUsuarioSenha = document.querySelector("#txtUsuarioSenha");
const textoParksVerdade = document.querySelector("#txtParksVerdade");
const textoNokiaVerdade = document.querySelector("#txtNokiaVerdade");
const textoFiberhomeVerdade = document.querySelector("#txtFiberhomeVerdade");
const textoHuaweiVerdade = document.querySelector("#txtHuaweiVerdade");
const textoIntelbrasVerdade = document.querySelector("#txtIntelbrasVerdade");
const textoWifi = document.querySelector("#txtWifi");
const textoVelocidade = document.querySelector("#txtVelocidade");
const textoEquipamentoBanda = document.querySelector("#txtEquipamentoBanda");
const textoSite = document.querySelector("#txtSite");
const textoProblema = document.querySelector("#txtProblema");





// calculo do sinal ideal
const calcularSinal = () => {

    const sinalAtual = document.querySelector("#sinalAtual").value;
    const sinalCaixa = document.querySelector("#sinalCaixa").value;

    let sinalIdeal = sinalAtual - sinalCaixa;
    

    if (sinalIdeal < -2) {

        textoSinal.innerText = "O sinal atual é: "+sinalAtual + ", O sinal médio é: " +sinalCaixa + ", O sinal está acima do ideal e precisa ser encaminhado pra visita técnica.";
    }
    else
        textoSinal.innerText = "O sinal atual é: "+sinalAtual + ", O sinal médio é: " +sinalCaixa + ", O sinal atual é ideal.";    
};

var quedasExistemClicado = false;
var botaoQuedasExistemClicado = false;
var botaoQuedasNaoExistemClicado = false;
var botaoSimReiniciaClicado = false;
var botaoNaoReiniciaClicado = false;

function quedasExistem() {

    if (!quedasExistemClicado){
    
        quedasVerdade();

        //botao sim, quedas existem em outros clientes da mesma caixa
        var divBottonQuedasExistem = document.createElement("div");
        var botaoQuedasExistem = document.createElement("button");

        var corpo = document.querySelector("body");

        divBottonQuedasExistem.appendChild(botaoQuedasExistem);
        corpo.appendChild(botaoQuedasExistem);

        botaoQuedasExistem.innerHTML='Sim';

        //configurando localização dos elementos
        var formulario = document.querySelector("#formulario");
        var ipv6 = document.querySelector("#ipv6");
        //var quedas = querySelector("#quedas");

        formulario.insertBefore(divBottonQuedasExistem, ipv6);

        //localização do botao sim, quedas existem
        formulario.insertBefore(botaoQuedasExistem, ipv6);
        botaoQuedasExistem.type = "button";

        //botao não, não existem quedas em outros clientes na mesma caixa
        var botaoQuedasNaoExistem = document.createElement("button");
        botaoQuedasNaoExistem.type = "button";
        
        divBottonQuedasExistem.appendChild(botaoQuedasNaoExistem);
        corpo.appendChild(botaoQuedasNaoExistem);

        botaoQuedasNaoExistem.innerHTML='Não';
        
        //localização do botao nao, quedas nao existem
        formulario.insertBefore(botaoQuedasNaoExistem, ipv6);
        
        //criando div para encaminhar O.S.
        var divEncaminharOS = document.createElement("div");
        corpo.appendChild(divEncaminharOS);
        formulario.insertBefore(divEncaminharOS, ipv6);
        
        
        
        botaoQuedasExistem.onclick = function (){
            if (!botaoQuedasExistemClicado){
                var encaminharOS = document.createElement("p");
                var texto = document.createTextNode("Encaminhar ordem de serviço para análise do setor de redes.");
                encaminharOS.appendChild(texto);
                var corpoDoTexto = document.querySelector("body");
                divBottonQuedasExistem.appendChild(encaminharOS);
                corpoDoTexto.appendChild(encaminharOS);
                formulario.insertBefore(encaminharOS, ipv6);
                botaoQuedasExistemClicado = true;
            }
        };
        
        // =========== usar divQuedasExistem
        //criando div para perguntar se o cliente reinicia o equipamento
        //var divClienteReinicia = document.createElement("div");
        //corpo.appendChild(divClienteReinicia);

        // regra para os comandos da função serem executados uma vez, quando verdade
        quedasExistemClicado = true;
       
        
        botaoQuedasNaoExistem.onclick = function (){

            if (!botaoQuedasNaoExistemClicado){
                botaoQuedasNaoExistemClicado = true;
                var clienteReinicia = document.createElement("p");
                var texto = document.createTextNode("As quedas acontecem porque o cliente reinicia o equipamento?");
                clienteReinicia.appendChild(texto);
                divBottonQuedasExistem.appendChild(clienteReinicia);
                var corpoDoTexto = document.querySelector("body");
                corpoDoTexto.appendChild(clienteReinicia);
                formulario.insertBefore(clienteReinicia, ipv6);
                
                //botão sim, o cliente reinicia o equipamento
                var botaoSimReinicia = document.createElement("button");

                divBottonQuedasExistem.appendChild(botaoSimReinicia);
                corpo.appendChild(botaoSimReinicia);
                botaoSimReinicia.type = "button";
            
                botaoSimReinicia.innerHTML='Sim';
                formulario.insertBefore(botaoSimReinicia, ipv6);

                //botão não, o cliente não reinicia o equipamento
                var botaoNaoReinicia = document.createElement("button");

                divBottonQuedasExistem.appendChild(botaoNaoReinicia);
                corpo.appendChild(botaoNaoReinicia);
                botaoNaoReinicia.type = "button";
            
                botaoNaoReinicia.innerHTML='Não';
                formulario.insertBefore(botaoNaoReinicia, ipv6);

                // ===== usar divBottonQuedasExistem
                //criando div para reinicio
                //var divReinicio = document.createElement("div");
                //corpo.appendChild(divReinicio);  

                //função quando o cliente clica em sim, reinicia o equipamento
                botaoSimReinicia.onclick = function (){
                    if (!botaoSimReiniciaClicado) {
                        var paragrafoReincia = document.createElement("p");
                        var texto = document.createTextNode("Há uma falha na rede interna do cliente.");
                        paragrafoReincia.appendChild(texto);
                        divBottonQuedasExistem.appendChild(paragrafoReincia);
                        var corpoDoTexto = document.querySelector("body");
                        corpoDoTexto.appendChild(paragrafoReincia);
                        formulario.insertBefore(paragrafoReincia, ipv6);
                        botaoSimReiniciaClicado = true;
                    }
                };        

                //função quando o cliente clica em não, não reinicia o equipamento
                botaoNaoReinicia.onclick = function (){
                    if (!botaoNaoReiniciaClicado) {
                        var paragrafoNaoReincia = document.createElement("p");
                        var texto = document.createTextNode("Há uma falha na ONU do cliente ou na energia que alimenta a ONU.");
                        paragrafoNaoReincia.appendChild(texto);
                        divBottonQuedasExistem.appendChild(paragrafoNaoReincia);
                        var corpoDoTexto = document.querySelector("body");
                        corpoDoTexto.appendChild(paragrafoNaoReincia);
                        formulario.insertBefore(paragrafoNaoReincia, ipv6);
                        botaoNaoReiniciaClicado = true;
                    }

                }; 
                };
            }
        
    }
};


//função quando as quedas não acontecem
const quedasNaoExistem = () => {

    quedasFalso();
    quedasNaoOutros = function () {
        quedasReinicio();
    };


};

// guardar e imprimir valores de usuário e senha da ONU
const usuarioSenha = () => {

    const usuarioLogin = document.querySelector("#usuarioLogin").value;
    const senhaLogin = document.querySelector("#senhaLogin").value;
    textoUsuarioSenha.innerText = "Usuário: " + usuarioLogin + " Senha: " + senhaLogin;
    
};


//variaveis para correção de bugs tipos de ONU
var parksVerdadeClicado = false;
var NokiaVerdadeClicado = false;
var fiberhomeVerdadeClicado = false;
var HuaweiVerdadeClicado = false;
var intelbrasVerdadeClicado = false;

//variaveis para correção de bugs quando modelos de parks
var botaoRev1Clicado = false;
var botaoRev3Clicado = false;
var botao410Clicado = false;
var botao101Clicado = false;

//div para localização dos elementos
var wifi = document.querySelector("#wifi");

// Se a ONU for Parks
const parks = () => {
    if(!parksVerdadeClicado){
        parksVerdadeClicado = true;
    
        parksVerdade();
        
        //botao parks rev1
        var divBottonParks = document.createElement("div");
        var botaoRev1 = document.createElement("button");
        formulario.insertBefore(divBottonParks, wifi);

        var corpo = document.querySelector("body");

        divBottonParks.appendChild(botaoRev1);
        corpo.appendChild(botaoRev1);
        botaoRev1.type = "button";

        botaoRev1.innerHTML='Rev1';
        formulario.insertBefore(botaoRev1, wifi);

        //botao parks rev3
        var botaoRev3 = document.createElement("button");

        divBottonParks.appendChild(botaoRev3);
        corpo.appendChild(botaoRev3);
        botaoRev3.type = "button";
        
        botaoRev3.innerHTML='Rev3';
        formulario.insertBefore(botaoRev3, wifi);

        //botao parks 410
        var botao410 = document.createElement("button");

        divBottonParks.appendChild(botao410);
        corpo.appendChild(botao410);
        botao410.type = "button";
        
        botao410.innerHTML='410';
        formulario.insertBefore(botao410, wifi);

        //botao parks 101
        var botao101 = document.createElement("button");

        divBottonParks.appendChild(botao101);
        corpo.appendChild(botao101);
        botao101.type = "button";
        
        botao101.innerHTML='101';
        formulario.insertBefore(botao101, wifi);

        //função quando a ONU é Rev1
        botaoRev1.onclick = function (){
            if(!botaoRev1Clicado){
                var paragrafoRev1 = document.createElement("p");
                var texto = document.createTextNode("Encaminhar para visita técnica para trocar ONU.");
                paragrafoRev1.appendChild(texto);
                var corpoDoTexto = document.querySelector("body");
                corpoDoTexto.appendChild(paragrafoRev1);
                divBottonParks.appendChild(paragrafoRev1);
                formulario.insertBefore(paragrafoRev1, wifi);
                botaoRev1Clicado = true;

            }
        };      

        //função quando a ONU é Rev3
        botaoRev3.onclick = function (){
            if(!botaoRev3Clicado) {
                var paragrafoRev3 = document.createElement("p");
                var texto = document.createTextNode("Verifique se a versão da ONU é 3.2.7, senão for, atualize a versão da ONU.");
                paragrafoRev3.appendChild(texto);
                var corpoDoTexto = document.querySelector("body");
                corpoDoTexto.appendChild(paragrafoRev3);
                divBottonParks.appendChild(paragrafoRev3);
                formulario.insertBefore(paragrafoRev3, wifi);
                botaoRev3Clicado = true;
            }
        };
        
        //função quando a ONU é 410
        botao410.onclick = function (){
            if(!botao410Clicado){
                var paragrafo410 = document.createElement("p");
                var texto = document.createTextNode("Verifique se a versão da ONU é 1.1.9, senão for, atualize a versão da ONU.");
                paragrafo410.appendChild(texto);
                var corpoDoTexto = document.querySelector("body");
                corpoDoTexto.appendChild(paragrafo410);
                divBottonParks.appendChild(paragrafo410);
                formulario.insertBefore(paragrafo410, wifi);
                botao410Clicado = true;
            }
        };
        
        //função quando a ONU é 101
        botao101.onclick = function (){
            if(!botao101Clicado){
                var paragrafo101 = document.createElement("p");
                var texto = document.createTextNode("Verifique se a versão da ONU é 1.1.3, senão for, atualize a versão da ONU.");
                paragrafo101.appendChild(texto);
                var corpoDoTexto = document.querySelector("body");
                corpoDoTexto.appendChild(paragrafo101);
                divBottonParks.appendChild(paragrafo101);
                formulario.insertBefore(paragrafo101, wifi);
                botao101Clicado = true;
            }
        };
    }
};

//variaveis para correção de bugs quando modelos de Nokia
var botaoNokiaClicado = false;
var botaoNokiaAClicado = false;

//se a ONU for Nokia
const nokia = () => {
    if (!NokiaVerdadeClicado){
        NokiaVerdadeClicado = true;
        NokiaVerdade();
        
        //botao parks G-140W-H
        var divBottonNokia = document.createElement("div");
        var botaoNokia = document.createElement("button");
        formulario.insertBefore(divBottonNokia, wifi);


        var corpo = document.querySelector("body");

        divBottonNokia.appendChild(botaoNokia);
        corpo.appendChild(botaoNokia);
        botaoNokia.type = "button";

        botaoNokia.innerHTML='G-140W-H';
        formulario.insertBefore(botaoNokia, wifi);

        //botao parks G-2425G-A
        var botaoNokiaA = document.createElement("button");

        divBottonNokia.appendChild(botaoNokiaA);
        corpo.appendChild(botaoNokiaA);
        botaoNokiaA.type = "button";
        
        botaoNokiaA.innerHTML='G-2425G-A';
        formulario.insertBefore(botaoNokiaA, wifi);

        //função quando a ONU é G-140W-H
        botaoNokia.onclick = function (){
            if(!botaoNokiaClicado){
                var paragrafoNokia = document.createElement("p");
                var texto = document.createTextNode("Verifique se a versão da ONU é 3FE48077IJHL28, senão for, atualize a versão da ONU.");
                paragrafoNokia.appendChild(texto);
                var corpoDoTexto = document.querySelector("body");
                divBottonNokia.appendChild(paragrafoNokia);
                corpoDoTexto.appendChild(paragrafoNokia);                
                formulario.insertBefore(paragrafoNokia, wifi);
                botaoNokiaClicado = true;
            }
        };    
        
        //função quando a ONU é G-2425G-A
        botaoNokiaA.onclick = function (){
            if(!botaoNokiaAClicado){
                var paragrafoNokiaA = document.createElement("p");
                var texto = document.createTextNode("Verifique se a versão da ONU é FE49025IJHL30, senão for, atualize a versão da ONU.");
                paragrafoNokiaA.appendChild(texto);
                var corpoDoTexto = document.querySelector("body");
                divBottonNokia.appendChild(paragrafoNokiaA);
                corpoDoTexto.appendChild(paragrafoNokiaA);
                formulario.insertBefore(paragrafoNokiaA, wifi);
                botaoNokiaAClicado = true;
            }
        };
    }
        
};

//variaveis para correção de bugs quando modelos de Fiberhome
var botaoFiberhomeAClicado = false;
var botaoFiberhomeBClicado = false;
var botaoFiberhomeDClicado = false;
var botaoFiberhomeFClicado = false;

//se a ONU for Fiberhome
const fiberhome = () => {

    if (!fiberhomeVerdadeClicado){
    
        fiberhomeVerdadeClicado = true;
        fiberhomeVerdade();
        //botao fiberhomeA
        var divBottonFiberhome = document.createElement("div");
        var botaoFiberhomeA = document.createElement("button");
        formulario.insertBefore(divBottonFiberhome, wifi);

        var corpo = document.querySelector("body");

        divBottonFiberhome.appendChild(botaoFiberhomeA);
        corpo.appendChild(botaoFiberhomeA);
        botaoFiberhomeA.type = "button";

        botaoFiberhomeA.innerHTML='AN5506-01-A';
        formulario.insertBefore(botaoFiberhomeA, wifi);

        //botao fiberhomeB
        var botaoFiberhomeB = document.createElement("button");

        divBottonFiberhome.appendChild(botaoFiberhomeB);
        corpo.appendChild(botaoFiberhomeB);
        botaoFiberhomeB.type = "button";
        
        botaoFiberhomeB.innerHTML='AN5506-02-B';
        formulario.insertBefore(botaoFiberhomeB, wifi);

        //botao fiberhomeF
        var botaoFiberhomeF = document.createElement("button");

        divBottonFiberhome.appendChild(botaoFiberhomeF);
        corpo.appendChild(botaoFiberhomeF);
        botaoFiberhomeF.type = "button";
        
        botaoFiberhomeF.innerHTML='AN5506-04-F';
        formulario.insertBefore(botaoFiberhomeF, wifi);

        //botao fiberhomeH
        var botaoFiberhomeD = document.createElement("button");

        divBottonFiberhome.appendChild(botaoFiberhomeD);
        corpo.appendChild(botaoFiberhomeD);
        botaoFiberhomeD.type = "button";
        
        botaoFiberhomeD.innerHTML='HG6143D';
        formulario.insertBefore(botaoFiberhomeD, wifi);

        //função quando a ONU é AN5506-01-A
        botaoFiberhomeA.onclick = function (){
            if(!botaoFiberhomeAClicado){
                var paragrafoFiberhomeA = document.createElement("p");
                var texto = document.createTextNode("Verifique se a versão da ONU é RP2512, senão for, atualize a versão da ONU.");
                paragrafoFiberhomeA.appendChild(texto);
                var corpoDoTexto = document.querySelector("body");
                divBottonFiberhome.appendChild(paragrafoFiberhomeA);
                corpoDoTexto.appendChild(paragrafoFiberhomeA);
                formulario.insertBefore(paragrafoFiberhomeA, wifi);
                botaoFiberhomeAClicado = true;
            }
        };      

        //função quando a ONU é AN5506-02-B
        botaoFiberhomeB.onclick = function (){
            if (!botaoFiberhomeBClicado){
                var paragrafoFiberhomeB = document.createElement("p");
                var texto = document.createTextNode("Verifique se a versão da ONU é RP2608, senão for, atualize a versão da ONU.");
                paragrafoFiberhomeB.appendChild(texto);
                var corpoDoTexto = document.querySelector("body");
                divBottonFiberhome.appendChild(paragrafoFiberhomeB);
                corpoDoTexto.appendChild(paragrafoFiberhomeB);
                formulario.insertBefore(paragrafoFiberhomeB, wifi);
                botaoFiberhomeBClicado = true;
            }
        };
        
        //função quando a ONU é AN5506-04-F
        botaoFiberhomeF.onclick = function (){
            if (!botaoFiberhomeFClicado){
                var paragrafoFiberhomeF = document.createElement("p");
                var texto = document.createTextNode("Verifique se a versão da ONU é RP2647, senão for, atualize a versão da ONU.");
                paragrafoFiberhomeF.appendChild(texto);
                var corpoDoTexto = document.querySelector("body");
                divBottonFiberhome.appendChild(paragrafoFiberhomeF);
                corpoDoTexto.appendChild(paragrafoFiberhomeF);
                formulario.insertBefore(paragrafoFiberhomeF, wifi);
                botaoFiberhomeFClicado = true;
            }
        };
        
        //função quando a ONU é HG6143D
        botaoFiberhomeD.onclick = function (){
            if (!botaoFiberhomeDClicado) {
                var paragrafoFiberhomeD = document.createElement("p");
                var texto = document.createTextNode("Verifique se a versão da ONU é RP2786, senão for, atualize a versão da ONU.");
                paragrafoFiberhomeD.appendChild(texto);
                var corpoDoTexto = document.querySelector("body");
                divBottonFiberhome.appendChild(paragrafoFiberhomeD);
                corpoDoTexto.appendChild(paragrafoFiberhomeD);
                formulario.insertBefore(paragrafoFiberhomeD, wifi);
                botaoFiberhomeDClicado = true;
            }
        };
    }
};

//se a ONU for huawei
const huawei = () => {

    HuaweiVerdade ()
};

//variaveis para correção de bugs quando modelos de Intelbras
var botaoIntelbrasSimClicado = false;
var botaoIntelbrasNaoClicado = false;

//se a ONU for intelbras
const intelbras = () => {

    if (!intelbrasVerdadeClicado){
    
        intelbrasVerdadeClicado = true;
        intelbrasVerdade();
        
        //botao Intelbras Sim
        var divBottonIntelbras = document.createElement("div");
        var botaoIntelbrasSim = document.createElement("button");
        formulario.insertBefore(divBottonIntelbras, wifi);

        var corpo = document.querySelector("body");

        divBottonIntelbras.appendChild(botaoIntelbrasSim);
        corpo.appendChild(botaoIntelbrasSim);
        botaoIntelbrasSim.type = "button";

        botaoIntelbrasSim.innerHTML='Sim';
        formulario.insertBefore(botaoIntelbrasSim, wifi);

        //botao Intelbras Nao
        var botaoIntelbrasNao = document.createElement("button");

        divBottonIntelbras.appendChild(botaoIntelbrasNao);
        corpo.appendChild(botaoIntelbrasNao);
        botaoIntelbrasNao.type = "button";

        botaoIntelbrasNao.innerHTML='Nao';
        formulario.insertBefore(botaoIntelbrasNao, wifi);

        //função quando a ONU apresenta quedas ou falhas
        botaoIntelbrasSim.onclick = function (){
            if (!botaoIntelbrasSimClicado){
                var paragrafoIntelbrasSim = document.createElement("p");
                var texto = document.createTextNode("Encaminhe para visita técnica para trocar equipamento obsoleto, que está gerando falhas.");
                paragrafoIntelbrasSim.appendChild(texto);
                var corpoDoTexto = document.querySelector("body");
                divBottonIntelbras.appendChild(paragrafoIntelbrasSim);
                corpoDoTexto.appendChild(paragrafoIntelbrasSim);
                formulario.insertBefore(paragrafoIntelbrasSim, wifi);
                botaoIntelbrasSimClicado = true;
                }
        };
        
        //função quando a ONU não apresenta quedas ou falhas
        botaoIntelbrasNao.onclick = function (){
            if(!botaoIntelbrasNaoClicado){
                var paragrafoIntelbrasNao = document.createElement("p");
                var texto = document.createTextNode("Não há motivos para trocar o equipamento neste momento.");
                paragrafoIntelbrasNao.appendChild(texto);
                var corpoDoTexto = document.querySelector("body");
                divBottonIntelbras.appendChild(paragrafoIntelbrasNao);
                corpoDoTexto.appendChild(paragrafoIntelbrasNao);
                formulario.insertBefore(paragrafoIntelbrasNao, wifi);
                botaoIntelbrasNaoClicado = true;
            }
        };
    }

};


//variaveis para correção de bugs quando sim, existem problemas no wifi
var problemaWifiClicado = false;
var botaoWifiSimClicado = false;
var botaoWifiNaoClicado = false;

//div para localização dos elementos
var velocidade = document.querySelector("#velocidade");

// a concluir problemas no wifi
const problemaWifi = () => {

    if(!problemaWifiClicado){
    
        problemaWifiClicado = true;
        wifiVerdade();
        
        //botao sim, cliente apresenta problemas de alcance na rede wifi
        var divBottonWiffi = document.createElement("div");
        var botaoWifiSim = document.createElement("button");
        formulario.insertBefore(divBottonWiffi, velocidade);

        var corpo = document.querySelector("body");

        divBottonWiffi.appendChild(botaoWifiSim);
        corpo.appendChild(botaoWifiSim);
        botaoWifiSim.type = "button";

        botaoWifiSim.innerHTML='Sim';
        formulario.insertBefore(botaoWifiSim, velocidade);

        //botao não, cliente não apresenta problemas de alcance na rede wifi
        var botaoWifiNao = document.createElement("button");

        divBottonWiffi.appendChild(botaoWifiNao);
        corpo.appendChild(botaoWifiNao);
        botaoWifiNao.type = "button";

        botaoWifiNao.innerHTML='Nao';
        formulario.insertBefore(botaoWifiNao, velocidade);

        //função quando sim, há problemas no wifi
        botaoWifiSim.onclick = function (){
            if (!botaoWifiSimClicado){
                var paragrafoWifiSim = document.createElement("p");
                var texto = document.createTextNode("Problema resolvido remotamente");
                paragrafoWifiSim.appendChild(texto);
                var corpoDoTexto = document.querySelector("body");
                divBottonWiffi.appendChild(paragrafoWifiSim);
                corpoDoTexto.appendChild(paragrafoWifiSim);
                formulario.insertBefore(paragrafoWifiSim, velocidade);
                botaoWifiSimClicado = true;
            }
        };
        
        //função quando a ONU não apresenta quedas ou falhas
        botaoWifiNao.onclick = function (){
            if(!botaoWifiNaoClicado){
                var paragrafoWifiNao = document.createElement("p");
                var texto = document.createTextNode("Encaminhe para visita técnica para que um técnico analise no local.");
                paragrafoWifiNao.appendChild(texto);
                var corpoDoTexto = document.querySelector("body");
                divBottonWiffi.appendChild(paragrafoWifiNao);
                corpoDoTexto.appendChild(paragrafoWifiNao);
                formulario.insertBefore(paragrafoWifiNao, velocidade);
                botaoWifiNaoClicado = true;
            }
        };
    }

};




// função quando as quedas acontecem
function quedasVerdade (){
    textoQuedas.innerText = "As quedas acontecem em outros clientes na mesma caixa?";
}
//função quando as quedas não acontecem
function quedasFalso (){
    textoQuedas.innerText = "Não existem quedas repetidas vezes dentro de 24h.";
}

//Ipv6 está ativo
function ipv6Verdade (){
    textoIpv6.innerText = "O ipv6 está ativo.";
}

//Ipv6 não está ativo
function ipv6Falso (){
    textoIpv6.innerText = "Ative o IPV6.";
}

//DNS está configurado corretamente
function dnsVerdade (){
    textoDns.innerText = "O DNS está configurado corretamente.";
}

//DNS não está configurado corretamente
function dnsFalso (){
    textoDns.innerText = "Configure o DNS corretamente.";
}

// função quando a ONU é parks
function parksVerdade (){
    textoParksVerdade.innerText = "Qual modelo?";
}

// função quando a ONU é Nokia
function NokiaVerdade (){
    textoParksVerdade.innerText = "Qual modelo?";
}

// função quando a ONU é Fiberhome
function fiberhomeVerdade (){
    textoParksVerdade.innerText = "Qual modelo?";
}

// função quando a ONU é Huawei
function HuaweiVerdade (){
    textoHuaweiVerdade.innerText = "Verifique se a versão da ONU é EG8145V5, senão for, atualize a versão da ONU.";
}

// função quando a ONU é Intelbras
function intelbrasVerdade (){
    textoIntelbrasVerdade.innerText = "A ONU apresenta falhas ou quedas?";
}

// função quando existe problemas no wifi
function wifiVerdade (){
    textoWifi.innerText = "Você conseguiu resolver remotamente?";
}

// função quando não existe problemas no wifi
function problemaNaoWifi (){
    textoWifi.innerText = "Não há problemas no alcance do wifi.";
}

// texto quando a velocidade contratada é suficiente para uso
function velocidadeSim (){
    textoVelocidade.innerText = "A velocidade contratada é suficiente para uso.";
}

// texto quando a velocidade contratada não é suficiente para uso
function velocidadeNao (){
    textoVelocidade.innerText = "Encaminhe uma o.s. para o setor comercial e informe o cliente que o setor comercial irá contata-lo para informar sobre uma proposta de upgrade.";
}

// texto quando o equipamento passa a banda contratada
function equipamentoBandaSim (){
    textoEquipamentoBanda.innerText = "O equipamento passa a banda contratada.";
}

// texto quando o equipamento não passa a banda contratada
function equipamentoBandaNao (){
    textoEquipamentoBanda.innerText = "Informe ao cliente que irá encaminhar um técnico para trocar seus equipamentos a custo da empresa.";
}

// texto quando o cliente tem problemas para acessar algum site, plataforma ou app especifico
function siteSim (){
    textoSite.innerText = "Encaminhe a o.s. para o setor de redes analisar.";
}

// texto quando o cliente não tem problemas para acessar algum site, plataforma ou app especifico
function siteNao (){
    textoSite.innerText = "O cliente não apresenta esse problema.";
}

// texto quando o cliente ainda tem problemas
function problemaSim (){
    textoProblema.innerText = "Encaminhe a o.s. para o setor responsável.";
}

// texto quando o cliente não tem problemas
function problemaNao (){
    textoProblema.innerText = "O cliente afirmou que seus problemas foram corrigidos.";
}