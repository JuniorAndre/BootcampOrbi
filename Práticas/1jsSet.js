const myArray = [30,30,40,5,223,2049,3034,5];

fuction valueUnique(array){
    const mySet = new Set(array);

    return mySet;
}

console.log(valueUnique(myArray))