function sortByTwoCriteria(stringArr){

    stringArr.sort((a,b) => {
        return a.length === b.length
            ? a.localeCompare(b)
            : a.length - b.length;
    });

    stringArr.forEach(el => console.log(el))

    // arr.sort(twoCriteria);
    //
    // function twoCriteria(first,second){
    //     if (first.length === second.length){
    //         return first.localeCompare(second);
    //     }
    //     return first.length - second.length;
    // }
}
sortByTwoCriteria(['alpha','beta','gamma'])