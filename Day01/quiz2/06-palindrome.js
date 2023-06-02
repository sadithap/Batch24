
function isPalindrome(word){
    let lower=word.toLowerCase();

    for(let i=0;i<lower.length;i++){
        if(lower[i]!==lower[lower.length-1-i]){
            return false;
        }
    }

    return true;
}

console.log(isPalindrome('kasur ini rUsak'));//true