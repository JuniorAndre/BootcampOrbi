var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');
var caixaPergunta = document.querySelector('.caixaPergunta');
var pergunta = document.getElementById('pergunta');

mudarJogador('X');

//O que acontece quando um jogador clica em um quadrado
function escolherQuadrado(id){
    if(vencedor !== null){
        return;
    }

    var quadrado = document.getElementById(id);

    if(quadrado.innerHTML !== '-'){
        return;
    }

    caixaPergunta.style.opacity = '100%';

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O';
    }else{
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

//checa se o jogador realizou a sequência 
function checaVencedor(){
    if(checaSequencia(quadrados[0],quadrados[1],quadrados[2])){
        mudaCorQuadrado(quadrados[0],quadrados[1],quadrados[2]);
        mudarVencedor(quadrados[0]);
        return;
    }
    if(checaSequencia(quadrados[3],quadrados[4],quadrados[5])){
        mudaCorQuadrado(quadrados[3],quadrados[4],quadrados[5]);
        mudarVencedor(quadrados[3]);
        return;
    }
    if(checaSequencia(quadrados[6],quadrados[7],quadrados[8])){
        mudaCorQuadrado(quadrados[6],quadrados[7],quadrados[8]);
        mudarVencedor(quadrados[6]);
        return;
    }
    if(checaSequencia(quadrados[0],quadrados[3],quadrados[6])){
        mudaCorQuadrado(quadrados[0],quadrados[3],quadrados[6]);
        mudarVencedor(quadrados[0]);
        return;
    }
    if(checaSequencia(quadrados[1],quadrados[4],quadrados[7])){
        mudaCorQuadrado(quadrados[1],quadrados[4],quadrados[7]);
        mudarVencedor(quadrados[1]);
        return;
    }
    if(checaSequencia(quadrados[2],quadrados[5],quadrados[8])){
        mudaCorQuadrado(quadrados[2],quadrados[5],quadrados[8]);
        mudarVencedor(quadrados[2]);
        return;
    }
    if(checaSequencia(quadrados[0],quadrados[4],quadrados[8])){
        mudaCorQuadrado(quadrados[0],quadrados[4],quadrados[8]);
        mudarVencedor(quadrados[0]);
        return;
    }
    if(checaSequencia(quadrados[2],quadrados[4],quadrados[6])){
        mudaCorQuadrado(quadrados[2],quadrados[4],quadrados[6]);
        mudarVencedor(quadrados[2]);
    }
}

//muda a cor dos quadrados da sequência ganhadora
function mudaCorQuadrado(quadrado1,quadrado2,quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

//checa se três quadrados possuem o mesmo valor
function checaSequencia(quadrado1,quadrado2,quadrado3){
    let eigual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;
    }
    return eigual;
}

//reinicia jogo
function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    
    for (let i = 0; i <= 8; i++){
        quadrados[i].style.background = '#eee';
        quadrados[i].style.color = '#eee';
        quadrados[i].innerHTML = '-';
    }

    mudarJogador('X');
}