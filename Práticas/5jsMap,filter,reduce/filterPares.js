let array = [5, 8, 17, 10];

function mapComThis(arr){
    return arr.filter(function paresNum(num){
        if(num % 2 == 0){
            return num;
        }
    });
}

console.log(mapComThis(array));