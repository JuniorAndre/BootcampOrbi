let order = [];
let clikedOrder = [];
let score = 0

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder
    clikedOrder = [];

    for(let i in order){
        let elementColor = createElement(order[i]);
    }
}

 function createElement(array){

 }