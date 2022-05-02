let array = [5, 8, 17, 10];

function mapComThis(arr){
    return arr.map(function multiplicaNum(num){
        return num * 2;
    });
}

console.log(mapComThis(array));