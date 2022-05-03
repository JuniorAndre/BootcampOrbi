const lista = [
    {
        name:'Cereal',
        preco: 25,
    }
    {
        name: 'Biscoito',
        preco: 7,
    }
    {
        name: 'Café',
        preco:10,
    }
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    lista.reduce(callback, saldoDisponivel);

}

function callback(prev, current){

    return current - prev;

}

console.log(calculaSaldo());