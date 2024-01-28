let listaDeNumeroSorteados =[];
let numeroLimite = 10;
let numeroSecreto= gerarNumeroAleatorio();
let tentativas=1;


function exbirTextoNaTela(tag , texto){
    let campo = document.querySelector(tag);
    campo.innerHTML=texto;
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {rate:1.2});
}

function exibirMsgInicial(){
    exbirTextoNaTela('h1','Jogo do número secreto');
    exbirTextoNaTela('p','Escolha um número entre 1 e 10');

}
 exibirMsgInicial();


function gerarNumeroAleatorio(){
    let numeroEscolhido= parseInt(Math.random () * numeroLimite + 1);
    let quantidadeDeElementosNaLista=listaDeNumeroSorteados.length;

    if(quantidadeDeElementosNaLista==numeroLimite){
        listaDeNumeroSorteados=[];
    }

    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
         return gerarNumeroAleatorio();
    }else
        listaDeNumeroSorteados.push(numeroEscolhido)
        console.log(listaDeNumeroSorteados)
        return numeroEscolhido;
    }

function limparCampo(){
    chute= document.querySelector('input');
    chute.value='';
}
function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMsgInicial()
    document.getElementById('reiniciar').setAttribute
    ('disabled',true);
}

function verificarChute(){
    let Chute = document.querySelector('input').value;
   // console.log(Chute==numeroSecreto); = mostra no console.log//
   if(Chute==numeroSecreto){
    exbirTextoNaTela('h1', 'Acertou!') 
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let msgTentativas=  `voce descobriu o número secreto! com ${tentativas} ${palavraTentativa}`;
    exbirTextoNaTela('p', msgTentativas);

    document.getElementById('reiniciar').removeAttribute
    ('disabled');
   }else{
    if(Chute > numeroSecreto){
        exbirTextoNaTela('p', 'O número secreto é menor');

    }else{
        exbirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++
    limparCampo();
   }
}