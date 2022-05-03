function somaNum(arr) {
	if (!arr || !arr.length) return;

	const somaArr = arr.reduce((prev, current) => prev + current);

	return somaArr;
}

console.log(somaNum([1, 2, 3, 4]));