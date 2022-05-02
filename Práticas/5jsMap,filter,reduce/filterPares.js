let array = [5, 8, 17, 10];

function filterNum(arr){
    return arr.filter(function paresNum(num){
        if(num % 2 == 0){
            return num;
        }
    });
}

console.log(filterNum(array));