function lastNumbersSequence(n,k){
    let result = [1];

    for (let i = 1; i < n; i++) {
        result[i] = sumLastK(result, k);
    }

    function sumLastK(arr, theK) {
        theK = arr.length > theK ? theK : arr.length;

        let sum = 0;

        // let tempK = 0;
        // for (let i = arr.length - 1; i >= 0 ; i--) {
        //     if (tempK === theK){ break; }
        //     sum += arr[i];
        //     tempK++;
        // }

        for (let i = 1; i <= theK; i++) {
            sum += arr[arr.length - i];
        }


        return sum;
    }

    return result;
}

console.log(lastNumbersSequence(8,2))


