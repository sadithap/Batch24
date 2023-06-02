function isCharsUnique(string){
    let stringSplit=string.split('');
    let current='';
    let count=0;
    for(let i=0;i<stringSplit.length;i++){
        current=stringSplit[i];
        count=0;
        for(let j=0;j<stringSplit.length;j++){
            if(stringSplit[j]==current){
                count++;
            }
            if(count>1){
                return false;
            }
        }
    }

    return true;
}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false