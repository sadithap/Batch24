function maxWordLength(params) {
    let splitParams=params.split(' ');

    let maxLength=0;
    let index=0;
    for(let i=0;i<splitParams.length;i++){
        if(maxLength<splitParams[i].length){
            maxLength=splitParams[i].length;
            index=i;
        }
    }

    return splitParams[index];
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp