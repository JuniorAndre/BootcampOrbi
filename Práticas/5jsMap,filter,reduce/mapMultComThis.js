let array = [5, 8, 17, 10];

function mapComThis(arr, thisArg){
    return arr.map(function multiplicaNum(num){
        return num * this.value;
    }, thisArg);
}

const valor = {
    value: 3,
};

console.log(mapComThis(array, valor));