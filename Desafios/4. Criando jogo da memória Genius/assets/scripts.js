let order = [];
let clickedOrder = [];
let score = 0

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

//cria ordem de cores aleatória
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

//checa se a ordem clicada é igual a ordem aleatória
let checkOrder= () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] !== order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    setTimeout(() => {
        createColorElement(color).classList.add('selected');
    }, 1000)

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//retorna a cor 
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
         return red;
    }else if(color == 2){
         return yellow;
    }else if(color == 3){
         return blue;
    }
}

 //próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

 //gameover
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar novo jogo!`);
    order = [];
    clickedOrder = [];

    playGame();
}

//começar jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();